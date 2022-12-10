// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBMiRbU4ige4CLfT0pIYuRGOZZ8VJuuV-4",
  authDomain: "coosh-e3bfe.firebaseapp.com",
  projectId: "coosh-e3bfe",
  storageBucket: "coosh-e3bfe.appspot.com",
  messagingSenderId: "120691024570",
  appId: "1:120691024570:web:22a18304ad6a126c049883",
  measurementId: "G-MNDFVVD7N4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
console.log(analytics);
