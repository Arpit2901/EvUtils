// // import { initializeApp } from "firebase/app";

// const firebaseConfig = {
//   apiKey: "AIzaSyAThITzdFKZyiIxtP9sOLuHIagM4sjY4ds",
//   authDomain: "electricvehicle-auth.firebaseapp.com",
//   projectId: "electricvehicle-auth",
//   storageBucket: "electricvehicle-auth.appspot.com",
//   messagingSenderId: "331300675490",
//   appId: "1:331300675490:web:0d9371e2d52520c9165cfb",
//   measurementId: "G-QJY4GXD0FT"
// };

// export const firebaseApp = initializeApp(firebaseConfig);


import { initializeApp } from "https://www.gstatic.com/firebasejs/9.7.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.7.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyBWRErm3kCavlaawCLx77KD_PLVEHOX-ow",
    authDomain: "random-project-feb85.firebaseapp.com",
    projectId: "random-project-feb85",
    storageBucket: "random-project-feb85.appspot.com",
    messagingSenderId: "892632159203",
    appId: "1:892632159203:web:106a20857f4697590dc6d6",
    measurementId: "G-FMV5MFSK0V"
  };

  console.log('initializing firebase')

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);

  export default app;