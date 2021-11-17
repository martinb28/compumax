import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"
// import 'firebase/compat/aut';
// import 'firebase/compat/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBWMWfzAdRCK7uwgJdZOZSL2W56ocqyYw8',
  authDomain: 'process.env.REACT_APP_AUTH_DOMAIN',
  projectId: 'compumaxbugao',
  storageBucket: 'compumaxbugao.appspot.com',
  messagingSenderId: '329751266865',
  appId: '1:329751266865:web:7d059d098d4698afe0f710'
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//METHOD TO RETURN FIRESTORE DATABASE WITH CONFIG
const getFirestoreDb = () => {
  return getFirestore(app);
}

export {
  app,
  getFirestoreDb,
}