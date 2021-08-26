import firebase from "firebase";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBiguti5fFM6QLikMxabZXsaV2cpwNEolk",
  authDomain: "facebook-clone-abhinn.firebaseapp.com",
  projectId: "facebook-clone-abhinn",
  storageBucket: "facebook-clone-abhinn.appspot.com",
  messagingSenderId: "779905476563",
  appId: "1:779905476563:web:20113dd6ed332760a53126",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();

const storage = firebase.storage();

export { db, storage };
