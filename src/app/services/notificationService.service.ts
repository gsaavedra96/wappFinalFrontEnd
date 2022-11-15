import { Injectable } from "@angular/core";
import { Platform } from "@ionic/angular";
import { FirebaseauthService } from "./firebaseauth.service";
import { FirestoreService } from "firestore.service"
import { HttpService } from "./httpService.service";

import {
    ActionPerformed,
    PushNotificationSchema,
    PushNotifications,
    Token,
  } from '@capacitor/push-notifications';
  