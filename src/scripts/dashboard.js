import 'regenerator-runtime';
// import "bootstrap/dist/css/bootstrap.min.css";
import DashboardApp from '../views/dashboard/app';
import "../public/assets/css/about-blog.css";

const appDashboard = new DashboardApp({
  maincontent: document.querySelector('#main'),
});

window.addEventListener('hashchange', () => {
    console.log(appDashboard);
    appDashboard.renderPage();
});

window.addEventListener('load', () => {
    appDashboard.renderPage();
});


