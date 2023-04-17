// Import the functions you need from the SDKs you need
import {initializeApp} from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCSK6Izm8gf-RSzwAw02ZocPVUxFEq2fz4",
    authDomain: "nagib-firebase.firebaseapp.com",
    projectId: "nagib-firebase",
    storageBucket: "nagib-firebase.appspot.com",
    messagingSenderId: "217245042148",
    appId: "1:217245042148:web:275aa11138052fb4a273f1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app