import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { collection, doc, setDoc, getDoc, getDocs } from "firebase/firestore"; 
import firebaseConfig from "../globals/firebaseConfig";
import { customAlphabet  } from "nanoid";

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

const homeAkunFunctions = {
    async getAllAccount(){
        try {
            const querySnapshot = await getDocs(collection(db, "akun"));
            return querySnapshot
        } catch (error) {
            console.log('Error', error);
        }
    },

}

export default homeAkunFunctions;