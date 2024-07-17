import { initializeApp } from 'firebase/app';
import {
  getFirestore, doc, setDoc, deleteDoc, getDoc, updateDoc
} from 'firebase/firestore';
import { customAlphabet } from 'nanoid';
import firebaseConfig from "../globals/firebaseConfig";
import {
  getUserInfo, escapeHtml, uploadFile,
} from './functions';

  
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);
  const editMenuFunction = {
    async init(id) {
      await this.getValueInputEdit(id);
    },
  
    async getValueInputEdit(id) {
      const editNamaMenu = document.querySelector('#namaMenu');
      const editLink = document.querySelector('#link');
      const editGambarMenu = document.querySelector('#editGambarMenu')
      const formEditMenu = document.getElementById('EditMenu');
      const btnEditMenu = document.getElementById('btnEditMenu');
  
      editGambarMenu.addEventListener('change', async (e) => {
        e.preventDefault();
        await uploadFile(e.target.files[0], `menu/${id}`).then((url) => {
          const data = {};
          data.gambar = url;
          this._insertEditmenu(data, id);
        });
      });

      formEditMenu.addEventListener('submit', async (e) => {
        e.preventDefault();
        btnEditMenu.innerText = 'Mohon tunggu ...';
        btnEditMenu.classList.add('disabled');
        const data = {
          nama_menu: escapeHtml(editNamaMenu.value),
          link: editLink.value,
          tanggal: new Date().toLocaleDateString(),
        };
        await this._insertEditmenu(data, id);
      });
    },
  
    async _insertEditmenu(data, id) {
      try {
        const docRef = doc(db, 'menu', id);
        await updateDoc(docRef, data);
        Swal.fire({
          icon: 'success',
          title: 'Berhasil',
          text: 'Menu berhasil diubah',
          showCloseButton: true,
          })
        setTimeout(() => {
          window.location.href = '../#/menu';
        }, 2000);
      } catch (error) {
        Swal.fire({
          icon: 'error',
          title: 'Gagal',
          text: 'Menu gagal ditambahkan',
          showCloseButton: true,
          })
      }
    },
  
    async fetchMenuById(menuID) {
      const docRef = doc(db, 'menu', `${menuID}`);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        return docSnap.data();
      }
      // return null;
    },
  };
  
  export default editMenuFunction;
  