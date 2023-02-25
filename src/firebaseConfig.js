import {initializeApp} from 'firebase/app'
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import {getFirestore} from 'firebase/firestore';
import {getStorage} from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyCEXoODpJLss6yDa-Z6OIg1vttk3BhHWsw",
  authDomain: "image-blog-da472.firebaseapp.com",
  projectId: "image-blog-da472",
  storageBucket: "image-blog-da472.appspot.com",
  messagingSenderId: "977243359679",
  appId: "1:977243359679:web:8fb4fb46dc55f40ef4b90a"
};

  const app = initializeApp(firebaseConfig);

  export const storage = getStorage(app);
  export const db = getFirestore(app);
  export const auth = getAuth(app);
  export const provider = new GoogleAuthProvider();