import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { EmployeeDetails } from '../home/employee-details';

@Component({
  selector: 'app-contact-create',
  templateUrl: './contact-create.component.html',
  styleUrls: ['./contact-create.component.css']
})
export class ContactCreateComponent implements OnInit {
  status: string;
  employeeListDetail: any;

  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
    this.getData();
  }

  setStatus = message => {
    this.status = message;
  };

  public getData() {
    this.getEmployeeListData().subscribe((response: any) => {
      debugger;
      this.employeeListDetail = response;
      console.log(response);
    }, error => {
      console.log(error);
    });
  }

  getEmployeeListData(): Observable<any[]> {
    let httpHeaders = new HttpHeaders({
      'Content-Type': 'application/json;charset=UTF-8;odata=verbose',
      'Cache-Control': 'no-cache',
      'accept': 'application/json;odata=verbose'
    });
    let options = {
      headers: httpHeaders
    };
    var apiURL = "https://cognizantonline.sharepoint.com/sites/TestWeb/_api/lists/getbytitle('EmployeeList')/items";
    return this.httpClient.get(apiURL, options)
      .pipe(map((resspone: any) => {
        debugger;
        return resspone.d.results.map(item => {
          return new EmployeeDetails(
            item.GUID,
            item.Title,
            item.UserName
          );
        });
      }));
  }
}
