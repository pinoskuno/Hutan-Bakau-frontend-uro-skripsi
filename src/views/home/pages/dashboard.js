import homeDashboardFunctions from "../../../scripts/utils/homeDashboardFunctions";

const dashboardAdmin = {

    async render() {
      return `
      <div class="pagetitle">
        <h1>Dashboard</h1>
        <nav>
          <ol class="breadcrumb">
            <li class="breadcrumb-item"><a href="index.html">Home</a></li>
            <li class="breadcrumb-item active">Dashboard</li>
          </ol>
        </nav>
      </div><!-- End Page Title -->
  
      <section class="section dashboard">
        <div class="row">
  
          <div class="col-xxl-4 col-md-6">
            <div class="card info-card sales-card">
  
              <div class="card-body">
                <h5 class="card-title">Total Seluruh Admin</h5>
  
                <div class="d-flex align-items-center">
                  <div class="card-icon rounded-circle d-flex align-items-center justify-content-center">
                    <i class="bi bi-person-check"></i>
                  </div>
                  <div class="ps-3">
                    <h6 id='totalAkun'>145</h6>
                  </div>
                </div>
              </div>
  
            </div>
          </div>
          <div class="col-xxl-4 col-md-6">
            <div class="card info-card revenue-card">
  
              <div class="card-body">
                <h5 class="card-title">Total Seluruh Menu</h5>
  
                <div class="d-flex align-items-center">
                  <div class="card-icon rounded-circle d-flex align-items-center justify-content-center">
                    <i class="bi bi-box-seam"></i>
                  </div>
                  <div class="ps-3">
                    <h6 id='totalMenu'>$3,264</h6>
  
                  </div>
                </div>
              </div>
  
            </div>
          </div>
          <div class="col-xxl-4 col-xl-12">
  
            <div class="card info-card customers-card">
  
              <div class="card-body">
                <h5 class="card-title">Total Seluruh Data</h5>
  
                <div class="d-flex align-items-center">
                  <div class="card-icon rounded-circle d-flex align-items-center justify-content-center">
                    <i class="bi bi-cart-check"></i>
                  </div>
                  <div class="ps-3">
                    <h6 id='totalData'>1244</h6>
  
                  </div>
                </div>
  
              </div>
            </div>
  
          </div>
        </div>
        <div class="row">
  
          <!-- Left side columns -->
          <div class="col-lg-12">
            <div class="row">
  
            <!-- Website Traffic -->
            <div class="card">
              <div class="card-body pb-0">
                <h5 class="card-title text-center">Diagram Kontribusi <span>| Perbandingan Upload Menu dan Data</span></h5>
  
                <div id="diagramKontribusi" style="min-height: 400px;" class="echart"></div>
  
              </div>
            </div><!-- End Website Traffic -->
  
            </div>
          </div><!-- End Left side columns -->
  
        </div>
      </section>
        `;
    },
  
    async afterRender() {
        console.log('kode jalan');
      // TOTAL AKUN
      let currentID = ''
      const fetchedDataAccount = await homeDashboardFunctions.getAllAccount();
      const arrAccount = [];
      fetchedDataAccount.forEach((d) => {
        const data = d.data();
        data.id = d.id;
        arrAccount.push(data);
        if (d.data().email == JSON.parse(localStorage.getItem('user')).email) {
          currentID = d.id
        }
      });
      const totalAkunContainer = document.getElementById('totalAkun');
      totalAkunContainer.innerText = `${arrAccount.length} Akun`;
  
      
  
      // TOTAL MENU
      const fetchedDataBarang = await homeDashboardFunctions.getAllMenu();
      const arrMenu = [];
      fetchedDataBarang.forEach((d) => {
        const data = d.data();
        arrMenu.push(data);
      });
      const totalMenuContainer = document.getElementById('totalMenu');
      totalMenuContainer.innerText = `${arrMenu.length} Menu`;
  
      // TOTAL DATA
      const fetchedDataCheckout = await homeDashboardFunctions.getAllData();
      const arrData = [];
      fetchedDataCheckout.forEach((d) => {
        const data = d.data();
        arrData.push(data);
      });
      const totalDataContainer = document.getElementById('totalData');
      totalDataContainer.innerText = `${arrData.length} Data`;

      // DIAGRAM KONTRIBUSI
      let jumlahMenu = 0;
      let jumlahData = 0;
      arrData.forEach(element => {
        if (element.admin == currentID) {
          jumlahData++
        }
        console.log('data',element);
      });
      arrMenu.forEach(element => {
        if (element.admin == currentID) {
          jumlahMenu++
        }
        console.log('menu',element);
      })
  
      echarts.init(document.querySelector('#diagramKontribusi')).setOption({
        tooltip: {
          trigger: 'item',
        },
        legend: {
          top: '5%',
          left: 'center',
        },
        series: [{
          name: 'Access From',
          type: 'pie',
          radius: ['40%', '70%'],
          avoidLabelOverlap: false,
          label: {
            show: false,
            position: 'center',
          },
          emphasis: {
            label: {
              show: true,
              fontSize: '18',
              fontWeight: 'bold',
            },
          },
          labelLine: {
            show: false,
          },
          data: [{
            value: jumlahData,
            name: 'Data',
          },
          {
            value: jumlahMenu,
            name: 'Menu',
          },
          ],
        }],
      });
    },
  };
  
  export default dashboardAdmin;