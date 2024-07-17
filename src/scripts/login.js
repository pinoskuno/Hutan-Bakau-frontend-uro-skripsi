import 'regenerator-runtime';
import "bootstrap/dist/css/bootstrap.min.css";
import 'regenerator-runtime';
import AppLogin from '../views/login/app';


if(localStorage.getItem('user')) {
  window.location.href='/'
  const userAdmin = localStorage.getItem('user');
  const data = JSON.parse(userAdmin);
  document.getElementById('username').innerText = data.nama;
  document.getElementById('namauser').innerText = data.nama;
  document.getElementById('user').innerText = data.user;
}

const appLogin = new AppLogin({
  maincontent: document.querySelector('#mainlogin'),
});

window.addEventListener('hashchange', () => {
    appLogin.renderPage();
  });
  
  window.addEventListener('load', () => {
    appLogin.renderPage();
  });
