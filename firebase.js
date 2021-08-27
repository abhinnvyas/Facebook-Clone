import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBiguti5fFM6QLikMxabZXsaV2cpwNEolk",
  authDomain: "facebook-clone-abhinn.firebaseapp.com",
  projectId: "facebook-clone-abhinn",
  storageBucket: "facebook-clone-abhinn.appspot.com",
  messagingSenderId: "779905476563",
  appId: "1:779905476563:web:20113dd6ed332760a53126",
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

const db = getFirestore(app);

const storage = getStorage(app);

export { db, storage };
