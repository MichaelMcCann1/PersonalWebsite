import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCNMBnZYnqEapyNWr8Sc63iknwJTPgZqyM",
  authDomain: "portfolio-fe642.firebaseapp.com",
  projectId: "portfolio-fe642",
  storageBucket: "portfolio-fe642.appspot.com",
  messagingSenderId: "523047393616",
  appId: "1:523047393616:web:1a708d1a74f2b1939c7455"
};

const app = initializeApp(firebaseConfig);

export default app