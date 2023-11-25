import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://support.google.com/firebase/answer/7015592
const firebaseConfig = {
  apiKey: "AIzaSyDn_L_koLmEn3y2YpV9q8SPhEIR0dqckaM",
  authDomain: "checkpointfinal-7a83c.firebaseapp.com",
  projectId: "checkpointfinal-7a83c",
  storageBucket: "checkpointfinal-7a83c.appspot.com",
  messagingSenderId: "1008572691455",
  appId: "1:1008572691455:web:1753fadf8df4519c9b6dca",
  measurementId: "G-KXK8FBRR1G"
};
const firebaseApp = initializeApp(firebaseConfig);

export default firebaseApp;

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);


// Add a new document in collection "cities"
await setDoc(doc(db, "cities", "LA"), {
  name: "Los Angeles",
  state: "CA",
  country: "USA"
});

const miFuncion = () => {
  const docData = {
    stringExample: "Hello world!",
    booleanExample: true,
    numberExample: 3.14159265,
    dateExample: Timestamp.fromDate(new Date("December 10, 1815")),
    arrayExample: [5, true, "hello"],
    nullExample: null,
    objectExample: {
        a: 5,
        b: {
            nested: "foo"
        }
    }
};
await setDoc(doc(db, "data", "one"), docData);
};

// 
