import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
//import { LoginService } from 'src/app/services/login.service';
import { Router } from '@angular/router';
import { Platform } from '@ionic/angular';
import { UserService } from 'src/app/services/userService.service';
import { localStorageProvider } from 'src/app/lib/localStorageProvider';
import { ToastService } from 'src/app/services/toastService.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  //public loginForm: FormGroup;
  public errorMessage: any;
  public username: any;
  public password: any;
  public isInvalidUser: any;
  public invalidUserMessage: any;
  //public spinner: boolean;
  public user :any={};


  constructor(
    private userService : UserService,
    private toastService : ToastService,
    public formBuilder: FormBuilder,
    //private loginService: LoginService,
    private router: Router,
    private platform: Platform,
   // private toastService: ToastService
  ) { }

  ngOnInit() {
    //this.initializeFormVariables();
    //this.initializeVariables();
    //this.goBackButtonSupscription();
  }

  goBackButtonSupscription() {
    this.platform.backButton.subscribe(() => {
      if (this.router.isActive("/login", false))
        //navigator['app'].exitApp();
        console.log("ACTIVATTE PLATFORM")
    })
  }

  initializeVariables() {
    //this.spinner = false;
    this.isInvalidUser = false;
    this.username = '';
    this.password = '';
  }

  initializeFormVariables() {
    /* this.loginForm = this.formBuilder.group({
      password: new FormControl('', Validators.compose([
        Validators.required
      ])),
      username: new FormControl('', Validators.compose([
        Validators.required
      ]))
    })
    this.errorMessage = {
      'username': [
        { type: 'required', message: 'Usuario requerido' }
      ],
      'password': [
        { type: 'required', message: 'Contrasena requerida' }
      ]
    } */
  }

  login() {
    //this.spinner = true;
  this.userService.loginAuth({email : this.user.email, password : this.user.password})
    .then(response =>{
      let data : any = response.user;
      this.userService.login(this.user.email,this.user.password,data.accessToken).subscribe((response: any) => { 
        this.router.navigate(['home'])
    })
  }) 

  }

  prepareUserInfo(infoUser : any){
    let userInfo = {
      id : infoUser.id,
      username : infoUser.username,
      name : infoUser.name,
      email : infoUser.email
    }
    return userInfo;
  }
  
}
