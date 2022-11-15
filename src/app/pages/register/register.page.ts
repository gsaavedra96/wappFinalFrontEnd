import { Component, OnInit } from '@angular/core';
import { localStorageProvider } from 'src/app/lib/localStorageProvider';
import { UserService } from 'src/app/services/userService.service';
import { Router, NavigationEnd } from '@angular/router';
import { ToastService } from 'src/app/services/toastService.service';

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
            this.userService.login(this.user.email,this.user.password,response.user).subscribe((response: any) => { 
              this.router.navigate(['home'])
            })
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
