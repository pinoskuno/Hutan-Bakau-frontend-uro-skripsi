import { initializeApp } from 'firebase/app';
import {
  getFirestore, doc, setDoc, deleteDoc, getDoc
} from 'firebase/firestore';
import { getStorage, ref, deleteObject } from 'firebase/storage';
import firebaseConfig from "../globals/firebaseConfig";
import {
  getUserInfo, escapeHtml, uploadFile,
} from './functions';

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const hapusMenuFunction = {
    async init() {
      await this._btndeleteClik();
    },
  
    async _btndeleteClik() {
      const deleteProduk = document.querySelectorAll('#deleteMenu');
      deleteProduk.forEach((btndelete) => {
        btndelete.addEventListener('click', (e) => {
          const id = btndelete.getAttribute('data-id');
          e.preventDefault();
          Swal.fire({
            title: 'Menu ini akan dihapus? ',
            showCancelButton: true,
            confirmButtonText: 'Confirm',
          }).then(async (result) => {
            if (result.isConfirmed) {
              await this._deleteDataProduk(id);
            }
          });
        });
      });
    },

    async _getMenu(id) { 
        const docRef = doc(db, 'menu', id);
        const docSnap = await getDoc(docRef);
        return docSnap.data();
    },

    async _deleteFileMenu(url) { // DELETE IMAGE IN STORAGE
        const storage = getStorage();
        const desertRef = ref(storage, url);
        try {
          await deleteObject(desertRef);
        } catch (error) {
          flassMessage('error', 'Error', `Error${error}`);
        }
    },
  
    async _deleteDataProduk(id) {
        const dataMenu = await this._getMenu(id);
      try {
        await this._deleteFileMenu(dataMenu.gambar);
        await deleteDoc(doc(db, 'menu', id));
        Swal.fire({
            icon: 'success',
            title: 'Berhasil',
            text: 'Menu berhasil dihapus',
            showCloseButton: true,
            })
        setTimeout(() => {
          location.reload();
        }, 2000);
      } catch (error) {
        Swal.fire({
            icon: 'error',
            title: 'Gagal',
            text: 'Menu gagal dihapus',
            showCloseButton: true,
            })
            console.log(error);
      }
    },
  };
  
  export default hapusMenuFunction;