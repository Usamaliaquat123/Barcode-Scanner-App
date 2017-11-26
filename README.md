
# Barcode Scanner App

Barcode scanner app is an Android , iOs and Windows Phone app for generating and scanning **Qrcodes**  and saving into firebase firestore . You can access previous qrcodes formats and values by logging into your app account. This app is basically for brands , firms who wants scan products **Qrcodes** and generate products **Qrcodes**.
## Getting Started
To getting started. All you have to do is to download the zip file in github OR you can clone this 
project in github using git clone. This project have including firebase authentications, firestore , api.ai(Realtime Messaging)  and some sort of cordova plugins.

### Prerequisites
Firstly you will need to install NodeJs , Ionic and cordova as well. Second make sure you created your firebase account. Third create your [Dialogflow](https://dialogflow.com/) account. Last download this project in your system to get up and running app.  

```
// Getting files
git clone https://github.com/Usamaliaquat123/Barcode-Scanner-App
```

### Installing
First go to 
```
src/enviroment.ts
```
and add firebase web initialization 
```
firebase.initializeApp({
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  databaseURL: "YOUR_DATABASE_URL",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "MESSAGING SENDER ID"
});
```

and also install dependencies 
```
npm i OR npm install
```
Now firebase initialization setup successfully. Its time to include [Dialogflow](https://github.com/Usamaliaquat123/Barcode-Scanner-App) api.
Go to your [Dialogflow](https://console.dialogflow.com) account and [create agent](https://console.dialogflow.com/api-client/#/newAgent) and click create agent. After creating agent. Go to settings and copy **client access token** like this

![enter image description here](http://res.cloudinary.com/ulcreative-softwares/image/upload/v1511717001/Github%20Account/Barcode%20Scanner%20Repository/Screenshot_1.png)

Copy this **client access token** and paste it in `src/enviroment.ts` like this
```
    dialogflow : {
      angularBot :  'DIALOGFLOW_CLIENT_ACCESS_TOKEN'
    }
```
After this congratz installation setup complete. Now you are ready to test your app.

## Running the test

Open up your command prompt navigate to the project folder and type 
```
ionic serve
```
Want to run in the emulator OR device
```
ionic cordova run android  --prod -l
```


## Run on native devices
want to run in android native device. Type this command
```
ionic cordova run android --prod
``` 


## Built With
* [ionic3](https://ionicframework.com/) - The mobile framework used
* [Angular2/4](https://angular.io/) - Language used in frontend
* [API.ai](https://dialogflow.com/) - Adding realtime bot chat
* [Firebase](https://firebase.google.com/) - Backend getting users data | and response back to android app.
## Contributing

Please read [CONTRIBUTING.md](https://github.com/Usamaliaquat123/Barcode-Scanner-App/blob/master/CONTRIBUTING.md) for details on our code of conduct, and the process for submitting pull requests to us.

## Versioning
Versions
```
0.0.1 // initial Release

```

## Authors
* **Usama Liaquat** - *Developer* - [Ulcreative Softwares](https://ulcreativeweb.wordpress.com/)

See also the list of [contributors](https://github.com/Usamaliaquat123/Barcode-Scanner-App/blob/master/CONTRIBUTING.md) who participated in this project.

## License
This project is licensed under the MIT License . See [License](https://github.com/Usamaliaquat123/Barcode-Scanner-App/blob/master/LICENSE) for details.

## Acknowledgments

* You can use code for inspirational purpose only
* Inspiration
* etc


### Special Thanks To

<div style="display:inline;">

<img src="https://angular.io/assets/images/logos/angular/angular.png" width="200">
<img src="https://camo.githubusercontent.com/1c4cc9d7e61489e179f5c70a3f493b1f8a0b6e70/68747470733a2f2f63646e2e61757468302e636f6d2f626c6f672f616c7465726e6174697665732d746f2d6e61746976652d6d6f62696c652d646576656c6f706d656e742f696f6e69632d6c6f676f2e706e67" width="200">

<img src="https://cdn.dribbble.com/users/528264/screenshots/3140440/firebase_logo.png" width="200">

<img src="https://home-assistant.io/images/supported_brands/dialogflow.png" width="200">
</div>
