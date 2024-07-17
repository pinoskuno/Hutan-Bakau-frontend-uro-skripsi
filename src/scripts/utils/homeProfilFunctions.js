/* eslint-disable no-undef */
import {
    doc, getDoc, getFirestore, updateDoc, query, collection, where, getDocs, deleteDoc
  } from 'firebase/firestore';
  import { initializeApp } from 'firebase/app';
  import firebaseConfig from "../globals/firebaseConfig";
  import { getUserInfo, escapeHtml, uploadFile } from './functions';
  
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);
  
  const homeProfilFunctions = {
    async init() {
      await this._fetchprofile();
      
    },

    async _updateLocalStorage(){
      let user = ''
      const q = query(collection(db, "akun"), where("email", "==", JSON.parse(localStorage.getItem('user')).email))
      const querySnapshot = await getDocs(q)
      if (querySnapshot.size > 0) {
        querySnapshot.forEach((doc) => {
          user = doc.data()
          user.id = doc.id;
          localStorage.setItem('user', JSON.stringify(user))
          setTimeout(() => {
            location.reload()
          }, 2000);
        })
      }
    },
    async _fetchprofile() {
        let user=''
        let user_id =''
        const q = query(collection(db, "akun"), where("email", "==", JSON.parse(localStorage.getItem('user')).email))
        const querySnapshot = await getDocs(q)
        if (querySnapshot.size > 0) {
            querySnapshot.forEach((doc) => {
                user_id = doc.id
                user = doc.data()
            })
        }
  
      document.getElementById('nameUser').innerText = user.nama;

      document.getElementById('namaLengkap').innerText = user.nama;
      const fullname = document.getElementById('fullName');
      fullname.value = user.nama;
  
      const noHp = document.getElementById('nomorhp');
      if (user.no_hp) {
        document.getElementById('no_hp_wa').innerText = user.no_hp;
        noHp.value = user.no_hp;
      }     

      if (!user.no_hp) {
        noHp.value = '-'
      }
      
      document.getElementById('email').innerText = user.email;
      document.getElementById('edit_email').value = user.email;

      const imgProfile = document.querySelector('.imgprofile');
      const editimgprofile = document.querySelector('.editimgprofile');
      if (user.fotoprofil) {
        imgProfile.setAttribute('src', user.fotoprofil);
        editimgprofile.setAttribute('src', user.fotoprofil);
        document.querySelector('.imgnav').setAttribute('src', user.fotoprofil);
      } else {
        imgProfile.setAttribute('src', '../../assets/img/profile-img.png');
        editimgprofile.setAttribute('src', '../../assets/img/profile-img.png');
        document.querySelector('.imgnav').setAttribute('src', '../../assets/img/profile-img.png');
      }
  
      const editFoto = document.getElementById('editFoto');
      editFoto.addEventListener('change', async (e) => {
        e.preventDefault();
        await uploadFile(e.target.files[0], `fotoAdmin/${user_id}`).then((url) => {
          const data = {};
          data.id = user_id;
          data.fotoprofil = url;
          this._updateProfile(data);
        });
      });
  
      const submitEdit = document.getElementById('editProfile');
      submitEdit.addEventListener('submit', async (e) => {
        e.preventDefault();
        const data = {
          nama: escapeHtml(fullname.value),
          no_hp: escapeHtml(noHp.value),
        };
        data.id = user_id;
        await this._updateProfile(data);
      });
    },
  
    async _updateProfile(user) {
      try {
        const docRef = doc(db, 'akun', user.id);
        // eslint-disable-next-line no-param-reassign
        delete user.id;
        await updateDoc(docRef, user);
        Swal.fire({
            icon: 'success',
            title: 'Berhasil',
            text: 'Profil anda berhasil diedit',
            showCloseButton: true,
            })
        await this._fetchprofile();
        await this._updateLocalStorage();
      } catch (error) {
        Swal.fire({
            icon: 'error',
            title: 'Gagal',
            text: 'Pengeditan profil gagal',
            showCloseButton: true,
            })
            console.log(error);
      }
    },

    async deleteAccount(){
      const btnDeleteAccount = document.getElementById('deleteAkun');
      btnDeleteAccount.addEventListener('click', async () => {
        const q = JSON.parse(localStorage.getItem('user')).id
        console.log(q);
        Swal.fire({
          title: 'Akun ini akan dihapus? ',
          showCancelButton: true,
          confirmButtonText: 'Confirm',
        }).then(async (result) => {
          if (result.isConfirmed) {
            try {
              await deleteDoc(doc(db, 'akun', q));
              localStorage.removeItem('user')
              location.reload()
            } catch (error) {
              console.log(error);
            }
            
          }
        });
        
      })
    }
  };
  
  export default homeProfilFunctions;
  