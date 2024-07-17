

const formEditMenu = (data) => `

<div class="row">
<div class="col-md-6">
    <img src="${data.gambar}" alt="${data.nama_menu}" title="foto data ${data.nama_menu}" class="rounded" style="object-fit: cover;max-width: 300px;">
</div>

<div class="col-md-6">
    <div class="my-3">
        <label for="editGambarMenu" class="form-label">Ganti foto</label>
        <input class="form-control" type="file" id="editGambarMenu" name="editGambarMenu" accept=".jpg,.jpeg,.png">
        <small><span class="text-danger fst-italic">Pastikan file tidak lebih 3mb dan format jpg/jpeg/png</span></small>
    </div>
    <div class="mb-3">
        <label for="namaMenu" class="form-label">Nama Menu</label>
        <input type="text" class="form-control" name="namaMenu" id="namaMenu" aria-label="Nama Menu" placeholder="Isikan nama data" value="${data.nama_menu}" required>
    </div>
    <div class="mb-3">
        <label for="link" class="form-label">Link Menu</label>
        <textarea class="form-control" id="link" placeholder="link Menu" rows="4">${data.link}</textarea>
      </div>
</div>


<div class="d-grid gap-2 mt-3">
    <button class="btn btn-primary" type="submit" id="btnEditMenu">Update Menu</button>
</div>
</div>
`;



const formEditBlog = (blog) => `
<div class="row">
    <div class="col-md-6">
        <img src="${blog.foto}" alt="gambar postingan" title="foto tentang ${blog.judul}" class="img-fluid rounded img-thumbnail" style="object-fit: cover;width: 100%; max-height: 450px;">
    </div>

    <div class="col-md-6">
        <div class="mb-3">
            <label for="judul" class="form-label">Nama Blog <span class="text-danger">*</span></label>
            <input type="text" required name="judul" class="form-control" id="judul" placeholder="Judul Blog" value="${blog.judul}">
        </div>
        <div class="mb-3">
          <label for="deskripsi" class="form-label">Konten Blog <span class="text-danger">*</span></label>
          <textarea class="form-control" id="deskripsi" name="deskripsi">${blog.deskripsi}</textarea>
        </div>
        <div class="mb-3">
        <label for="link" class="form-label">Link Download <span class="text-danger">*</span></label>
        <input type="text" required name="link" class="form-control" id="link" placeholder="link file" value="${blog.link}">
    </div>
    </div>

    <div class="col-md-12">
        <div class="mb-3">
            <label for="foto" class="form-label">Gambar <span class="text-danger">*</span></label>
            <input class="form-control" type="file" id="foto" name="foto">
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
        <div class="mb-3">
            <button type="submit" id="btn-submit" class="btn btn-primary">Edit</button>
        </div>
    </div>
</div>
`;

export { formEditMenu, formEditBlog };