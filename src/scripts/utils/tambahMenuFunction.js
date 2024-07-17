/* eslint-disable prefer-destructuring */
import { initializeApp } from 'firebase/app';
import {
  getFirestore, doc, setDoc,
} from 'firebase/firestore';
import { customAlphabet } from 'nanoid';
import firebaseConfig from "../globals/firebaseConfig";
import {
  getUserInfo, escapeHtml, uploadFile,
} from './functions';

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
let fileimage;
const tambahMenuFunction = {
  async init() {
    await this._getDataForm();
  },

  async _getDataForm() {
    const namaData = document.querySelector('#namaMenu');
    const link = document.querySelector('#link');
    const gambar = document.querySelector('#gambarMenu');
    const btnTambah = document.getElementById('btnTambah');
    const formtambahMenu = document.getElementById('tambahMenu');

    gambar.addEventListener('change', async (e) => {
        e.preventDefault();
        fileimage = e.target.files[0];
      });

    formtambahMenu.addEventListener('submit', async (e) => {
      e.preventDefault();
      btnTambah.innerText = 'Mohon tunggu ...';
      btnTambah.classList.add('disabled');
      const data = {
        nama_menu: escapeHtml(namaData.value),
        link: link.value,
        admin: getUserInfo().id,
        tanggal: new Date().toLocaleDateString(),
      };
      const nanoid = customAlphabet('1234567890', 10);
      const idMenu = `menu_${nanoid()}`;
      await uploadFile(fileimage, `menu/${idMenu}`).then((url) => {
        data.gambar = url;
      });
      await this._insertData(data, idMenu);
    });
  },

  async _insertData(data, id) {
    try {
      await setDoc(doc(db, 'menu', id), data);
      Swal.fire({
        icon: 'success',
        title: 'Berhasil',
        text: 'Menu berhasil ditambahkan',
        showCloseButton: true,
        })
      setTimeout(() => {
        location.reload();
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
};

export default tambahMenuFunction;
