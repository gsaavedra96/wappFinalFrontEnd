import { Injectable } from '@angular/core';
//import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class CommentService {

  //apiURL: string = environment.endPointAPI;
  constructor(private http: HttpClient) { }

  commentListByNewId(data: any) {
    return this.http.post("http://216.122.168.190:8080/dialex/webresources/Wapp/comment/list", { data, "token":"817dd8e5dc7c750d48a5e0a16cd625c8"});
  }

  addCommentByNewId(data:any){
    return this.http.post("http://216.122.168.190:8080/dialex/webresources/Wapp/comment/add", { data , "token":"817dd8e5dc7c750d48a5e0a16cd625c8"});
  }

  public getHeaders() {
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return headers;
  }
}
