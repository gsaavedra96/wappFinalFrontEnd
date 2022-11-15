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
  bundledWebRuntime: false
};

export default config;
