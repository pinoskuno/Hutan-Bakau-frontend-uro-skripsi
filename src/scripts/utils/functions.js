import {
  getStorage, ref, getDownloadURL, uploadBytes,
} from 'firebase/storage';

function isLogin() {
  if (localStorage.getItem('user')) {
    return true;
  }
  return false;
}

function getUserInfo() {
  if (isLogin()) {
    return JSON.parse(localStorage.getItem('user'));
  }
  return null;
}

function escapeHtml(text) {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

function redirect(page) {
  setTimeout(() => {
    window.location.href = `./${page}`;
  }, 2000);
}
function getFilename(file, name) {
  const extension = file.name.substring(file.name.lastIndexOf('.') + 1);
  return `${name}.${extension}`;
}
async function uploadFile(file, name) {
  const storage = getStorage();
  const filename = getFilename(file, name);
  const storageRef = ref(storage, filename);
  const uploadImage = await uploadBytes(storageRef, file);
  return getDownloadURL(uploadImage.ref).then((url) => Promise.resolve(url));
}

function formatDate(date) {
  const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };
  const dateTemp = new Date(date);
  return dateTemp.toLocaleDateString('id-ID', options);
}

export {
  isLogin, getUserInfo, escapeHtml, redirect, uploadFile, formatDate,
};
