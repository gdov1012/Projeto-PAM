import { initializeApp } from "https://www.gstatic.com/firebasejs/12.6.0/firebase-app.js";
import { 
  getAuth, 
  signInWithEmailAndPassword, 
  createUserWithEmailAndPassword 
} from "https://www.gstatic.com/firebasejs/12.6.0/firebase-auth.js";

// CONFIG DO SEU FIREBASE
const firebaseConfig = {
  apiKey: "AIzaSyBShoQYqvKHs4HK5UMNg4owBUsfUbLKfVw",
  authDomain: "projetopam2611.firebaseapp.com",
  projectId: "projetopam2611",
  storageBucket: "projetopam2611.firebasestorage.app",
  messagingSenderId: "746326610982",
  appId: "1:746326610982:web:c70ecf81647efe031102e7",
  measurementId: "G-N3KL4DXYTQ"
};

// iniciar firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// elementos
const email = document.getElementById("email");
const senha = document.getElementById("senha");
const msg = document.getElementById("msg");

// LOGIN
document.getElementById("btnLogin").onclick = async () => {
  try {
    await signInWithEmailAndPassword(auth, email.value, senha.value);
    window.location.href = "perfil.html";
  } catch (error) {
    msg.textContent = error.message;
  }
};

// CADASTRO
document.getElementById("btnCadastro").onclick = async () => {
  try {
    await createUserWithEmailAndPassword(auth, email.value, senha.value);
    window.location.href = "perfil.html";
  } catch (error) {
    msg.textContent = error.message;
  }
};