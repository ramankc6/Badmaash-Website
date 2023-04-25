// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase, ref, set, push } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyArGS5naRWFFt3iNIUdVXmC4_LU8FuLAmw",
  authDomain: "badmaash-e9d77.firebaseapp.com",
  databaseURL: "https://badmaash-e9d77-default-rtdb.firebaseio.com",
  projectId: "badmaash-e9d77",
  storageBucket: "badmaash-e9d77.appspot.com",
  messagingSenderId: "747291808915",
  appId: "1:747291808915:web:c4fc5c67a7aa4996956966",
  measurementId: "G-EBNGRVX1KC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export async function storeMessage(name, email, message) {
  const db = getDatabase();
  const reference = ref(db, 'messages/');
  let newData = {
    name: name,
    email: email,
    message: message
  };
  await push(reference, newData);
}