// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCiqsVTCUq0CEdP4mcQlX0bH8BvhwA2lVA",
  authDomain: "isfa-app-db.firebaseapp.com",
  projectId: "isfa-app-db",
  storageBucket: "isfa-app-db.firebasestorage.app",
  messagingSenderId: "913842239278",
  appId: "1:913842239278:web:c336e8fd096a046af36cbf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Exportar servicios
export const auth = getAuth(app);
export const db = getFirestore(app);

export default app;