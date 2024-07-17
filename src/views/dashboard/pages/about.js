const aboutHome = {
  async render() {
    return `
    <!-- ======= About Us Section ======= -->
    <section class="section-padding section-bg" id="section_2">
        <div class="container">
            <div class="row">
                
                <div class="col-lg-12 col-12 text-center mx-auto">
                    <h2 class="mb-5">Sejarah Kementrian Pemuda dan Olahraga</h2>
                    <span>Republik Indonesia</span>
                </div>

                <div class="col-lg-6 col-12 mb-5 mb-lg-0">
                    <img src="../assets/img/Design-1-1.png" class="custom-text-box-image img-fluid" alt="">
                </div>

                <div class="col-lg-6 col-12">
                    <div class="custom-text-box">

                        <h5 class="mb-3">Sejarah Kemenpora</h5></br>

                        <ul class="custom-list mt-2">
                            <li class="custom-list-item d-flex" style="font-size: 20px;">
                                <i class="bi-check custom-text-box-icon me-2"></i>
                                Tonggak sejarah kelembagaan yang mengurusi pembangunan kepemudaan dan keolahragaan sebenarnya sudah ada sejak masa awal kemerdekaan Indonesia. Sebagaimana penelusuran tim tentang sejarah pengelolaan kegiatan olahraga dan pemuda oleh negara diketahui pada susunan Kabinet pertama yang dibentuk pada tanggal 19 Agustus 1945. Kabinet yang bersifat presidensial memiliki Kementerian Pengajaran yang dipimpin oleh Menteri Ki Hajar Dewantoro. Kegiatan olahraga dan pendidikan jasmani berada di bawah Menteri Pengajaran. Istilah pendidikan jasmani dipergunakan dalam lingkungan sekolah sedangkan istilah olahraga digunakan untuk kegiatan olahraga di masyarakat yang berupa cabang-cabang olahraga. Usia kabinet pertama yang kurang dari tiga bulan kemudian diganti dengan Kabinet II yang berbentuk parlementer di bawah kepemimpinan Perdana Menteri Sutan Sjahrir yang dilantik pada tanggal 14 November 1945.
                                </li>
                        </ul>
                    </div>
                </div>

            </div>
        </div>
    </section><!-- End About Us Section -->

    <!-- ======= Contact Form ======= -->
    <div class="col-lg-12 col-6">
        <form class="custom-form contact-form" action="#" method="post" role="form">
            <center>
            <h2 style="margin-bottom:40px;">Contact form</h2>
            </center>

            <div class="row">
                <div class="col-lg-6 col-md-6 col-12">
                    <input type="text" name="first-name" id="first-name" class="form-control" placeholder="First Name" required>
                </div>

                <div class="col-lg-6 col-md-6 col-12">
                    <input type="text" name="last-name" id="last-name" class="form-control" placeholder="Last Name" required>
                </div>
            </div>

            <input type="email" name="email" id="email" pattern="[^ @]*@[^ @]*" class="form-control" placeholder="Email" required>

            <textarea name="message" rows="5" class="form-control" id="message" placeholder="Description"></textarea>

            <button type="submit" class="form-control">Send Message</button>
        </form>
    </div>
    <!-- End Section -->

    <!-- ======= Maps ======= -->
    <div class="map-section" style="margin-top:20px; margin-left:20px; margin-right:20px; margin-bottom:20px;">
      <iframe style="border:0; width: 100%; height: 500px;" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d991.5967991516312!2d106.79811137655443!3d-6.212557184145724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f6b1882ae783%3A0x79ff0bd0172cf917!2sKementrian%20Pemuda%20dan%20Olahraga!5e0!3m2!1sen!2sid!4v1705854514999!5m2!1sen!2sid" frameborder="0" allowfullscreen></iframe>
    </div>
    <!-- End Section -->
 
</section>`;
  },

  async afterRender() {
    document
      .querySelector("#navbarLightDropdownMenuLink")
      .classList.add("active");
  },
};

export default aboutHome;
