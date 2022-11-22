import { CapacitorConfig } from '@capacitor/cli';


const config: CapacitorConfig = {
  plugins: {
    FirebaseMessaging: {
      presentationOptions: ["badge", "sound", "alert"],
    },
  },
  appId: 'io.ionic.wilstermannapp',
  appName: 'WilstermannApp',
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
