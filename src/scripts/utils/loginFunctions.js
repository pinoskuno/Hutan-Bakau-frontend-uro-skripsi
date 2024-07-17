import { initializeApp } from "firebase/app";
import { getFirestore, where } from "firebase/firestore";
import { collection, doc, setDoc, getDoc, getDocs, query } from "firebase/firestore"; 
import firebaseConfig from "../globals/firebaseConfig";
import { customAlphabet  } from "nanoid";

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

const loginFunctions = {
    async init(data){
        let user = ''
        const q = query(collection(db, "akun"), where("email", "==", data.email))
        const querySnapshot = await getDocs(q)
        if (querySnapshot.size > 0) {
            querySnapshot.forEach((doc) => {
                user = doc.data();
                user.id = doc.id;
            })
        }
        if (user.password == data.password) {
            Swal.fire({
                icon: 'success',
                title: 'Login Berhasil',
                text: 'Selamat login anda berhasil',
                showCloseButton: true,
                })
            localStorage.setItem('user', JSON.stringify(user))
            setTimeout(() => {
                window.location.href = './'
            }, 2000);
        } else{
            Swal.fire({
                icon: 'error',
                title: 'Login Gagal',
                text: 'Pastikan data yang anda masukkan benar',
                showCloseButton: true,
                })
            setTimeout(() => {
                location.reload()
            }, 2000);
        }
    }
}

export default loginFunctions;