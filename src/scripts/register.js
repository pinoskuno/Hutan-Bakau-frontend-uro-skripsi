import 'regenerator-runtime';
import "bootstrap/dist/css/bootstrap.min.css";
import 'regenerator-runtime';
import AppRegister from '../views/register/app';


if(localStorage.getItem('user')) {
  window.location.href='/'
  const userAdmin = localStorage.getItem('user');
  const data = JSON.parse(userAdmin);
  document.getElementById('username').innerText = data.nama;
  document.getElementById('namauser').innerText = data.nama;
  document.getElementById('user').innerText = data.user;
}

const appRegister = new AppRegister({
  maincontent: document.querySelector('#mainregister'),
});

window.addEventListener('hashchange', () => {
    appRegister.renderPage();
  });
  
  window.addEventListener('load', () => {
    appRegister.renderPage();
  });
