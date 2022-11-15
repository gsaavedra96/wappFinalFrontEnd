import { Component, OnInit } from '@angular/core';
import { MenuController, ModalController, LoadingController } from '@ionic/angular';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
//import { HttpService } from '../../services/httpService.service';
import { LoginPage } from '../login/login.page';
//import { SignupPage } from '../signup/signup.page';

@Component({
  selector: 'app-start',
  templateUrl: './start.page.html',
  styleUrls: ['./start.page.scss'],
})
export class StartPage implements OnInit {

  constructor(
    public menuCtrl: MenuController,
    //private authService: HttpService,
    public navCtrl: NavController,
    private router: Router,
    public modalCtrl: ModalController,
    public loadingController: LoadingController

  ) { }

  // tslint:disable-next-line: variable-name

  ionViewWillEnter() {
    this.menuCtrl.enable(false);
  }

  ngOnInit() {

  }

  async presentAlert(value:any) {
    const loading = await this.loadingController.create({
      spinner: null,
      duration: 2000,
      message: value,
      mode: 'ios'
    });
    await loading.present();
  }

  async initHome(){
    this.router.navigate(['/home']);
  }

  async goToLoginPage(){
    this.router.navigate(['/login']);
  }

  async register(){
    this.router.navigate(['/register']);
  }
}
