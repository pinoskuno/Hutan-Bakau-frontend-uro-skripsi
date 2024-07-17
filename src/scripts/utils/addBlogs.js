/* eslint-disable prefer-destructuring */
import { initializeApp } from 'firebase/app';
import {
  getFirestore, doc, setDoc,
} from 'firebase/firestore';
import { customAlphabet } from 'nanoid';
import firebaseConfig from "../globals/firebaseConfig";
import flassMessage from './flassMessage';
import {
  getUserInfo, escapeHtml, uploadFile,
} from './functions';

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
let fileimage;
const addBlogs = {
  async init() {
    await this._getDataForm();
  },

  async _getDataForm() {
    const judul = document.querySelector('#judul');
    const deskripsi = document.querySelector('#deskripsi');
    const foto = document.querySelector('#foto');
    const kategori = document.querySelector('#kategori');
    const link = document.querySelector('#link');
    const btnTambah = document.getElementById('btn-submit');
    const formAddBlog = document.getElementById('addBlog');

    foto.addEventListener('change', async (e) => {
      e.preventDefault();
      fileimage = e.target.files[0];
    });

    formAddBlog.addEventListener('submit', async (e) => {
      e.preventDefault();
      btnTambah.innerText = 'Mohon tunggu ...';
      btnTambah.classList.add('disabled');
      const dataPosts = {
        judul: escapeHtml(judul.value),
        deskripsi: deskripsi.value,
        kategori: escapeHtml(kategori.value),
        link: escapeHtml(link.value),
        id_user: getUserInfo().id,
        tgl_dibuat: new Date().toISOString(),
        tgl_update: new Date().toISOString(),
      };
      const nanoid = customAlphabet('1234567890abcdef', 17);
      const idPosts = `post_${nanoid()}`;
      await uploadFile(fileimage, `posts/${idPosts}`).then((url) => {
        dataPosts.foto = url;
      });
      await this._insertData(dataPosts, idPosts);
    });
  },

  async _insertData(data, id) {
    try {
      await setDoc(doc(db, 'posts', id), data);
      flassMessage('success', 'Berhasil!', 'Tambah data produk berhasil!');
      setTimeout(() => {
        location.reload();
      }, 2000);
    } catch (error) {
      flassMessage('error', 'Gagal Tambah', `Error= ${error}`);
    }
  },
};

export default addBlogs;
