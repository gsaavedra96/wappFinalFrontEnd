import { CapacitorConfig } from '@capacitor/cli';


const config: CapacitorConfig = {
  plugins: {
    FirebaseMessaging: {
      presentationOptions: ["badge", "sound", "alert"],
    },
    SplashScreen: {
      launchShowDuration: 3000,
      launchAutoHide: true,
      backgroundColor: "#fff",
      androidSplashResourceName: "splash",
      //"androidScaleType": "CENTER_CROP",
      "showSpinner": false,
      //"androidSpinnerStyle": "large",
      //"iosSpinnerStyle": "small",
      //"spinnerColor": "#999999",
      splashFullScreen: true,
      splashImmersive: true,
      //layoutName: "launch_screen",
      //"useDialog": true
    }
  },
  appId: 'io.ionic.wilsterapp',
  appName: 'WilsterApp',
  webDir: 'www',
  bundledWebRuntime: false,
  /*cordova: {
    "preferences": {
      "ScrollEnabled": "false",
      "android-minSdkVersion": "19",
      "BackupWebStorage": "none",
      "SplashMaintainAspectRatio": "true",
      "FadeSplashScreenDuration": "0",
      "SplashShowOnlyFirstTime": "false",
      "SplashScreen": "none",
      "SplashScreenDelay": "0"
    }
  }*/
  
  
};

export default config;
