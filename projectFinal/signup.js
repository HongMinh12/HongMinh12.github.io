import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import { getFirestore, doc, getDoc } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-firestore.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js";
import { getDatabase, set, ref } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-database.js";

const firebaseConfig = {
    apiKey: "AIzaSyCTybpKNP765Xu2QxBEp9xqrEdiQOye-7w",
    authDomain: "jsio3-84b49.firebaseapp.com",
    projectId: "jsio3-84b49",
    storageBucket: "jsio3-84b49.appspot.com",
    messagingSenderId: "950410770326",
    appId: "1:950410770326:web:94c14a9b28091a0541cfb7",
    measurementId: "G-LPX37GJ3JE"
};
const app = initializeApp(firebaseConfig);
const database = getDatabase(app)
const auth = getAuth();

//sign up
signup.addEventListener('click', (e)=>{
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    let username = document.getElementById('user').value;

    createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    set(ref(database, 'users/' + user.uid), {
        username: username,
        email: email
    })
    // ...
    alert('Account successfully created!')
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
    alert(errorMessage)
  });
})