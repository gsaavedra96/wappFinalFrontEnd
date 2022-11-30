import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, Platform } from '@ionic/angular';
import { localStorageProvider } from 'src/app/lib/localStorageProvider';

@Component({
  selector: 'app-account',
  templateUrl: './account.page.html',
  styleUrls: ['./account.page.scss'],
})
export class AccountPage implements OnInit {

  constructor(private router: Router,private alertController: AlertController,) { }

  public user : any;
  public isLogged: boolean=false;
  public filter: any;

  ngOnInit() {
    this.initializeVariables()
    this.checkUserLogged();
    this.filter = 'account';
  }

  ngAfterViewChecked(){
    this.filter = 'account';
  }

  segmentChanged(filter:any) {
    this.filter = filter;
    switch (this.filter) {
      case 'feed':
        this.router.navigate(['feed']);
        break;
      case 'home':
        this.router.navigate(['home']);
        break;
      case 'account':
        this.router.navigate(['account']);
        break;
    }
  }

  initializeVariables(){
    this.filter = 'account';
    this.isLogged = false;
    this.user = {};
    this.checkUserLogged();
  }

  

  checkUserLogged(){
    let logged = localStorageProvider.getObject('userInfo');
    if (logged) {
      this.isLogged =  true;    
    }
    this.isLogged =  true;
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
    console.log("LOG OUT")
    localStorageProvider.removeObject("userInfo");
    this.router.navigate(['/'])
  }

  goToRegisterPage(){
    this.router.navigate(['/register']);

  }

  goToLoginPage(){
    this.router.navigate(['/login']);
    
  }
}
