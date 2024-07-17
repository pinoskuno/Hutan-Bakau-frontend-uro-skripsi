
import dashboardHomescreenFunctions from "../../../scripts/utils/dashboardHomescreenFunctions";


const layanankemenpora = {
    async render() {
      return `
    
      <div class="container" id="layanan">

      
        <div class="col-lg-12 col-12 text-center mx-auto" styl>
          <h2 class="mb-5">Layanan Kemenpora </h2>
          <input type="text" id="searchInput" placeholder="Cari Data..." />
          <br></br>
        </div>

          
          <div class="row wide-row" id='daftarMenu'>

          </div>
      </div>

      <br></br>
 


    `;
},

async afterRender() {
    console.log("kode jalan");
    const daftarMenuContainer = document.getElementById("daftarMenu");
    const fetchedMenu = await dashboardHomescreenFunctions.getAllMenu();
    let countTitle = 0; // Menambahkan counter untuk limit item yang ditampilkan

    fetchedMenu.forEach((data) => {
      if (countTitle < 6) {
        // Menambahkan kondisi untuk hanya menampilkan 5 item
        let nama_menu = data.data().nama_menu;
        if (nama_menu.length > 8) {
          // Memotong teks jika lebih dari 10 karakter
          nama_menu = nama_menu.substring(0, 8) + "...";
        }

        daftarMenuContainer.innerHTML += `
                    <div class="col-lg-2 col-md-6 col-12 mb-4 mb-lg-0 mb-md-4">
                        <div class="featured-block d-flex justify-content-center align-items-center">
                            <a href="${data.data().link}" target="_blank" class="d-block">
                                <img src="${data.data().gambar}" class="featured-block-image img-fluid" alt="" style="object-fit:cover;width:150px;height:150px; border-radius:10px">
                                <p class="featured-block-text " style="font-size: 18px;"><strong>${nama_menu}</strong></p>
                            </a>
                        </div>
                    </div>`;

        countTitle++; // Meningkatkan counter setiap kali item ditampilkan
      }
    });


    
  },
};

export default layanankemenpora;
