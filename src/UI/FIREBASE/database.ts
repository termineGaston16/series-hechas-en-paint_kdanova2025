// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBF2ZRoXdYI1rGzsHofbbem3vlJfmD-eXE",
    authDomain: "shenp-kdanova-6bb7e.firebaseapp.com",
    projectId: "shenp-kdanova-6bb7e",
    storageBucket: "shenp-kdanova-6bb7e.firebasestorage.app",
    messagingSenderId: "824435509014",
    appId: "1:824435509014:web:f516a53e00b6d5f7adf237"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { app, db };