// import Blog from './blog';
import UrlParser from "../../../scripts/routes/url-parser";
import dataPosts from "../../../scripts/utils/dataBlogs";
import { formatDate } from "../../../scripts/utils/functions";



const DetailBlog = {
  async render() {
    return `
      <section class="container deskripsi my-5 mt-3" id="container">
        
    </section>`;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const container = document.getElementById('container');
    const dataPost = await dataPosts._fetchDataPostsByIdPost(url.id);

    container.innerHTML += `
    <div class="row mt-5">
      <div class="col-md-5 p-5">
          <div class="d-flex justify-content-center align-items-center">
            <img class="img-fluid" style="border-radius: 20px;" src="${dataPost.foto}" width="300%"/>
          </div>
      </div>

      <div class="col-md-7">
          <h2 class="tittle py-4 fw-bold">${dataPost.judul}</h2>
          <p><i class="fa-solid fa-calendar-days"></i>&nbsp; ${formatDate(dataPost.tgl_dibuat)}</p>
          <p><i class="fa-solid fa-tag"></i>&nbsp; ${dataPost.kategori}</p>
          <p class="text-justify">${dataPost.deskripsi}</p>
          <p><i class="fa-solid fa-tag"></i>&nbsp; <a href="${dataPost.link}" target="_blank">Lihat File</a></p>
      </div>
    </div>
        `;
  },
};

export default DetailBlog;
