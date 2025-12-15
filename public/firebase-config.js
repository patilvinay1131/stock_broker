import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyDnXHyK5loMswcECp7wmqBqkmZApg3EI-o",
    authDomain: "cupi-stock-broker.firebaseapp.com",
    projectId: "cupi-stock-broker",
    storageBucket: "cupi-stock-broker.firebasestorage.app",
    messagingSenderId: "198662766962",
    appId: "1:198662766962:web:437a52ec6cdfc2a5569deb",
    measurementId: "G-XD9H04WHB4"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
