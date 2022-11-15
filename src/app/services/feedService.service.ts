import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class FeedService {

  //apiURL: string = environment.endPointAPI;
  constructor(private http: HttpClient) { }

  get() {
    return this.http.post("http://216.122.168.190:8080/dialex/webresources/Wapp/feed/list", { "token":"817dd8e5dc7c750d48a5e0a16cd625c8"});
  }

  public getHeaders() {
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return headers;
  }
}
