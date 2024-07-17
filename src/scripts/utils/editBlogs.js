import {
  doc, getDoc, getFirestore, updateDoc,
} from 'firebase/firestore';
import { initializeApp } from 'firebase/app';
import firebaseConfig from "../globals/firebaseConfig";
import {
  uploadFile, escapeHtml, getUserInfo, redirect,
} from './functions';
import flassMessage from './flassMessage';

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const editBlogs = {
  async init(idBlog) {
    const fetchdata = await this._fetchDataByIdBlog(idBlog);
    return fetchdata;
  },

  async getValueInputEdit(id) {
    const judul = document.querySelector('#judul');
    const deskripsi = document.querySelector('#deskripsi');
    const foto = document.querySelector('#foto');
    const kategori = document.querySelector('#kategori');
    const btnEdit = document.getElementById('btn-submit');
    const link = document.querySelector('#link');
    const formEditBlog = document.getElementById('EditBlog');

    foto.addEventListener('change', async (e) => {
      e.preventDefault();
      const fileEditImage = e.target.files[0];
      await uploadFile(fileEditImage, `posts/${id}`).then((url) => {
        const data = {};
        data.foto = url;
        data.tgl_diupdate = new Date().toISOString();
        this._insertEditData(data, id);
      });
    });
    formEditBlog.addEventListener('submit', async (e) => {
      e.preventDefault();
      btnEdit.innerText = 'Mohon tunggu ...';
      btnEdit.classList.add('disabled');
      const dataPosts = {
        judul: escapeHtml(judul.value),
        deskripsi: deskripsi.value,
        kategori: escapeHtml(kategori.value),
        link: escapeHtml(link.value),
        id_user: getUserInfo().id,
        tgl_update: new Date().toISOString(),
      };
      await this._insertEditData(dataPosts, id);
    });
  },

  async _insertEditData(data, idBlog) {
    try {
      const docRef = doc(db, 'posts', idBlog);
      await updateDoc(docRef, data);
      flassMessage('success', 'Berhasil!', 'Produk berhasil di edit');
      setTimeout(() => {
        redirect('#/blogs');
      }, 2000);
    } catch (error) {
      flassMessage('error', 'Error!', `error:${error}`);
    }
  },

  async _fetchDataByIdBlog(idBlog) {
    const docRef = doc(db, 'posts', idBlog);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      return docSnap.data();
    }
    return null;
  },
};

export default editBlogs;
