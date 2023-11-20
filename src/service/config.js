import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "pander-santa-maria.firebaseapp.com",
  projectId: "pander-santa-maria",
  storageBucket: "pander-santa-maria.appspot.com",
  messagingSenderId: "79698552615",
  appId: "1:79698552615:web:3bf17288e72e8a81d9ab02",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
