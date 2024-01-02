import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAGXzPzNTIryhfpDt1_07gZLcfO6hGJtdY",
  authDomain: "dropbox-clone-736fa.firebaseapp.com",
  projectId: "dropbox-clone-736fa",
  storageBucket: "dropbox-clone-736fa.appspot.com",
  messagingSenderId: "1061724310356",
  appId: "1:1061724310356:web:9920db3184219f616016c1",
};

const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage };
