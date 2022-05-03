console.log('auth.js init')
const loggedInHtml = document.getElementById('logged-in'),
  loggedOutHtml = document.getElementById('logged-out'),
  userDisplayName = document.getElementById('user-displayName'),
  userEmailHtml = document.getElementById('user-email'),
  loginButton = document.getElementById('login'),
  logoutButton = document.getElementById('logout'),
  isLoggedIn = false,
  accessToken = localStorage.getItem('accessToken'),
  userInfo = localStorage.getItem('user');

loggedInHtml.style.display = 'none';
if (accessToken) console.log('token found')
console.log(userInfo, accessToken);

import { initializeApp } from "https://www.gstatic.com/firebasejs/9.7.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.7.0/firebase-analytics.js";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "https://www.gstatic.com/firebasejs/9.7.0/firebase-auth.js";

const firebaseConfig = 
// {
//   apiKey: "AIzaSyAThITzdFKZyiIxtP9sOLuHIagM4sjY4ds",
//   authDomain: "electricvehicle-auth.firebaseapp.com",
//   projectId: "electricvehicle-auth",
//   storageBucket: "electricvehicle-auth.appspot.com",
//   messagingSenderId: "331300675490",
//   appId: "1:331300675490:web:0d9371e2d52520c9165cfb",
//   measurementId: "G-QJY4GXD0FT"
// }
{
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
const provider = new GoogleAuthProvider();
const firebaseAuth = getAuth(app);

console.log(firebaseAuth)
const login = async () => {
  console.log('here 1')
  const {user} = await signInWithPopup(firebaseAuth, provider);
  if (user) {
    const {refreshToken,providerData} = user;
    // console.log(refreshToken, providerData);
    localStorage.setItem("user", JSON.stringify(providerData));
    localStorage.setItem("accessToken", JSON.stringify(refreshToken));
    loggedInHtml.style.display = 'none';
    loggedOutHtml.style.display = 'block';
    document.location = document.location.origin+'/api/html/index1.html'
  }
},
logout= () => {
  localStorage.clear();
  loggedOutHtml.style.display = 'none';
  loggedInHtml.style.display = 'block';
};

loginButton.addEventListener('click', login);
logoutButton.addEventListener('click', logout);