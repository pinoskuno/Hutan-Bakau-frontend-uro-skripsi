// import homeDashboardFunctions from "../../../scripts/utils/homeDashboardFunctions";
import dataPosts from "../../../scripts/utils/dataBlogs";
import { formatDate } from "../../../scripts/utils/functions";
import dashboardHomescreenFunctions from "../../../scripts/utils/dashboardHomescreenFunctions";


const dashboardHome = {
  async render() {
    return `
      

      <section class="hero-section hero-section-full-height">
      <div class="container-fluid">
          <div class="row">

              <div class="col-lg-12 col-12 p-0">
                  <div id="hero-slide" class="carousel carousel-fade slide" data-bs-ride="carousel">
                      <div class="carousel-inner">
                          <div class="carousel-item active">
                              <img src="../assets/img/slide/banner.jpg" class="carousel-image img-fluid" alt="...">
                                
                              <div class="carousel-caption d-flex flex-column justify-content-end">
                                  <h2>KEMENPORA </h2>
                                  <span>Republik Indonesia</span>
                                    
                                  <p>DIVISI SISINFO</p>
                              </div>
                          </div>

                          <div class="carousel-item">
                              <img src="../assets/img/slide/Screenshot 2024-01-09 112956.jpg" class="carousel-image img-fluid" alt="..."> 
                              
                              <div class="carousel-caption d-flex flex-column justify-content-end">
                                  <h2>SISTEM INFORMASI</h2>
                                  
                                  <p>Sistem Informasi</p>
                              </div>
                          </div>
                      </div>

                      <button class="carousel-control-prev" type="button" data-bs-target="#hero-slide" data-bs-slide="prev">
                          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                          <span class="visually-hidden">Previous</span>
                      </button>

                      <button class="carousel-control-next" type="button" data-bs-target="#hero-slide" data-bs-slide="next">
                          <span class="carousel-control-next-icon" aria-hidden="true"></span>
                          <span class="visually-hidden">Next</span>
                      </button>
                  </div>
              </div>

          </div>
      </div>
    </section>


    <br></br>
    <section class="section-padding section-bg" id="section_2">
    <div class ="card-pinos" >
     <div class="d-flex flex-column">
       <h2 class ="text-center">Topik Data </h2>   
      </div>
      <div class="buttons" id='daftarMenu'>

      </div> 

      </div>  
        
    </section>

    <section class="section-padding section-bg" >
      <div class ="card-pinos" >
      <div class="container" data-aos="fade-up">
          <div class="col-lg-12 col-12 text-center mx-auto">
            <h2 class="mb-5">Data </h2>   
          </div>
          <div class="row" id="postsList">
      </div>
      </div>
    </section>

    <br></br>


<section id="values" class="values" style="background: #f6f9ff;">
<div class="container">
  <div class="row">
    <!-- Kolom untuk informasi kontak -->
    <div class="col-md-6 bg-dark text-white p-4">
      <h2>Hubungi Kami</h2>
      <p>Alamat: Jl. Contoh No.123, Jakarta</p>
      <p>Telepon: (021) 456-7890</p>
      <p>Website: www.contoh.com</p>
    </div>

    
    <!-- Kolom untuk peta -->
    <div class="col-md-6">
      <iframe 
      class="embed-responsive-item" 
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3970.9890312334683!2d105.23752577498519!3d-5.568637894411876!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e4127d55c1cc63b%3A0xc24a10e55d7ff9ad!2sHutan%20Mangrove%20Petengoran!5e0!3m2!1sen!2sid!4v1720687951803!5m2!1sen!2sid"
      frameborder="0"
      allowfullscreen
      style="border:0; width: 100%; height: 100%;" allowfullscreen></iframe>
    </div>
  </div>
</div>

</section>

    


    

<br></br>



`;
  },

  async afterRender() {
    const daftarMenuContainer = document.getElementById("daftarMenu");
    const fetchedMenu = await dashboardHomescreenFunctions.getAllMenu();
    let countTitle = 0; // Menambahkan counter untuk limit item yang ditampilkan

    fetchedMenu.forEach((data) => {
      if (countTitle < 8) {
        // Menambahkan kondisi untuk hanya menampilkan 5 item
        let nama_menu = data.data().nama_menu;
        if (nama_menu.length > 8) {
          // Memotong teks jika lebih dari 10 karakter
          nama_menu = nama_menu.substring(0, 8) + "...";
        }

        daftarMenuContainer.innerHTML += `
        <button class="neumorphic">
        <a href="${data.data().link}" >
        <img src="${data.data().gambar}" class="featured-block-image img-fluid" alt="" style="object-fit:cover;width:150px;height:150px; border-radius:10px">
        <span><strong>${nama_menu}</strong></span>
        
        </a>
        
        </button>
        `;

        countTitle++; // Meningkatkan counter setiap kali item ditampilkan
      }
    });

    if (countTitle === 8) {
      // Menambahkan tombol jika sudah menampilkan 5 item
      daftarMenuContainer.innerHTML += `
      <div class="col-lg-12 col-md-12 col-12 text-center" style="margin:12px;">
      <a href="#/blog"  class="btn btn-primary transition-3d-hover">Data Lainnya</a>
  </div>`;
    }

    // start Carousel Menu Layanan Kemenpora

    const fetchedBlog = await dataPosts._fetchAllDataPosts();
    const postsList = document.getElementById("postsList");

    let count = 0;
    fetchedBlog.forEach((d) => {
      if (count < 4) {
        const data = d.data();
        data.id = d.id;
        postsList.innerHTML += `
                <div class="col-md-6 mb-lg">
                    <div class="card-directory transition-3d-hover cursor-pointer">
                            <img class="img-rounded img-responsive text-primary mb-md" src="${data.foto};">
                            <div class="fs-5 fw-bold text-accent text-left text-uppercase">${data.kategori}
                            </div>
                            <a href="#/detailBlog/${data.id}"S  target="_blank" class="fs-4 fw-semi-bold text-primary text-left no-decoration">${data.judul}</a>
                            <ul class="details">
                                <li class="date">${formatDate(
                                  data.tgl_dibuat
                                )}</li>
                            </ul>
                            
                    </div>
                </div>`;

        count++;
      }
    });

    if (count === 4) {
      // Menambahkan tombol jika sudah menampilkan 5 item
      postsList.innerHTML += `
                <div class="col-lg-12 col-md-12 col-12 text-center" style="margin:12px;">
                    <a href="#/blog"  class="btn btn-primary transition-3d-hover">More</a>
                </div>`;
    }


  },
};

export default dashboardHome;
