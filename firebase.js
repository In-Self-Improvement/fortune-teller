import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  getFirestore,
  setDoc,
} from "firebase/firestore";
import { getAuth } from "firebase/auth";

import { config } from "dotenv";
config();

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_API_ID,
  measurementId: process.env.FIREBASE_MEASUREMENT_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const db = getFirestore(app);
const auth = getAuth(app);
const fortuneCollection = collection(db, "fortune");

const getAllFortunes = async () => {
  const fortuneRef = doc(fortuneCollection, "fortunes");
  const fortuneDoc = await getDoc(fortuneRef);
  if (fortuneDoc.exists()) {
    const newData = fortuneDoc.data();
    console.log("newData", newData);
  }
};

const getGoodFortunes = async () => {
  const fortuneRef = doc(fortuneCollection, "fortunes");
  const fortuneDoc = await getDoc(fortuneRef);
  if (fortuneDoc.exists()) {
    const newData = fortuneDoc.data();
    // console.log("newData", newData);
    return newData.good;
  }
};

export { db, auth, app, getAllFortunes, getGoodFortunes };
