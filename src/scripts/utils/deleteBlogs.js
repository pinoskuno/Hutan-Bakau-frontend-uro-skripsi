/* eslint-disable no-undef */
import {
  getFirestore, getDoc, doc, deleteDoc,
} from 'firebase/firestore';
import { initializeApp } from 'firebase/app';
import { getStorage, ref, deleteObject } from 'firebase/storage';
import firebaseConfig from "../globals/firebaseConfig";
import flassMessage from './flassMessage';

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const deleteBlog = {
  async init() {
    await this._btndeleteClik();
  },

  async _btndeleteClik() {
    const deleteBlogbtn = document.querySelectorAll('#deleteBlog');
    deleteBlogbtn.forEach((btndelete) => {
      btndelete.addEventListener('click', (e) => {
        const id = btndelete.getAttribute('data-id');
        e.preventDefault();
        Swal.fire({
          title: 'Postingan ini akan dihapus? ',
          showCancelButton: true,
          confirmButtonText: 'Confirm',
        }).then((result) => {
          if (result.isConfirmed) {
            this._deleteDataBlog(id);
          }
        });
      });
    });
  },

  async _getBlog(id) {
    const docRef = doc(db, 'posts', id);
    const docSnap = await getDoc(docRef);
    return docSnap.data();
  },

  async _deleteFileproduct(url) {
    const storage = getStorage();
    const desertRef = ref(storage, url);
    try {
      await deleteObject(desertRef);
    } catch (error) {
      flassMessage('error', 'Error', `Error${error}`);
    }
  },

  async _deleteDataBlog(id) {
    const datablog = await this._getBlog(id);
    try {
      await this._deleteFileproduct(datablog.foto);
      await deleteDoc(doc(db, 'posts', id));
      flassMessage('success', 'Berhasil!', 'Data blog dihapus!');
      setTimeout(() => {
        location.reload();
      }, 2000);
    } catch (error) {
      flassMessage('error', 'Error', `Error${error}`);
    }
  },
};

export default deleteBlog;
