import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyAKSVqRRppe6ODZF0rYGdZ0gyn6-5cpEg0",
  authDomain: "dek-here.firebaseapp.com",
  projectId: "dek-here",
  storageBucket: "dek-here.firebasestorage.app",
  messagingSenderId: "870475148916",
  appId: "1:870475148916:web:5270483a63f4c757e76b21",
  measurementId: "G-5KCBDVWM2K"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);   // ฐานข้อมูล
export const auth = getAuth(app);      // ระบบล็อกอิน
