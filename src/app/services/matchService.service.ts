import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class MatchService {

  //apiURL: string = environment.endPointAPI;
  constructor(private http: HttpClient) { }

  matchList(data: any) {
    return this.http.post("https://demo.digitallexperience.com/dialex/webresources/Wapp/match/list", { "token":"817dd8e5dc7c750d48a5e0a16cd625c8"});
  }

  public getHeaders() {
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return headers;
  }
}
