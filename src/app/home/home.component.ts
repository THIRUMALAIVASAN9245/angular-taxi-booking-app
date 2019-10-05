import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { EmployeeDetails } from './employee-details';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
    status: string;
    formDigestDetail: any;
    titleModel: string;
    userNameModel: string;

    constructor(private httpClient: HttpClient) { }

    ngOnInit(): void {
        this.getFormDigest();
        this.getAuthentication();
        this.getUserInfo();
        this.getData();
    }

    addDataDetails(): any {
        this.status = "";
        if (this.titleModel == undefined || this.titleModel == null) {
            this.setStatus("Please enter title");
            return true;
        }

        if (this.userNameModel == undefined || this.userNameModel == null) {
            this.setStatus("Please enter username");
            return true;
        }

        this.addData();
    }

    setStatus = message => {
        this.status = message;
    };

    public getFormDigest() {
        let options = {
            "accept": "application/json;odata=verbose",
            "contentType": "text/xml"
        };

        var siteUrl = "https://cognizantonline.sharepoint.com/sites/TestWeb/_api/contextinfo";
        this.httpClient.post(siteUrl, options).subscribe((response: Response) => {
            console.log(response);
            this.formDigestDetail = response;
        }, error => {
            console.log(error);
        });
    }

    public getUserInfo() {
        var siteUrl = "https://cognizantonline.sharepoint.com/sites/TestWeb/_api/web/currentuser";
        this.httpClient.get(siteUrl, {
            headers:
            {
                "accept": "application/json;odata=verbose",
                "contentType": "text/xml"
            }
        }).subscribe((response: Response) => {
            console.log(response);
        }, error => {
            console.log(error);
        });
    }

    public getAuthentication() {
        var siteUrl = "https://cognizantonline.sharepoint.com/sites/TestWeb/_api/lists/getbytitle('EmployeeList')/items";
        this.httpClient.get(siteUrl, {
            headers:
            {
                "accept": "application/json;odata=verbose",
                "contentType": "text/xml"
            }
        }).subscribe((response: Response) => {
            console.log(response);
        }, error => {
            console.log(error);
        });
    }

    public addData() {
        let httpHeaders = new HttpHeaders({
            'Content-Type': 'application/json;charset=UTF-8;odata=verbose',
            'Cache-Control': 'no-cache',
            'accept': 'application/json;odata=verbose',
            "X-HTTP-Method": "POST",
            "X-RequestDigest": this.formDigestDetail.FormDigestValue
        });
        let options = {
            headers: httpHeaders,
        };

        let listName = "EmployeeList";
        var itemType = this.getItemTypeForListName(listName);
        var item = {
            "__metadata": { "type": itemType },
            "Title": this.titleModel,
            "UserName": this.userNameModel
        };

        var siteUrl = "https://cognizantonline.sharepoint.com/sites/TestWeb/_api/lists/getbytitle('" + listName + "')/items";
        this.httpClient.post<any>(siteUrl, JSON.stringify(item), options).subscribe((response: Response) => {
            console.log(response);
        }, error => {
            console.log(error);
        });
    }

    public getItemTypeForListName(name) {
        return "SP.Data." + name.charAt(0).toUpperCase() + name.slice(1) + "ListItem";
    }

    public getData() {
        this.getEmployeeListData().subscribe((response: any) => {
            debugger;
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