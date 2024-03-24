import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
import { getAuth } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyA-6MZz7AfYpLZXNB5KYqwiClIAav6BSzc",
  authDomain: "flashcards-26a5d.firebaseapp.com",
  projectId: "flashcards-26a5d",
  storageBucket: "flashcards-26a5d.appspot.com",
  messagingSenderId: "531803212921",
  appId: "1:531803212921:web:40b228e52d9ff1fa2e98a8"
};

const app = initializeApp(firebaseConfig
//   {
//   apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
//   authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
//   projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
//   storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
//   appId: process.env.REACT_APP_FIREBASE_APP_ID
// }
)

export const auth = getAuth(app)
export const db = getFirestore(app);
export default app
