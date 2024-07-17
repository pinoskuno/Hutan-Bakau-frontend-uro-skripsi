/* eslint-disable class-methods-use-this */
import { adminRoutes } from '../../scripts/routes/routes';
import UrlParser from '../../scripts/routes/url-parser';

class AdminApp {
  constructor({ header, aside, maincontent }) {
    this._header = header;
    this._aside = aside;
    this._maincontent = maincontent;
  }


  _logoutAdmin() {
    const logoutButton = document.getElementById('logoutButton');
    logoutButton.addEventListener('click', (e) => {
      e.preventDefault();
      localStorage.removeItem('user');
      window.location.href = '../';
    });
  }

  async renderPage() {
    this._logoutAdmin();
    try {
      const url = UrlParser.parseActiveUrlWithCombiner();
      const page = adminRoutes[url];
      this._maincontent.innerHTML = await page.render();
      await page.afterRender();
    } catch (error) {
      this._maincontent.innerHTML = `<h1>${error}</h1>`;
    } 
  }
}

export default AdminApp;
