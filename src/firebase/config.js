import { initializeApp } from "firebase/app";
import { getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCkC71jd93gnEN9uh4SjutfMARkmHN7wQ0",
  authDomain: "coderhouse-reactjs-42eb5.firebaseapp.com",
  projectId: "coderhouse-reactjs-42eb5",
  storageBucket: "coderhouse-reactjs-42eb5.appspot.com",
  messagingSenderId: "844479283520",
  appId: "1:844479283520:web:9581b1bf1aa1a463abfaa5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//Inicializar base de datos
export const db = getFirestore(app);