// Halaman home admin

import 'regenerator-runtime';
import "bootstrap/dist/css/bootstrap.min.css";
import "../public/assets/css/about-blog.css";
import AdminApp from '../views/home/app';

console.log('kode home.js');
if (!localStorage.getItem('user')) {
    window.location.href = 'login'
} else {
    const userAdmin = localStorage.getItem('user');
    const data = JSON.parse(userAdmin);
    document.getElementById('username').innerText = data.nama;
    document.getElementById('namauser').innerText = data.nama;
    if (data.fotoprofil) {
        document.querySelector('.imgnav').setAttribute('src', data.fotoprofil);
    }
}

const appAdmin = new AdminApp({
  header: document.querySelector('#header'),
  aside: document.querySelector('#sidebar'),
  maincontent: document.querySelector('#main'),
});

window.addEventListener('hashchange', () => {
    console.log(appAdmin);
    appAdmin.renderPage();
});

window.addEventListener('load', () => {
    appAdmin.renderPage();
});


