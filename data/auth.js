
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.7.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.7.0/firebase-analytics.js";
  import { getAuth, signInWithPopup, GoogleAuthProvider } from "https://www.gstatic.com/firebasejs/9.7.0/firebase-auth.js";

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
  const provider = new GoogleAuthProvider();
  const firebaseAuth = getAuth(app);
  
  console.log(firebaseAuth)
  // const analytics = getAnalytics(app);
  const login = () => {
    console.log('here 1')
    const {
      user
    } = signInWithPopup(firebaseAuth, provider);
    console.log('here 2')
    const {
      refreshToken,
      providerData
    } = user;
    console.log('here 3', user)
    console.log(refreshToken, providerData);
    localStorage.setItem("user", JSON.stringify(providerData));
    localStorage.setItem("accessToken", JSON.stringify(refreshToken));
    router.push("/");
  },
  logout= () => {
    localStorage.clear();
    loggedOutHtml.style.display = 'none';
    // router.push("/login");
  };
  document.getElementById('login').addEventListener('click', login);
