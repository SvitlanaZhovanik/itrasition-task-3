import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAjl4zOwf0QR6y29YEWyZv-KzkKvJ4AqdU",
  authDomain: "auth-itransition.firebaseapp.com",
  databaseURL:
    "https://auth-itransition-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "auth-itransition",
  storageBucket: "auth-itransition.appspot.com",
  messagingSenderId: "637321004800",
  appId: "1:637321004800:web:50824db753ee97b25755e5",
};

export const app = initializeApp(firebaseConfig);
