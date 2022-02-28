import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBdVALrJuv3s6VmuaLA8sqEURETmB0TNUk",
  authDomain: "firevue2blogs.firebaseapp.com",
  projectId: "firevue2blogs",
  storageBucket: "firevue2blogs.appspot.com",
  messagingSenderId: "147964541644",
  appId: "1:147964541644:web:20c3af4dd9f0d2cbe72069",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const timestamp = firebase.firestore.FieldValue.serverTimeStamp;

export { timestamp };
export default firebaseApp.firestore();
