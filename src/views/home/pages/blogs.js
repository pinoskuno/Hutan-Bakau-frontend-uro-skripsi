
import addBlogs from "../../../scripts/utils/addBlogs";
import dataPosts from "../../../scripts/utils/dataBlogs";
import deleteBlog from "../../../scripts/utils/deleteBlogs";


/* eslint-disable no-undef */
const BlogsAdmin = {

  async render() {
    return `
    <div class="mb-3" >
      <button type="button" class="btn btn-primary btn" data-bs-toggle="modal" data-bs-target="#addBlog">Tambah Blog</button>
    </div>

    <div class="posts" id="posts">
    </div>

<!-- Modal Add Blog -->
<div class="modal fade" id="addBlog" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
        aria-labelledby="addBlogLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered modal-xl">
            <div class="modal-content" id="form-edit">
                <form action="#" id="addBlog" method="post" enctype="multipart/form-data">
                    <div class="modal-header border-0 border-top border-4 border-primary">
                        <h1 class="modal-title fs-5" id="addBlogLabel">Tambah Blog</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body border-top">
                        <div class="row">
                            <div class="col-md-12">
                                <div class="mb-3">
                                    <label for="judul" class="form-label">Nama Blog <span class="text-danger">*</span></label>
                                    <input type="text" required name="judul" class="form-control" id="judul" placeholder="Judul Blog">
                                </div>
                                <div class="mb-3">
                                  <label for="deskripsi" class="form-label">Konten Blog <span class="text-danger">*</span></label>
                                  <textarea class="form-control" id="deskripsi" name="deskripsi"></textarea>
                                </div>
                                <div class="mb-3">
                                  <label for="foto" class="form-label">Gambar <span class="text-danger">*</span></label>
                                  <input class="form-control" type="file" id="foto" name="foto">
                                </div>
                                <div class="mb-3">
                                <label for="link" class="form-label">Link Download <span class="text-danger">*</span></label>
                                <input type="text" required name="link" class="form-control" id="link" placeholder="Link Download">
                            </div>
                                <div class="mb-3">
                                  <label for="kategori" class="form-label">Kategori <span class="text-danger">*</span></label>
                                  <select id="kategori" class="form-select" name="kategori">
                                  <option value="Sekretariat">Sekretariat</option>
                                  <option value="Deputi1">Deputi 1</option>
                                  <option value="Deputi2">Deputi 2</option>
                                  <option value="Deputi3">Deputi 3</option>
                                  <option value="Deputi4">Deputi 4</option>
                                  <option value="Daerah">Daerah</option>
                                  </select>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="submit" id="btn-submit" class="btn btn-primary">Tambah</button>
                    </div>
                </form>
            </div>
        </div>
</div>
    
    `;
  },

  async afterRender() {
    console.log('afterrender blogs');
    const postsList = document.getElementById('posts');

    const fetchedPosts = await dataPosts._fetchAllDataPosts();

    // read posts
    fetchedPosts.forEach((d) => {
      const data = d.data();
      data.id = d.id;

      postsList.innerHTML += `
      <div class="card mb-12">
      <div class="row g-0">
        <div class="col-md-4">
          <img src="${data.foto}" style="width: 100%; height: 100%; object-fit: cover; object-position: center;" class="img-fluid" alt="Gambar Postingan">
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 id="titleBlog" class="card-title" style="margin-bottom: 0; padding: 10px 0 0 0; font-weight:bold; font-size: 25px; color: black;">${data.judul}</h5>
            <p id="dateBlog" class="card-text text-success text-capitalize">${data.kategori}</p>
            <p id="dateBlog" class="card-text text-success text-capitalize">${data.link}</p>
            <p id="dateBlog" class="card-text"><small class="text-muted">${data.tgl_dibuat}</small></p>
            <p class="card-text" id="mainBlog" style="overflow: hidden; max-height:100px; ">${data.deskripsi}</p>
            <div class="row justify-content-between">
              <div class="col-4 align-self-center">
                <p class="card-text"><small class="text-muted">Last updated ${data.tgl_update}</small></p>
              </div>
              <div class="col-4 align-self-center text-end">
                <a type="button" class="btn btn-outline-secondary" href="#/editBlog/${data.id}">Edit</a>
                <button type="button" class="btn btn-outline-danger" id="deleteBlog" data-id="${data.id}">Delete</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>`;
    });

    $('#deskripsi').summernote({
      placeholder: 'Tulis Deskripsi postingan',
      tabsize: 2,
      height: 300,
      toolbar: [
        ['style', ['undo', 'redo', 'style', 'bold', 'underline', 'clear']],
        ['font', ['strikethrough', 'superscript', 'subscript']],
        ['fontsize', ['fontsize']],
        ['fontname', ['fontname']],
        ['height', ['height']],
        ['color', ['color']],
        ['para', ['ul', 'ol', 'paragraph']],
        ['table', ['table']],
        ['insert', ['link', 'picture', 'video']],
        ['view', ['help']],
      ],
    });

    // create
    await addBlogs.init();

    // delete
    await deleteBlog.init();
  },
};

export default BlogsAdmin;
