import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyBFCWOWTNSg40oN73KHO_E57KZEYhf3QCU",
  authDomain: "nbastats-e29e3.firebaseapp.com",
  databaseURL: "https://nbastats-e29e3-default-rtdb.firebaseio.com",
  projectId: "nbastats-e29e3",
  storageBucket: "nbastats-e29e3.appspot.com",
  messagingSenderId: "305846778552",
  appId: "1:305846778552:web:0aad5d35b51d54ea4f524d"
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app); // Get a reference to the Firebase Realtime Database

export default database; // Export the database instance
