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
  ngAfterViewChecked(){
    this.filter = 'home';
  }

  initialize() {
    //Servicio para recuperar eventos
    this.spinner = true;
    this.locals = [];
    this.filter = 'home';
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

}
