import { Injectable } from '@angular/core';
//import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Platform } from '@ionic/angular';
//import { FirebaseX } from "@ionic-native/firebase-x/ngx";
import { FirebaseMessaging } from '@capacitor-firebase/messaging';

import { Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, signInWithPopup, GoogleAuthProvider } from '@angular/fire/auth';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  private token = '234242323512dsafsad54325gfds';
  private deviceType: any = 0;
  //apiURL: string = environment.endPointAPI;
  constructor(private http: HttpClient,
    private platform: Platform,
    private auth: Auth
    //private firebase: FirebaseX
    ) {

    }

  getUser(data: any) {
    return this.http.post("https://demo.digitallexperience.com/dialex/webresources/Wapp/user/get", { data, "token":"817dd8e5dc7c750d48a5e0a16cd625c8"});
  }

  addUser(data:any){
    return this.http.post("https://demo.digitallexperience.com/dialex/webresources/Wapp/user/add", { data , "token":"817dd8e5dc7c750d48a5e0a16cd625c8"});
  }

  login(email:any,password:any,token:any){

  /*  console.log("email",email)
   console.log("password",password)
   console.log("token",token.accessToken) */
    let data = {
        'token': "817dd8e5dc7c750d48a5e0a16cd625c8",
        'data': {
            "user":{
                'email': email,
                'password': password,
            },
        "type": this.deviceType,
        "notificationId": token.accessToken
        }
    };

    return this.http.post("https://demo.digitallexperience.com/dialex/webresources/Wapp/user/login",  data );
  }

  registerAuth({ email, password }: any) {
    return createUserWithEmailAndPassword(this.auth, email, password);
  }

  loginAuth({ email, password }: any) {
    return signInWithEmailAndPassword(this.auth, email, password);
  }

  loginWithGoogle() {
    return signInWithPopup(this.auth, new GoogleAuthProvider());
  }

/*
  private async getToken() {
    if (this.platform.is('android')) {
        this.deviceType = 1;
      this.token = await this.firebase.getToken()
    } 
    if (this.platform.is('ios')) {
        this.deviceType = 2;
      this.token = await this.firebase.getToken();
      await this.firebase.grantPermission();
    }
    console.log(this.token);
  }*/

  /*private async checkPermissions(){
    let result = await FirebaseMessaging.checkPermissions();
    return result.receive;
  }

  private async getToken (){
    let result = await FirebaseMessaging.getToken();
    console.log("token id ",result.token)
    return result.token;
  }*/


  public getHeaders() {
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return headers;
  }
}
