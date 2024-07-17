import homeProfilFunctions from "../../../scripts/utils/homeProfilFunctions";

/* eslint-disable no-undef */
const profil = {

  async render() {
    return `
    <div class="pagetitle">
      <h1>Profile</h1>
      <nav>
        <ol class="breadcrumb">
          <li class="breadcrumb-item"><a href="#/">Home</a></li>
          <li class="breadcrumb-item active">Profile</li>
        </ol>
      </nav>
    </div><!-- End Page Title -->
    <section class="section profile">
      <div class="row">
        <div class="col-xl-4">

          <div class="card">
            <div class="card-body profile-card pt-4 d-flex flex-column align-items-center">

              <img src="" alt="Profile" class="rounded-circle imgprofile" style="object-fit: cover;width: 150px;">
              <h2 id="nameUser">Nama Admin</h2>
              <h3 id="user">Admin <span class="badge text-bg-success" id="status">Active</span></h3>
            </div>
          </div>

          
          
        </div>

        <div class="col-xl-8">

          <div class="card">
            <div class="card-body pt-3">
              <!-- Bordered Tabs -->
              <ul class="nav nav-tabs nav-tabs-bordered">

                <li class="nav-item">
                  <button class="nav-link active" data-bs-toggle="tab" data-bs-target="#profile-overview">Overview</button>
                </li>

                <li class="nav-item">
                  <button class="nav-link" data-bs-toggle="tab" data-bs-target="#profile-edit">Edit Profile</button>
                </li>


              </ul>
              <div class="tab-content pt-2">

                <div class="tab-pane fade show active profile-overview" id="profile-overview">
                  
                  <h5 class="card-title">Detail Profil</h5>

                  <div class="row">
                    <div class="col-lg-3 col-md-4 label ">Nama Lengkap</div>
                    <div class="col-lg-9 col-md-8" id="namaLengkap">Admin</div>
                  </div>

                  <div class="row">
                    <div class="col-lg-3 col-md-4 label">No HP/WhatsApp</div>
                    <div class="col-lg-9 col-md-8" id="no_hp_wa">-</div>
                  </div>

                  <div class="row">
                    <div class="col-lg-3 col-md-4 label">Email</div>
                    <div class="col-lg-9 col-md-8" id="email">admin@mail.com</div>
                  </div>

                </div>

                <div class="tab-pane fade profile-edit pt-3" id="profile-edit">

                  <!-- Profile Edit Form -->
                  <form method="post" action="#" id="editProfile" enctype="multipart/form-data">
                    <div class="row mb-3">
                      <label for="profileImage" class="col-md-4 col-lg-3 col-form-label">Foto Profil</label>
                      <div class="col-md-8 col-lg-9">
                        <img src="" alt="Profile" class="rounded-circle editimgprofile" style="object-fit: cover;width: 150px;">
                        <input class="form-control" id="editFoto" type="file" id="formFile" accept="image/*">
                        <small><span class="text-danger fst-italic">Pastikan file tidak lebih 3mb dan format jpg/jpeg/png. dan ukuran 1:1 lebih baik!</span></small>
                      </div>
                    </div>

                    <div class="row mb-3">
                      <label for="fullName" class="col-md-4 col-lg-3 col-form-label">Nama Lengkap</label>
                      <div class="col-md-8 col-lg-9">
                        <input name="fullName" type="text" class="form-control" autocomplete="off" id="fullName" value="Nama Admin">
                      </div>
                    </div>

                    <div class="row mb-3">
                      <label for="nomorhp" class="col-md-4 col-lg-3 col-form-label">Nomor Hp/WhatsApp</label>
                      <div class="col-md-8 col-lg-9">
                        <input name="nomorhp" type="text" class="form-control" autocomplete="off" id="nomorhp" value="0859 1212 1232">
                      </div>
                    </div>

                    <div class="row mb-3">
                      <label for="Email" class="col-md-4 col-lg-3 col-form-label">Email</label>
                      <div class="col-md-8 col-lg-9">
                        <input name="email" type="email" class="form-control readonly" aria-label="Disabled input email" id="edit_email" value="admin@mail.com" disabled readonly>
                      </div>
                    </div>

                    <!-- <div class="row mb-3">
                      <label for="Twitter" class="col-md-4 col-lg-3 col-form-label">Twitter Profile</label>
                      <div class="col-md-8 col-lg-9">
                        <input name="twitter" type="text" class="form-control" id="Twitter" value="https://twitter.com/#">
                      </div>
                    </div>

                    <div class="row mb-3">
                      <label for="Facebook" class="col-md-4 col-lg-3 col-form-label">Facebook Profile</label>
                      <div class="col-md-8 col-lg-9">
                        <input name="facebook" type="text" class="form-control" id="Facebook" value="https://facebook.com/#">
                      </div>
                    </div>

                    <div class="row mb-3">
                      <label for="Instagram" class="col-md-4 col-lg-3 col-form-label">Instagram Profile</label>
                      <div class="col-md-8 col-lg-9">
                        <input name="instagram" type="text" class="form-control" id="Instagram" value="https://instagram.com/#">
                      </div>
                    </div>

                    <div class="row mb-3">
                      <label for="Linkedin" class="col-md-4 col-lg-3 col-form-label">Linkedin Profile</label>
                      <div class="col-md-8 col-lg-9">
                        <input name="linkedin" type="text" class="form-control" id="Linkedin" value="https://linkedin.com/#">
                      </div>
                    </div> -->

                    <div class="text-center">
                      <button type="submit" class="btn btn-primary" id="btnEdit">Save Changes</button>
                    </div>
                  </form><!-- End Profile Edit Form -->

                </div>

                

              </div><!-- End Bordered Tabs -->

            </div>
          </div>

        </div>
        <div class="d-grid gap-2">
            <button class="btn btn-danger btn-lg" id="deleteAkun" type="button"><i class="bi bi-x-circle"></i> -------- HAPUS AKUN -------- <i class="bi bi-x-circle"></i></button>
          </div>
      </div>
    </section>
      `;
  },

  async afterRender() {
    // document.querySelector('#navProfile').classList.remove('collapsed');

    await homeProfilFunctions.init();

    await homeProfilFunctions.deleteAccount();
  },
};

export default profil;
