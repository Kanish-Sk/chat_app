import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import "firebase/compat/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC7fd8RSzHZJtWEkUqxkex8vtx50ILYoOI",
  authDomain: "chat-app-7cd06.firebaseapp.com",
  projectId: "chat-app-7cd06",
  storageBucket: "chat-app-7cd06.appspot.com",
  messagingSenderId: "783896831528",
  appId: "1:783896831528:web:7de53ee2987f4b6f3e371d",
  measurementId: "G-9CLZJNVPE6",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
