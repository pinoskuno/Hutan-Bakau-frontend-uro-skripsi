import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { collection, doc, setDoc, getDoc, getDocs } from "firebase/firestore"; 
import firebaseConfig from "../globals/firebaseConfig";
import { customAlphabet  } from "nanoid";

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

const registerFunctions = {
    async insertData(data){
        try {
            const nanoid = customAlphabet('1234567890',8)
            await setDoc(doc(db, "akun", `admin_${nanoid()}`), data);
            Swal.fire(
                'Pendaftaran Berhasil',
                'Terimakasih telah mendaftar sebagai admin',
                'success'
              )
        } catch (error) {
            Swal.fire({
                icon: 'error',
                title: 'Maaf',
                text: 'Pendaftaran Gagal',
                showCloseButton: true,
              })
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

export default registerFunctions;