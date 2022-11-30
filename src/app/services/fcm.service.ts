import { Injectable } from '@angular/core';
import { localStorageProvider } from '../lib/localStorageProvider';
import {
  Capacitor
} from '@capacitor/core';
import {
    ActionPerformed,
    PushNotificationSchema,
    PushNotifications,
    Token,
    PushNotificationsPlugin,
  } from '@capacitor/push-notifications';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class FcmService {

  public token:any;  
  constructor(
    private router: Router) { }

    Initialize()  {
        console.log('Initializing HomePage');

    // Request permission to use push notifications
    // iOS will prompt user and return if they granted permission or not
    // Android will just grant without prompting
    PushNotifications.requestPermissions().then(result => {
      if (result.receive === 'granted') {
        // Register with Apple / Google to receive push via APNS/FCM
        PushNotifications.register();
      } else {
        // Show some error
      }
    });

    PushNotifications.addListener('registration', (token: Token) => {
      //alert('Push registration success, token: ' + token.value);
      localStorageProvider.setObject("token",token.value)
      //this.token = token.value
    });

    PushNotifications.addListener('registrationError', (error: any) => {
      //alert('Error on registration: ' + JSON.stringify(error));
    });

    PushNotifications.addListener(
      'pushNotificationReceived',
      (notification: PushNotificationSchema) => {
       // alert('Push received: ' + JSON.stringify(notification));
      },
    );

    PushNotifications.addListener(
      'pushNotificationActionPerformed',
      (notification: ActionPerformed) => {
        //alert('Push action performed: ' + JSON.stringify(notification));
      },
    );
  }
}