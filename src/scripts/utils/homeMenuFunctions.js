import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { collection, doc, setDoc, getDoc, getDocs } from "firebase/firestore"; 
import firebaseConfig from "../globals/firebaseConfig";
import { customAlphabet  } from "nanoid";

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

const homeMenuFunctions = {
    async getAllData(){
        try {
            const querySnapshot = await getDocs(collection(db, "menu"));
            return querySnapshot
        } catch (error) {
            console.log('Error', error);
        }
    },
    async convertIDtoName() { // dipakai di halaman account admin
        const container = document.querySelectorAll('#adminName');
        container.forEach(async (content) => {
            const adminID = content.getAttribute('value');
            const q = doc(db, 'akun', adminID);
            const docSnap = await getDoc(q);
            // eslint-disable-next-line no-param-reassign
            content.innerHTML = docSnap.data().nama;
        });
      },

}

export default homeMenuFunctions;