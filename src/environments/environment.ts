// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  // configuracion de firebase, si no se configura no funcionara
  firebaseConfig : {
    apiKey: "AIzaSyA8kM9JitmBATptWuZSKwhgNnk0741Q5Mg",
    authDomain: "proyectofinal-96e45.firebaseapp.com",
    projectId: "proyectofinal-96e45",
    storageBucket: "proyectofinal-96e45.appspot.com",
    messagingSenderId: "946470241333",
    appId: "1:946470241333:web:c6c53827fec3a9d4499d7c"
  }

};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
