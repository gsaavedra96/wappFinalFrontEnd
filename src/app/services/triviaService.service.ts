import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class TriviaService {

  //apiURL: string = environment.endPointAPI;
  constructor(private http: HttpClient) { }

  listTrivia(data: any) {
    return this.http.post("http://216.122.168.190:8080/dialex/webresources/Wapp/trivia/list", { "token":"817dd8e5dc7c750d48a5e0a16cd625c8"});
  }

  getTrivia(id: any) {
    return this.http.post("http://216.122.168.190:8080/dialex/webresources/Wapp/trivia/get", { data : { id : id}, "token":"817dd8e5dc7c750d48a5e0a16cd625c8"});
  }

  public getHeaders() {
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return headers;
  }
}
