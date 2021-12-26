import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import { getFirestore, doc, getDoc } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-firestore.js";



const firebaseConfig = {
    apiKey: "AIzaSyCTybpKNP765Xu2QxBEp9xqrEdiQOye-7w",
    authDomain: "jsio3-84b49.firebaseapp.com",
    projectId: "jsio3-84b49",
    storageBucket: "jsio3-84b49.appspot.com",
    messagingSenderId: "950410770326",
    appId: "1:950410770326:web:94c14a9b28091a0541cfb7",
    measurementId: "G-LPX37GJ3JE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore();

// Get data from firestore
const docRef = doc(db, "jsi03-1", "OgapfHws8FjZK9WVtfSU");
const docSnap = await getDoc(docRef);

if (docSnap.exists()) {
    console.log("Document data:", docSnap.data().age);
    document.getElementById("test_1").innerHTML = docSnap.data().age;
} 
else {
    console.log("No such document!");
}