
# HikeCast Mobile App Deployment Guide

## Prerequisites

Before you begin, make sure you have:
- A Mac with Xcode installed (for iOS deployment)
- Android Studio installed (for Android deployment)
- Apple Developer Account ($99/year) for iOS App Store
- Google Play Developer Account ($25 one-time fee) for Google Play Store

## Step 1: Export and Setup Local Development

1. **Export to GitHub**: Click the GitHub button in Lovable and export your project
2. **Clone locally**: 
   ```bash
   git clone [your-github-repo-url]
   cd hikecast
   npm install
   ```

## Step 2: Add Mobile Platforms

```bash
# Add iOS platform (requires macOS)
npx cap add ios

# Add Android platform
npx cap add android
```

## Step 3: Build for Production

```bash
# Build the web app
npm run build

# Sync to native platforms
npx cap sync
```

## Step 4: Configure App Icons and Splash Screens

### iOS Icons (required sizes):
- 20x20, 29x29, 40x40, 58x58, 60x60, 80x80, 87x87, 120x120, 180x180, 1024x1024

### Android Icons (required sizes):
- 36x36, 48x48, 72x72, 96x96, 144x144, 192x192

Place icons in:
- iOS: `ios/App/App/Assets.xcassets/AppIcon.appiconset/`
- Android: `android/app/src/main/res/` (various drawable folders)

## Step 5: Update App Information

### iOS (ios/App/App/Info.plist):
```xml
<key>CFBundleDisplayName</key>
<string>HikeCast</string>
<key>CFBundleVersion</key>
<string>1.0.0</string>
```

### Android (android/app/src/main/AndroidManifest.xml):
```xml
<application android:label="HikeCast">
```

## Step 6: Test on Devices

```bash
# Test on iOS simulator/device
npx cap run ios

# Test on Android emulator/device
npx cap run android
```

## Step 7: Prepare for Store Submission

### Create App Store Assets:
1. **Screenshots** (various device sizes)
2. **App Description** and **Keywords**
3. **Privacy Policy** (required)
4. **App Category**: Navigation or Health & Fitness

### iOS App Store:
1. Open `ios/App/App.xcworkspace` in Xcode
2. Archive the app (Product → Archive)
3. Upload to App Store Connect
4. Fill out app information and submit for review

### Google Play Store:
1. Generate signed APK/AAB in Android Studio
2. Upload to Google Play Console
3. Fill out store listing and submit for review

## Step 8: Environment Variables for Production

Make sure to set up proper environment variables for production:
- API keys for weather services
- Any other external service credentials

## Step 9: Post-Launch

- Monitor app performance and crashes
- Respond to user reviews
- Plan updates and new features
- Keep dependencies updated

## Important Notes

- iOS review process typically takes 1-7 days
- Android review process typically takes 1-3 days
- Both stores have specific guidelines that must be followed
- Test thoroughly on real devices before submission
