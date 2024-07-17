import dashboardHome from "../../views/dashboard/pages/dashboard";
import Blog from "../../views/dashboard/pages/blog";
import DetailBlog from "../../views/dashboard/pages/detailBlog";
import layanankemenpora from "../../views/dashboard/pages/data";
import aboutHome from "../../views/dashboard/pages/about";
import accountsAdmin from "../../views/home/pages/akun";
import dashboardAdmin from "../../views/home/pages/dashboard";
import editMenu from "../../views/home/pages/editMenu";
import menuAdmin from "../../views/home/pages/menu";
import BlogsAdmin from "../../views/home/pages/blogs";
import editBlogsPage from "../../views/home/pages/editBlogsPage";
import profil from "../../views/home/pages/profil";
import mainLogin from "../../views/login/pages/main-login";
import mainRegister from "../../views/register/pages/main-register";

// Register routes
const registerRoutes = {
  "/": mainRegister,
};

// Login routes
const loginRoutes = {
  "/": mainLogin,
};

const adminRoutes = {
  "/": dashboardAdmin,
  "/akun": accountsAdmin,
  "/menu": menuAdmin,
  "/profil": profil,
  "/editmenu/:id": editMenu,
  "/blogs": BlogsAdmin,
  "/editblog/:id": editBlogsPage,
};

const HomeRoutes = {
  "/": dashboardHome,
  "/detailblog/:id": DetailBlog,
  "/about": aboutHome,
  "/blog": Blog,
  "/data": layanankemenpora,
};

export { registerRoutes, loginRoutes, adminRoutes, HomeRoutes };
