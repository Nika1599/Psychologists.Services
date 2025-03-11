import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyA5 - My5DrGguTn2wUQ5eLT_YQ8fGXspxTM",
  authDomain: "psychologists - c4f9c.firebaseapp.com",
  databaseURL: "https://psychologists-c4f9c-default-rtdb.firebaseio.com",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getDatabase(app);
