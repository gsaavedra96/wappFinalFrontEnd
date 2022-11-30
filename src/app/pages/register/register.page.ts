import { Component, OnInit } from '@angular/core';
import { localStorageProvider } from 'src/app/lib/localStorageProvider';
import { UserService } from 'src/app/services/userService.service';
import { Router, NavigationEnd } from '@angular/router';
import { ToastService } from 'src/app/services/toastService.service';
import { FcmService } from 'src/app/services/fcm.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  constructor(
    private userService : UserService,
    private router: Router,
    private toastService : ToastService,
    private fcmService : FcmService
  ) { }

  public user :any={};
  public spinner: boolean = false;

ngOnInit() {
}

submit(){
  this.userService.registerAuth({email : this.user.email, password : this.user.password})
    .then(response =>{
      let data : any = response.user;
      this.userService.addUser(this.user).subscribe((response: any) => { 
      
        this.userService.addUser(this.user).subscribe((response: any) => { 

          this.userService.loginAuth({email : this.user.email, password : this.user.password})
          .then(response =>{
            let data : any = response.user;
            this.fcmService.Initialize()
            setTimeout(() => {
              /** spinner ends after 5 seconds */
              this.userService.login(this.user.email,this.user.password).subscribe((response: any) => {
                localStorageProvider.setObject("userInfo", response.data.user); 
                this.router.navigate(['home'])
              })
            }, 5000);
          }) 
        })
    })
}) 
  /*this.userService.addUser(this.user).subscribe((response: any) => { 
    this.login();
 })*/
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
