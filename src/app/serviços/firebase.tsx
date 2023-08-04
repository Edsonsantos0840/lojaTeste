import { initializeApp } from "firebase/app";
import { getDatabase } from 'firebase/database';
import 'firebase/database'

export default function firebaseConfig() {
  const firebaseConfig = {
    apiKey: "AIzaSyDbVp4D4_r_wg4e479_ZTQCgCg0GB_KuYE",
    authDomain: "minhalojaapr.firebaseapp.com",
    databaseURL: "https://minhalojaapr-default-rtdb.firebaseio.com",
    projectId: "minhalojaapr",
    storageBucket: "minhalojaapr.appspot.com",
    messagingSenderId: "487882713708",
    appId: "1:487882713708:web:3d02cac59dd1e83cec0649"
  };
  
  
  const app = initializeApp(firebaseConfig);
  
  return getDatabase(app)
}


 

