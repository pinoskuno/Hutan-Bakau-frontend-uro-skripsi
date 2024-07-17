/* eslint-disable class-methods-use-this */
import UrlParser from '../../scripts/routes/url-parser';
import { loginRoutes } from '../../scripts/routes/routes';

class AppLogin {
  constructor({ maincontent }) {
    this._maincontent = maincontent;
  }

  async renderPage() {
    try {
      const url = UrlParser.parseActiveUrlWithCombiner();
      const page = loginRoutes[url];
      this._maincontent.innerHTML = await page.render();
      await page.afterRender();
    } catch (error) {
      this._maincontent.innerHTML = `<h1>${error}</h1>`;
    }
  }
}

export default AppLogin;
