import { initializeApp } from "firebase/app";
import { FirebaseApp, FirebaseOptions } from "firebase/app";

const {
  VITE_FIREBASE_API_KET,
  VITE_FIREBASE_AUTH_DOMAIN,
  VITE_FIREBASE_PROJECT_ID,
  VITE_FIREBASE_STORAGE_BUCKET,
  VITE_FIREBASE_MESSAGING_SENDER_ID,
  VITE_FIREBASE_APP_ID,
  VITE_FIREBASE_MEASUREMENT_ID,
  VITE_FIREBASE_DATABASE_URL,
} = import.meta.env;

const firebaseConfig: FirebaseOptions = {
  apiKey: VITE_FIREBASE_API_KET,
  authDomain: VITE_FIREBASE_AUTH_DOMAIN,
  projectId: VITE_FIREBASE_PROJECT_ID,
  storageBucket: VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: VITE_FIREBASE_APP_ID,
  measurementId: VITE_FIREBASE_MEASUREMENT_ID,
  databaseURL: VITE_FIREBASE_DATABASE_URL,
};

export const firebaseApp: FirebaseApp = initializeApp(firebaseConfig);
