import dataPosts from "../../../scripts/utils/dataBlogs";
import { formatDate } from "../../../scripts/utils/functions";
const Blog = {
  async render() {
    return `
    <!-- Blog -->
    <div class="container my-5 pt-3" id="blog">
    <!--section search  baru --> 
    <section class="heading">
        <div class="row">
          <div class="col-sm-1">
            <img src="../assets/icon/iconLogo.svg" class="logo img-fluid">
          </div>
          <div class="col-sm-9">
            <h1>Pencarian Dataset</h1>
            <p>
              Seluruh kumpulan data yang tersedia dalam Portal Satu Data
              Kementerian Pariwisata dan Ekonomi Kreatif dapat diakses secara
              terbuka dan dikategorikan sebagai data publik, sehingga tidak
              mengandung informasi yang memuat rahasia negara, rahasia pribadi,
              atau hal lain sejenisnya sebagaimana diatur dalam Undang-undang
              nomor 14 Tahun 2008 tentang Keterbukaan Informasi Publik.
            </p>
          </div>

          <section class="search-section" style="margin-bottom: 0px; padding-bottom: 0px;">
            <div class="row">
              <form class="search-form form form-inline" action="/search" method="GET">
                <div class="col-sm-9">
                  <input type="text" id="searchInput" class="form-control input-lg" placeholder="Masukan kata kunci pencarian" name="q" value="" autofocus="">
                </div>

              </form>
            </div>

            
          </section>
        </div>
      </section>

    <!-- end section search  baru -->
     
    
    </div>

    <!--main start--> 
    <main class="dataset-main">
      <div class="col-sm-4">
        <select id="categoryFilter">
        <option value="">Semua Kategori</option>
        <option value="Sekretariat">Sekretariat</option>
        <option value="Deputi1">Deputi 1</option>
        <option value="Deputi2">Deputi 2</option>
        <option value="Deputi3">Deputi 3</option>
        <option value="Deputi4">Deputi 4</option>
        <option value="Daerah">Daerah</option>
        </select>
      </div>
        <div class="container" id="postsList">


        

        </div>



    </div>
    </main>


    `;
  },

  async afterRender() {
    const fetchedBlog = await dataPosts._fetchAllDataPosts();
    const postsList = document.getElementById("postsList");
    const searchInput = document.getElementById("searchInput"); // Dapatkan elemen input
    const categoryFilter = document.getElementById("categoryFilter"); // Dapatkan elemen filter kategori

    // Tambahkan event listener untuk input dan filter
    searchInput.addEventListener("input", displayBlogs);
    categoryFilter.addEventListener("change", displayBlogs);

    // Fungsi untuk menampilkan blog
    function displayBlogs() {
      const query = searchInput.value.toLowerCase(); // Dapatkan query pencarian
      const selectedCategory = categoryFilter.value; // Dapatkan kategori yang dipilih

      postsList.innerHTML = ""; // Kosongkan postsList

      // Loop through fetchedBlog and create HTML for each post
      fetchedBlog.forEach((d, index) => {
        const data = d.data();
        data.id = d.id;

        // Jika judul atau deskripsi blog cocok dengan query, dan kategori blog cocok dengan filter, tampilkan blog
        if (
          data.judul.toLowerCase().includes(query) &&
          data.deskripsi.toLowerCase().includes(query) &&
          (!selectedCategory || data.kategori === selectedCategory)
        ) {
          // Create a blog card for each post
          postsList.innerHTML += `
          
        <div class="row mb-2x1" >      
        <div class="col-md-12 mb-x1">
        <div class="row">
          <div class="col-md-4 card-article">
            
            <img class="rounded-xl img-responsive mb-lg" src="${data.foto}" >
            
          </div>
          <div class="col-md-8" style="padding: 0px !important">
            <div class="d-flex flex-column justify-content-between h-full">
              <div class="d-flex flex-column align-items-start mb-xl">
                <a href="#/detailBlog/${data.id}" target="_blank" class="text-left fs-3 fw-medium text-primary" style="line-height: 1.5;">${data.judul}</a>
                <div class="text-left text-primary line-clamp" style="line-height: 1.5;">${data.deskripsi}</div>
              </div>

              <div class="d-flex flex-row justify-content-between w-full">
                <div class="d-flex flex-row">
                  <div class="d-flex flex-column align-items-start">
                    <div class="text-left text-primary">${data.kategori}</div>
                    <div class="text-left text-primary">${formatDate(data.tgl_dibuat)}</div>
                  </div>
                </div>
                
              </div>
            </div>
          </div>

          <br><br>
        </div>
        </div>`;

        }
      });
    }

    // Tampilkan semua blog secara default
    displayBlogs();
  },
};

export default Blog;
