

import { Injectable} from '@angular/core';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  constructor(
    private toastCtrl: ToastController
  ) {
  }

  async openToast(message : any,success?: boolean) {
    let actualColor = success? 'primary' : 'danger' ;
    let toast = await this.toastCtrl.create({
      message: message,
      duration: 2000,
      color: actualColor,
      position: 'bottom'
    });
    await toast.present();
  }


}

