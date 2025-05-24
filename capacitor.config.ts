
import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'app.lovable.bf049113cb094ac0a4a511b8733c9ecc',
  appName: 'HikeCast - Weather Safety for Hikers',
  webDir: 'dist',
  // Production configuration - no development server
  plugins: {
    SplashScreen: {
      launchShowDuration: 3000,
      launchAutoHide: true,
      backgroundColor: "#059669",
      androidSplashResourceName: "splash",
      androidScaleType: "CENTER_CROP",
      showSpinner: true,
      androidSpinnerStyle: "large",
      iosSpinnerStyle: "small",
      spinnerColor: "#ffffff"
    },
    StatusBar: {
      style: "light",
      backgroundColor: "#059669"
    },
    App: {
      allowMixedContent: true
    }
  }
};

export default config;
