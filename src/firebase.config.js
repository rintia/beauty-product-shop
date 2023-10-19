// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD4O2HOFOq2bNPHBosO2lAShhDk5Qc2nFs",
  authDomain: "brand-shop-client-5068c.firebaseapp.com",
  projectId: "brand-shop-client-5068c",
  storageBucket: "brand-shop-client-5068c.appspot.com",
  messagingSenderId: "450132796822",
  appId: "1:450132796822:web:56732132778a329cf5e9b7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;