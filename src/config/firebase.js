// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAdfk4CRXOw_SYNcNv_VrShF2gY0DgbK48",
  authDomain: "chris-rosas-web.firebaseapp.com",
  projectId: "chris-rosas-web",
  storageBucket: "chris-rosas-web.appspot.com",
  messagingSenderId: "528871640613",
  appId: "1:528871640613:web:428f67b6b0bb4d41fb39cc"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
export const db = getFirestore(firebaseApp);