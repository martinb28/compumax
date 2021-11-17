import { initializeApp } from "firebase/app"
import { doc, getFirestore } from "firebase/firestore"
import {collection, getDocs, where, query, getDoc} from "firebase/firestore"
// import 'firebase/compat/aut';
// import 'firebase/compat/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_ID
};

initializeApp(firebaseConfig);
const db = getFirestore();

export const allItem = () => {
  const query = getDocs(collection(db, 'productos'))
  return query 
}

export const itemCat = (categoria) => {
  const queryCat = collection(db, 'items')
  const queryCat2 = query(queryCat, where ('categoria', '==', categoria))
  const queryCat3 = getDocs(queryCat2)
  return queryCat3
}

export const only = (id) => {
  const q = doc(db, 'items', id)
  const q2 = getDoc(q)
  return q2
}