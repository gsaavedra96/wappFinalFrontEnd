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

  ngOnInit() {
    this.initializeVariables()
  }

  initializeVariables(){
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


  initHome(){
    localStorageProvider.setObject("userInfo", this.prepareUserInfo());
  }

  prepareUserInfo(){
    let userInfo = {
      username : this.user.username,
/*       role : info.role,
      token : info.token */
    }
    return userInfo;
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
