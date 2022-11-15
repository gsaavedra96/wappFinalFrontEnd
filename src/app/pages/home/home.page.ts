import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
//import { HttpService } from '../../services/httpService.service';
//import { UserService } from '../../services/userService.service';
import { Router } from '@angular/router';
import { AlertController, Platform } from '@ionic/angular';
//import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  //Subscriptions
  //private localSubscription: Subscription;
  //private logOutSubscription: Subscription;

  private locals: any = [];
  public spinner: boolean = false; 
  public filter: any;

  constructor(
    public menuCtrl: MenuController,
    //private httpService: HttpService,
    //private userService: UserService,
    private alertController: AlertController,
    private router: Router) { }

  public innerHeight: any;

  ngOnInit() {
    this.initialize();
    //this.getLocals();
  }

  

  initialize() {
    //Servicio para recuperar eventos
    this.spinner = true;
    this.locals = [];
    this.filter = 'home';
    this.changeView(this.filter);
  }

  changeView(filter:any) {
    this.filter = filter;
    switch (this.filter) {
      case 'feed':
        this.spinner = true;
        this.router.navigate(['feed']);
        break;
      case 'home':
        this.spinner = true;
        this.router.navigate(['home']);
        break;
      case 'account':
        this.spinner = true;
        this.router.navigate(['account']);
        break;
    }
  }

  async confirmOrderAlert() {
    const alert = await this.alertController.create({
      mode: 'ios',
      header: 'Cerrar Sesión',
      message: "¿Está seguro que quiere cerrar su sesión?",
      buttons: [
        {
          text: "Cancelar",
          handler: () => {
            alert.dismiss();
          }
        },
        {
          text: "Aceptar",
          handler: () => {
            this.logOut();
          }
        }]
    });
    await alert.present();
  }

  logOut() {
    
  }

/*   logOut() {
    if (this.logOutSubscription)
      this.logOutSubscription.unsubscribe()
    this.logOutSubscription = this.httpService.post("/user/sign-out", {username : this.userService.getUsername()}).subscribe((response: any) => {
      if (response.status == "success") {
        localStorageProvider.removeObject("userInfo");
        this.router.navigate(["/start"]);
      }
    });
  } */

}
