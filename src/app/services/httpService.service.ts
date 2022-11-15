import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from "rxjs/operators";
//import { LoginService } from './login.service';
//import { localStorageProvider } from './../lib/localStorageProvider'
//import { localStorageProvider } from '../../app/lib/localStorageProvider';
//import { UserService } from './userService.service';
import { EventEmitter } from '@angular/core';

const serverIp = 'api.aitbol.com';
const port = '8080';
const endPoint = 'wapp/webresources';

@Injectable()
export class HttpService {

    constructor(private httpClient: HttpClient, /*  private userService: UserService */ ) {
    }

    public post(url: string, data: any, isAccess?:boolean) {
        let postData:any = {
            "token":"817dd8e5dc7c750d48a5e0a16cd625c8"
        }
        //postData.data = data;
//        if (!isAccess) postData.token = this.userService.getToken();
//            token: this.loginService.getToken(),
//            data: data
/*         let headers = new HttpHeaders();
        headers.append('Access-Control-Allow-Headers','Content-Type,Access-Control-Allow-Origin,Accept');
        headers.append('Content-Type', 'application/json');
        headers.append('Access-Control-Allow-Origin', '*');
        let HEAD = {
            headers: headers
        };
 */
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
                'Access-Control-Allow-Methods':'GET, OPTIONS, HEAD, PUT, POST',
                'Access-Control-Allow-Credentials': 'true'
              })
            };

        //.set("Content-Type","application/json")
/*         .set("Access-Control-Allow-Origin", "*")
        //.set("Access-Control-Allow-Methods","GET, OPTIONS, HEAD, PUT, POST")
        .set("Access-Control-Allow-Headers","*")
        .set("Access-Control-Allow-Credentials","true")
        .set("Host","*");    */
 
        //if (authorization) HEAD.headers.append("Authorization", "Bearer " + localStorageProvider.getObject("user").token);
        //return this.httpClient.post("https://" + serverIp + ":" + port + endPoint + url, postData, HEAD)
        return this.httpClient.post("http://api.aitbol.com:8088/wapp/webresources"+url, postData,httpOptions)
            .pipe(map((response: any) => {
                return response;
            }))
    }
}
















