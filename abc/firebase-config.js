import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: "AIzaSyAThITzdFKZyiIxtP9sOLuHIagM4sjY4ds",
  authDomain: "electricvehicle-auth.firebaseapp.com",
  projectId: "electricvehicle-auth",
  storageBucket: "electricvehicle-auth.appspot.com",
  messagingSenderId: "331300675490",
  appId: "1:331300675490:web:0d9371e2d52520c9165cfb",
  measurementId: "G-QJY4GXD0FT"
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);