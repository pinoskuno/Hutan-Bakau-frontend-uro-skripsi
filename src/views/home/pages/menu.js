import editMenuFunction from "../../../scripts/utils/editMenuFunction";
import hapusMenuFunction from "../../../scripts/utils/hapusMenuFunction";
import homeMenuFunctions from "../../../scripts/utils/homeMenuFunctions";
import tambahMenuFunction from "../../../scripts/utils/tambahMenuFunction";

/* eslint-disable no-undef */
const menuAdmin = {

    async render() {
      return `
      <div class="mb-3 " >
    <button type="button" class="btn btn-success btn-lg" data-bs-toggle="modal" data-bs-target="#addProducts"><i class="bi bi-plus-circle"></i> TAMBAH MENU <i class="bi bi-plus-circle"></i></button>
    </div>
  
        <section class="section accounts">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Daftar Menu Kelompok 1</h5>
              <div class="table-responsive">
                <table class="table table-hover" id="menuTable">
                  <thead>
                    <tr class="table-secondary">
                        <th scope="col">No.</th>
                        <th scope="col">Admin</th>
                        <th scope="col">Nama Data</th>
                        <th scope="col" class="no-sort text-center">Tanggal</th>
                        <th scope="col" class="no-sort text-center">Gambar</th>
                        <th scope="col" class="no-sort text-center" >LINK</th>
                        <th scope="col" class="no-sort text-center">Actions</th>
                    </tr>
                  </thead>
                  <tbody class="align-middle" id="bodyMenu">
                    
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>
  
        <!-- Modal Add Products -->
        <div class="modal fade" id="addProducts" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
                aria-labelledby="addProductsLabel" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered modal-xl">
                    <div class="modal-content" id="form-edit">
                      <form action="#" method="post" id="tambahMenu" enctype="multipart/form-data">
                            <div class="modal-header border-0 border-top border-4 border-primary">
                                <h1 class="modal-title fs-5" id="addProductsLabel">Tambah Menu</h1>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body border-top">
                                <div class="row">
                                    <div class="col-md-6">
                                      <div class="mb-3">
                                          <label for="namaMenu" class="form-label">Nama Menu</label>
                                          <input type="text" class="form-control" name="namaMenu" id="namaMenu" aria-label="Nama Menu" placeholder="Masukkan nama menu...." required>
                                      </div>
                                      
                                    </div>
                                    <div class="col-md-6">
                                        <div class="mb-3">
                                            <label for="gambarMenu" class="form-label">Gambar Menu</label>
                                            <input class="form-control" type="file" id="gambarMenu" name="gambarMenu" required accept=".jpg,.jpeg,.png">
                                            <small><span class="text-danger fst-italic">Pastikan file tidak lebih 3mb dan format jpg/jpeg/png</span></small>
                                        </div>
                                    </div>
                                    <div class="mb-3">
                                      <label for="link" class="form-label">Link Menu</label>
                                      <textarea class="form-control" id="link" name="link" placeholder="Silahkan Tempel atau Masukkan Link Menu....." rows="6"></textarea>
                                    </div>
                                    <div class="d-grid gap-2 mt-2">
                                        <button class="btn btn-primary" type="submit" id="btnTambah">Tambah</button>
                                    </div>
                                </div>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            </div>
                        </form>
                        
                    </div>
                </div>
        </div>
              `;
    },
  
    async afterRender() {
        console.log('afterrender items');

        const bodyMenu = document.querySelector('#bodyMenu');
        const fetchedMenu = await homeMenuFunctions.getAllData();
        console.log(fetchedMenu);
        let i = 1;
    
        fetchedMenu.forEach(async (d) => {
          const data = d.data();
          data.id = d.id;
          bodyMenu.innerHTML += `<tr>
          <th scope="row">${i}</th>
          <td id='adminName' value=${data.admin}>${data.admin}</td>
          <td >${data.nama_menu}</td>
          <td class="text-center">${data.tanggal}</td>
          <td class="text-center"><img src="${data.gambar}" style="width: 60px; height: 60px" class="rounded"></td>
          <td class="text-center"><a href="${data.link}" role="button" class="btn btn-outline-success" target="_blank"> Go To Menu > </a></td>
          <td class="text-center"><a href="#/editmenu/${data.id}" role="button" class="btn btn-outline-secondary">Edit</a>
          <button type="button" class="btn btn-outline-danger" id="deleteMenu" data-id="${data.id}">Del</button></td>
        </tr>`;
        console.log(data.gambar);
          i += 1;
        });
    
        await homeMenuFunctions.convertIDtoName();

        await tambahMenuFunction.init();

        await hapusMenuFunction.init();
  
      $('#menuTable').DataTable({
        // eslint-disable-next-line quotes
        lengthMenu: [[5, 10, 25, 50, -1], [5, 10, 25, 50, "All"]],
        columnDefs: [{
          targets: 'no-sort',
          orderable: false,
        }],
      });
    },
  };
  
  export default menuAdmin;
  