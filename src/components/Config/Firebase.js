import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCj3-DoNCXPDH5IaGl-lhvHMXukDUf0Ikk",
  authDomain: "image-gallery-b0c89.firebaseapp.com",
  projectId: "image-gallery-b0c89",
  storageBucket: "image-gallery-b0c89.appspot.com",
  messagingSenderId: "157342620489",
  appId: "1:157342620489:web:1f6a8508d63995db661898",
  measurementId: "G-20D8V2QJX0"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const analytics = getAnalytics(app);

export { app, auth, analytics };
