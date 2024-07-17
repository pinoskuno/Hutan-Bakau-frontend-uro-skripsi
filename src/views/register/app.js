/* eslint-disable class-methods-use-this */
import { registerRoutes } from '../../scripts/routes/routes';
import UrlParser from '../../scripts/routes/url-parser';

class AppRegister {
  constructor({ maincontent }) {
    this._maincontent = maincontent;
  }

  async renderPage() {
    try {
      const url = UrlParser.parseActiveUrlWithCombiner();
      const page = registerRoutes[url];
      this._maincontent.innerHTML = await page.render();
      await page.afterRender();
    } catch (error) {
      this._maincontent.innerHTML = `<h1>${error}</h1>`;
    }
  }
}

export default AppRegister;
