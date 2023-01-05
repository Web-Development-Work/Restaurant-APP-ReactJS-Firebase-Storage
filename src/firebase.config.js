import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyB2MMpkqgKMm5sml4T3c3JJqw_DVsCTuOI",
  authDomain: "food-app-5fb93.firebaseapp.com",
  databaseURL: "https://food-app-5fb93-default-rtdb.firebaseio.com",
  projectId: "food-app-5fb93",
  storageBucket: "food-app-5fb93.appspot.com",
  messagingSenderId: "191575232034",
  appId: "1:191575232034:web:51b2d2a5255e3d9177047b"
};

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, firestore, storage };