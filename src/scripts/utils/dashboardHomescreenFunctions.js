import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { collection, doc, setDoc, getDoc, getDocs } from "firebase/firestore"; 
import firebaseConfig from "../globals/firebaseConfig";
import { customAlphabet  } from "nanoid";

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

const dashboardHomescreenFunctions = {
    async getAllAccount(){
        try {
            const querySnapshot = await getDocs(collection(db, "akun"));
            return querySnapshot
        } catch (error) {
            console.log('Error', error);
        }
    },
    async getAllMenu(){
        try {
            const querySnapshot = await getDocs(collection(db, "menu"));
            return querySnapshot
        } catch (error) {
            console.log('Error', error);
        }
    },
    async getAllMenu2(){
        try {
            const querySnapshot = await getDocs(collection(db, "menu2"));
            return querySnapshot
        } catch (error) {
            console.log('Error', error);
        }
    },
    async getAllMenu3(){
        try {
            const querySnapshot = await getDocs(collection(db, "menu3"));
            return querySnapshot
        } catch (error) {
            console.log('Error', error);
        }
    },
    async getAllMenu4(){
        try {
            const querySnapshot = await getDocs(collection(db, "menu4"));
            return querySnapshot
        } catch (error) {
            console.log('Error', error);
        }
    },
    async getAllMenu5(){
        try {
            const querySnapshot = await getDocs(collection(db, "menu5"));
            return querySnapshot
        } catch (error) {
            console.log('Error', error);
        }
    },
    async getAllData(){
        try {
            const querySnapshot = await getDocs(collection(db, "data"));
            return querySnapshot
        } catch (error) {
            console.log('Error', error);
        }
    },
    async init(data){
        let existed = 0;
        const querySnapshot = await getDocs(collection(db, "akun"))
        querySnapshot.forEach((doc) => {
            console.log(doc.id, '==>', doc.data().email);
            if (doc.data().email == data.email) {
                existed = 1;
                Swal.fire({
                    icon: 'error',
                    title: 'Email Sudah Terdaftar',
                    text: 'Pendaftaran Gagal',
                    showCloseButton: true,
                  })
                setTimeout(() => {
                    location.reload();
                }, 2000);
            }
        })
        if (existed == 0) {
            this.insertData(data)
            setTimeout(() => {
                window.location.href = '../login'
            }, 2000);
        }
    }

}

export default dashboardHomescreenFunctions;