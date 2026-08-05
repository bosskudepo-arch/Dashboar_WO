/**
 * ==========================================================================
 * KONFIGURASI APLIKASI (RAMAH EDIT)
 * Silakan ubah bagian ini untuk menyesuaikan daftar status dan nama teknisi.
 * ==========================================================================
 */

const APP_CONFIG = {
  // Daftar Grouping yang akan ditampilkan di kolom Pivot (bisa bertambah otomatis jika ada di Sheet)
  daftarGrouping: [
    "OPEN",
    "CLOSE",
    "KENDALA"
  ],

  // Daftar Status Default untuk pilihan dropdown di kartu
  daftarStatus: [
    "OPEN",
    "CLOSE",
    "TANAM",
    "GAMAS",
    "PENDING",
    "BERHENTI BERLANGGANAN"
  ],

  // Pemetaan Status ke Grouping untuk sinkronisasi otomatis ketika status diubah
  mappingStatusKeGrouping: {
    "OPEN": "OPEN",
    "CLOSE": "CLOSE",
    "TANAM": "KENDALA",
    "GAMAS": "KENDALA",
    "PENDING": "KENDALA",
    "BERHENTI BERLANGGANAN": "CLOSE"
  },

  // Daftar Teknisi Default untuk pilihan dropdown di kartu
  daftarTeknisi: [
    "ADE-ANDRE",
    "ARIF-JULIANDRI",
    "ASEP-RONI",
    "BAHRI-BOBY",
    "CHAIRUL-YUDA",
    "DEDI",
    "DEDI DARMADI",
    "DEDY-DIKA",
    "DESTA-JEFRI",
    "DICKY-HENDRA",
    "MAMAN",
    "MERI",
    "RUDI-RANDA",
    "TINO-NIZAR",
    "YOGI"
  ],

  // Data Simulasi Awal (Mock Data) yang sudah diperbarui dengan properti Grouping
  mockDataAwal: [
    {
      "WONUM": "WO056842107",
      "DATEL": "SKAWANG",
      "STO": "SMB",
      "AO": "DGPS260619215325551203343-AOi426061909532595040d790_83914537-623791440~2026061922041338101321~38101321~127215365~3~WSA",
      "PAKET": "Double Speed - 100 Mbps Internet + TV",
      "ALPRO": "ODP-SMB-FM/026",
      "INET_NUMBER": "162610307955",
      "CUST_NAME": "RIKO MIRZANI",
      "KONTAK": "+6285165142048",
      "ALAMAT": "Jl Raya Pancur Desa Kalimantan Kec. Paloh Kab. Sambas",
      "STATUS": "ACTCOMP",
      "Grouping": "TERPASANG",
      "Teknisi": "ABIL- HAFIZ",
      "KETERANGAN": ""
    },
    {
      "WONUM": "WO056962226",
      "DATEL": "SKAWANG",
      "STO": "SMB",
      "AO": "XM46T8H2LGCJA8D1CL6N5LH1H-AOk4260622114833647e34900_86266465-638262671~2026062211502838353931~38353931~128016485~3~WSA",
      "PAKET": "75 Mbps Internet",
      "ALPRO": "ODP-SMB-FH/032",
      "INET_NUMBER": "162610308094",
      "CUST_NAME": "DANIEL DANUARTA",
      "KONTAK": "+6281347100421",
      "ALAMAT": "Jl Kabupaten Sambas Kabupaten Sambas 79465",
      "STATUS": "ANTRIAN PROGRES",
      "Grouping": "OGP",
      "Teknisi": "ABIL- HAFIZ",
      "KETERANGAN": ""
    },
    {
      "WONUM": "WO056758694",
      "DATEL": "SKAWANG",
      "STO": "SMB",
      "AO": "DGPS260622131950754530222-AOi4260622011950971ffca20_86298953-638478117~2026062213224638365561~38365561~128055286~3~WSA",
      "PAKET": "EZnet 20 Mbps",
      "ALPRO": "ODP-SMB-FH/071",
      "INET_NUMBER": "162610307941",
      "CUST_NAME": "ENI YUSNITA",
      "KONTAK": "+6281522738663",
      "ALAMAT": "Jalan kalimantan dusun kelumpang rt27/rw014 sekura",
      "STATUS": "ANTRIAN PROGRES",
      "Grouping": "OGP",
      "Teknisi": "ABIL- HAFIZ",
      "KETERANGAN": ""
    },
    {
      "WONUM": "WO056930249",
      "DATEL": "SKAWANG",
      "STO": "SNW",
      "AO": "DGPS260619215325551203343-AOi426061909532595040d790_83914537-623791440~2026061922041338101321~38101321~127215365~3~WSA",
      "PAKET": "One Dynamic 20Mbps+15GB",
      "ALPRO": "ODP-SNW-FAD/047",
      "INET_NUMBER": "162615301023",
      "CUST_NAME": "HESSY YUSTIANTI S Pd",
      "KONTAK": "+628999942848",
      "ALAMAT": "Jl. Demang Akub, Gg. Hj. Marli, Perum Permai 5 No. B10",
      "STATUS": "PENDING PELANGGAN",
      "Grouping": "KENDALA PELANGGAN",
      "Teknisi": "AKMAL AZAMI - ANDRE",
      "KETERANGAN": "WORKFAIL"
    },
    {
      "WONUM": "WO056918634",
      "DATEL": "SKAWANG",
      "STO": "SNW",
      "AO": "XM46T8H2LGCJA8D1CL6N5LH1H-AOk4260622114833647e34900_86266465-638262671~2026062211502838353931~38353931~128016485~3~WSA",
      "PAKET": "50 Mbps Internet",
      "ALPRO": "ODP-SNW-FP/105",
      "INET_NUMBER": "162615227774",
      "CUST_NAME": "HENDRAWAN",
      "KONTAK": "+6281289203959",
      "ALAMAT": "Jl. Padang pasir komplek vila permata blok cq 2 sedau Singkawang",
      "STATUS": "ACTCOMP",
      "Grouping": "TERPASANG",
      "Teknisi": "ANDRYANSYAH SAPUTRA - RATNO",
      "KETERANGAN": ""
    },
    {
      "WONUM": "WO056999794",
      "DATEL": "SKAWANG",
      "STO": "SNW",
      "AO": "DGPS260622131950754530222-AOi4260622011950971ffca20_86298953-638478117~2026062213224638365561~38365561~128055286~3~WSA",
      "PAKET": "Dynamic 50 Mbps 15 GB",
      "ALPRO": "ODP-SNW-FZ/031",
      "INET_NUMBER": "162615301027",
      "CUST_NAME": "TJHUNG JHUN PHEN",
      "KONTAK": "+6285753158028",
      "ALAMAT": "Jl. Sagatani No.2, Sijangkung, Kec. Singkawang",
      "STATUS": "ANTRIAN PROGRES",
      "Grouping": "OGP",
      "Teknisi": "ANDRYANSYAH SAPUTRA - RATNO",
      "KETERANGAN": ""
    },
    {
      "WONUM": "WO056991729",
      "DATEL": "SKAWANG",
      "STO": "SNW",
      "AO": "DGPS260619215325551203343-AOi426061909532595040d790_83914537-623791440~2026061922041338101321~38101321~127215365~3~WSA",
      "PAKET": "One Dynamic 20Mbps+30GB",
      "ALPRO": "ODP-SNW-FN/038",
      "INET_NUMBER": "162615227904",
      "CUST_NAME": "NOVI OKTAVIA",
      "KONTAK": "+6281283101796",
      "ALAMAT": "Jl.kridasana no.10 kelurahan pasiran Kota Singkawang",
      "STATUS": "ANTRIAN PROGRES",
      "Grouping": "OGP",
      "Teknisi": "ARI FITRIANSYAH - SYEKHUL AKHYAR",
      "KETERANGAN": ""
    },
    {
      "WONUM": "WO056929409",
      "DATEL": "SKAWANG",
      "STO": "SNW",
      "AO": "XM46T8H2LGCJA8D1CL6N5LH1H-AOk4260622114833647e34900_86266465-638262671~2026062211502838353931~38353931~128016485~3~WSA",
      "PAKET": "100 Mbps Internet",
      "ALPRO": "ODP-SNW-FY/043",
      "INET_NUMBER": "162615301024",
      "CUST_NAME": "MEYDA",
      "KONTAK": "+6287883805289",
      "ALAMAT": "Jl.alinyang samping warkop ahiung no.30 B kelurahan pasiran",
      "STATUS": "COMPLETE PS",
      "Grouping": "TERPASANG",
      "Teknisi": "ARI FITRIANSYAH - SYEKHUL AKHYAR",
      "KETERANGAN": ""
    },
    {
      "WONUM": "WO056952120",
      "DATEL": "SKAWANG",
      "STO": "SNW",
      "AO": "DGPS260622131950754530222-AOi4260622011950971ffca20_86298953-638478117~2026062213224638365561~38365561~128055286~3~WSA",
      "PAKET": "50 Mbps Internet",
      "ALPRO": "ODP-SNW-FU/177",
      "INET_NUMBER": "162615227896",
      "CUST_NAME": "WASILAH",
      "KONTAK": "+6289612838294",
      "ALAMAT": "Jl.pramuka Gg.anggun no.50 kelurahan condong Singkawang",
      "STATUS": "PROSES PELURUSAN",
      "Grouping": "TERPASANG",
      "Teknisi": "ARI FITRIANSYAH - SYEKHUL AKHYAR",
      "KETERANGAN": ""
    },
    {
      "WONUM": "WO056202070",
      "DATEL": "SKAWANG",
      "STO": "BKY",
      "AO": "DGPS260619215325551203343-AOi426061909532595040d790_83914537-623791440~2026061922041338101321~38101321~127215365~3~WSA",
      "PAKET": "150 Mbps Internet",
      "ALPRO": "ODP-BKY-FD/025",
      "INET_NUMBER": "162608905996",
      "CUST_NAME": "VERA AIGELIA",
      "KONTAK": "+6281352209997",
      "ALAMAT": "Sahan, Kec. Sanggau Ledo, Kabupaten Bengkayang",
      "STATUS": "ANTRIAN PROGRES",
      "Grouping": "OGP",
      "Teknisi": "DIKY FEBRIANSAH - SAMSUL",
      "KETERANGAN": "WORKFAIL"
    },
    {
      "WONUM": "WO055475725",
      "DATEL": "SKAWANG",
      "STO": "BKY",
      "AO": "XM46T8H2LGCJA8D1CL6N5LH1H-AOk4260622114833647e34900_86266465-638262671~2026062211502838353931~38353931~128016485~3~WSA",
      "PAKET": "50 Mbps Internet",
      "ALPRO": "ODP-BKY-FF/003",
      "INET_NUMBER": "162608905967",
      "CUST_NAME": "AMSAL WIJAYA",
      "KONTAK": "+6282154413735",
      "ALAMAT": "JL Dwikora seluas Jalan Dwikora Kabupaten Bengkayang",
      "STATUS": "COMPLETE PS",
      "Grouping": "TERPASANG",
      "Teknisi": "DIKY FEBRIANSAH - SAMSUL",
      "KETERANGAN": "COMPLETE PS"
    },
    {
      "WONUM": "WO056858931",
      "DATEL": "SKAWANG",
      "STO": "PMK",
      "AO": "DGPS260622131950754530222-AOi4260622011950971ffca20_86298953-638478117~2026062213224638365561~38365561~128055286~3~WSA",
      "PAKET": "EZnet 20 Mbps",
      "ALPRO": "ODP-PMK-FD/083",
      "INET_NUMBER": "162609206831",
      "CUST_NAME": "PHY HERAPHY",
      "KONTAK": "+6281522717704",
      "ALAMAT": "Sungai Nyirih, Kec.Jawai Kabupaten Sambas",
      "STATUS": "ANTRIAN PROGRES",
      "Grouping": "OGP",
      "Teknisi": "FIRDAN IRAWAN - HADO MUANTO",
      "KETERANGAN": ""
    },
    {
      "WONUM": "WO056668422",
      "DATEL": "SKAWANG",
      "STO": "SNW",
      "AO": "DGPS260619215325551203343-AOi426061909532595040d790_83914537-623791440~2026061922041338101321~38101321~127215365~3~WSA",
      "PAKET": "EZnet 20 Mbps",
      "ALPRO": "ODP-SNW-FT/025",
      "INET_NUMBER": "162615227744",
      "CUST_NAME": "MULYADIFUL CANDRA",
      "KONTAK": "+6289678143852",
      "ALAMAT": "JL Raya Sedau Jalan Raya Sedau Kabupaten Bengkayang",
      "STATUS": "CROSSING JALAN",
      "Grouping": "KENDALA TEKNIS",
      "Teknisi": "JIMIANSYAH - SOLO",
      "KETERANGAN": "WORKFAIL"
    },
    {
      "WONUM": "WO056903160",
      "DATEL": "SKAWANG",
      "STO": "SNW",
      "AO": "XM46T8H2LGCJA8D1CL6N5LH1H-AOk4260622114833647e34900_86266465-638262671~2026062211502838353931~38353931~128016485~3~WSA",
      "PAKET": "Double Speed - 200 Mbps",
      "ALPRO": "ODP-SNW-FV/092",
      "INET_NUMBER": "162615301020",
      "CUST_NAME": "TJHAI MERY ANDANI",
      "KONTAK": "+625247090318",
      "ALAMAT": "Singkawang Kota Singkawang 79111",
      "STATUS": "PENDING PELANGGAN",
      "Grouping": "KENDALA PELANGGAN",
      "Teknisi": "RONALDO APRILINI - SOLO",
      "KETERANGAN": "WORKFAIL"
    },
    {
      "WONUM": "WO056898871",
      "DATEL": "SKAWANG",
      "STO": "BKY",
      "AO": "DGPS260622131950754530222-AOi4260622011950971ffca20_86298953-638478117~2026062213224638365561~38365561~128055286~3~WSA",
      "PAKET": "Lebih Hemat - 50 Mbps",
      "ALPRO": "ODP-BKY-FC/090",
      "INET_NUMBER": "162608902626",
      "CUST_NAME": "Desi I",
      "KONTAK": "+6281528830051",
      "ALAMAT": "JL SATRIA SAMPING KOMPI DEPAN WARUNG MAKAN NANDA",
      "STATUS": "ODP FULL",
      "Grouping": "KENDALA TEKNIS",
      "Teknisi": "YOGI RINALDI - REJA",
      "KETERANGAN": "ODP FULL"
    }
  ]
};

/**
 * ==========================================================================
 * STATE MANAGEMENT APLIKASI
 * Menyimpan data yang sedang aktif digunakan di memori browser.
 * ==========================================================================
 */
let appState = {
  tasks: [],             // Data seluruh tugas/WO
  isDemoMode: true,      // Apakah sedang menggunakan data simulasi lokal
  webAppUrl: "",         // URL Google Sheets Apps Script Web App
  reTarget: 10,          // Target RE (input manual)
  activeFilter: {
    grouping: "",        // Filter grouping untuk popup detail
    status: "",          // Filter status khusus untuk COMPLETE PS
    technician: "",      // Filter teknisi untuk popup detail
    sheetSource: ""      // Filter tab sheet yang aktif (kosong = semua sheet)
  },
  isModalLocked: false,  // Status apakah modal popup terkunci (tidak tutup saat klik luar)
  currentModalTasks: []  // Data WO yang sedang ditampilkan di modal aktif (untuk fitur Salin Semua)
};

// Element selector (Penghubung elemen HTML)
const DOM = {
  themeToggle: document.getElementById('theme-toggle'),
  dataModeToggle: document.getElementById('data-mode-toggle'),
  sheetsConfigArea: document.getElementById('sheets-config-area'),
  webAppUrlInput: document.getElementById('web-app-url'),
  statusDot: document.getElementById('status-dot'),
  statusText: document.getElementById('status-text'),
  refreshBtn: document.getElementById('refresh-btn'),
  
  // Statistik
  statTotalWo: document.getElementById('stat-total-wo'),
  statOgpWo: document.getElementById('stat-ogp-wo'),
  statTerpasangWo: document.getElementById('stat-terpasang-wo'),
  statKpWo: document.getElementById('stat-kp-wo'),
  statCompletepsWo: document.getElementById('stat-completeps-wo'),
  leaderboardList: document.getElementById('leaderboard-list'),
  
  // Search
  globalSearch: document.getElementById('global-search'),
  dataUpdatedTime: document.getElementById('data-updated-time'),
  
  // Pivot Table
  pivotTable: document.getElementById('pivot-table'),
  sheetTabsContainer: document.getElementById('sheet-tabs-container'),
  loader: document.getElementById('loader'),
  alertContainer: document.getElementById('alert-container'),
  
  // Modal Pop-up
  kanbanModal: document.getElementById('kanban-modal'),
  modalTitle: document.getElementById('modal-title'),
  modalSubtitle: document.getElementById('modal-subtitle'),
  modalSearch: document.getElementById('modal-search'),
  modalCountBadge: document.getElementById('modal-count-badge'),
  modalCopyAllBtn: document.getElementById('modal-copy-all-btn'),
  kanbanCardsContainer: document.getElementById('kanban-cards-container'),
  modalLockBtn: document.getElementById('modal-lock-btn'),
  lockIcon: document.getElementById('lock-icon'),
  modalCloseBtn: document.getElementById('modal-close-btn')
};

/**
 * ==========================================================================
 * INITIALIZATION (PROSES AWAL SAAT HALAMAN DIBUKA)
 * ==========================================================================
 */
document.addEventListener("DOMContentLoaded", async () => {
  // 1. Muat Pengaturan Tema & Konfigurasi dari LocalStorage/linkdata.txt jika ada
  initTheme();
  await initSettings();
  
  // 2. Pasang Event Listeners (Sensor Klik/Ketik)
  setupEventListeners();
  
  // 3. Ambil data awal
  fetchData();
  
  // 4. Inisialisasi Lucide Icons
  lucide.createIcons();
});

// Mengelola Pergantian Tema (Gelap/Terang)
function initTheme() {
  const savedTheme = localStorage.getItem('theme') || 'dark';
  if (savedTheme === 'light') {
    document.body.classList.remove('dark-theme');
    document.body.classList.add('light-theme');
  } else {
    document.body.classList.remove('light-theme');
    document.body.classList.add('dark-theme');
  }
}

// Memuat setelan API & Mode dari penyimpanan lokal dan linkdata.txt
async function initSettings() {
  // Jika belum pernah disetel di perangkat ini (kunjungan pertama), setel default ke Google Sheets
  if (localStorage.getItem('dataMode') === null) {
    localStorage.setItem('dataMode', 'sheets');
  }

  // Coba memuat URL secara dinamis dari linkdata.txt
  let webAppUrl = '';
  try {
    const response = await fetch('linkdata.txt');
    if (response.ok) {
      const text = await response.text();
      const trimmedUrl = text.trim();
      if (trimmedUrl && trimmedUrl.startsWith('http')) {
        webAppUrl = trimmedUrl;
        localStorage.setItem('webAppUrl', trimmedUrl);
        console.log("Berhasil memuat URL Google Sheets dari linkdata.txt:", trimmedUrl);
      }
    }
  } catch (err) {
    console.log("CORS / Offline: Tidak dapat membaca linkdata.txt secara dinamis, menggunakan cache local storage.", err);
  }

  // Jika gagal memuat dari linkdata.txt, gunakan nilai dari localStorage atau default hardcoded
  if (!webAppUrl) {
    if (localStorage.getItem('webAppUrl') === null) {
      localStorage.setItem('webAppUrl', 'https://script.google.com/macros/s/AKfycbyI7Qp6_J1LsWeNVoTSg03L9bcYnQAoXs2t6b-MvjsPL7rcLBCsacxjOVVHeW217eeXqQ/exec');
    }
    webAppUrl = localStorage.getItem('webAppUrl');
  }

  const savedMode = localStorage.getItem('dataMode');
  
  if (savedMode === 'sheets') {
    appState.isDemoMode = false;
    DOM.dataModeToggle.checked = true;
    DOM.sheetsConfigArea.classList.remove('hidden');
    DOM.statusText.textContent = "Google Sheets Mode";
    DOM.statusDot.className = "status-dot online";
  } else {
    appState.isDemoMode = true;
    DOM.dataModeToggle.checked = false;
    DOM.sheetsConfigArea.classList.add('hidden');
    DOM.statusText.textContent = "Demo Mode Aktif";
    DOM.statusDot.className = "status-dot online";
  }
  
  appState.webAppUrl = webAppUrl;
  DOM.webAppUrlInput.value = webAppUrl;
}

/**
 * ==========================================================================
 * SENSOR EVENT (EVENT LISTENERS)
 * Menangkap ketukan mouse atau keyboard pengguna.
 * ==========================================================================
 */
function setupEventListeners() {
  // Tombol Ganti Tema
  DOM.themeToggle.addEventListener('click', () => {
    if (document.body.classList.contains('dark-theme')) {
      document.body.classList.replace('dark-theme', 'light-theme');
      localStorage.setItem('theme', 'light');
    } else {
      document.body.classList.replace('light-theme', 'dark-theme');
      localStorage.setItem('theme', 'dark');
    }
  });

  // Switch Toggle Demo Mode <=> Google Sheets
  DOM.dataModeToggle.addEventListener('change', (e) => {
    appState.isDemoMode = !e.target.checked;
    localStorage.setItem('dataMode', appState.isDemoMode ? 'demo' : 'sheets');
    
    if (appState.isDemoMode) {
      DOM.sheetsConfigArea.classList.add('hidden');
      showAlert("Beralih ke Demo Mode (Data Simulasi)", "info");
      DOM.statusText.textContent = "Demo Mode Aktif";
      fetchData();
    } else {
      DOM.sheetsConfigArea.classList.remove('hidden');
      showAlert("Beralih ke Google Sheets Mode", "info");
      DOM.statusText.textContent = "Menunggu URL Sheets...";
      if (!appState.webAppUrl) {
        DOM.statusDot.className = "status-dot offline";
      } else {
        fetchData();
      }
    }
  });

  // Input URL Web App Google Sheets
  DOM.webAppUrlInput.addEventListener('change', (e) => {
    const url = e.target.value.trim();
    appState.webAppUrl = url;
    localStorage.setItem('webAppUrl', url);
    if (url && !appState.isDemoMode) {
      fetchData();
    }
  });

  // Tombol Refresh Data
  DOM.refreshBtn.addEventListener('click', () => {
    fetchData();
  });

  // Pencarian Cepat Global
  DOM.globalSearch.addEventListener('input', () => {
    renderPivotTable();
    updateStatistics();
  });

  // Pencarian khusus di dalam Modal Pop-up
  DOM.modalSearch.addEventListener('input', () => {
    renderKanbanCards();
  });

  // Tombol Salin Semua Data di Modal
  DOM.modalCopyAllBtn.addEventListener('click', () => {
    copyAllModalTasks();
  });

  // Tombol Tutup Modal
  DOM.modalCloseBtn.addEventListener('click', closeModal);
  
  // Mengunci Modal agar tidak tertutup saat klik luar
  DOM.modalLockBtn.addEventListener('click', () => {
    appState.isModalLocked = !appState.isModalLocked;
    DOM.modalLockBtn.classList.toggle('active', appState.isModalLocked);
    DOM.lockIcon.setAttribute('data-lucide', appState.isModalLocked ? 'lock' : 'unlock');
    lucide.createIcons();
    showAlert(appState.isModalLocked ? "Popup Dikunci" : "Popup Tidak Dikunci", "info");
  });

  // Menutup Modal saat mengklik luar area modal card (jika tidak dikunci)
  DOM.kanbanModal.addEventListener('click', (e) => {
    if (e.target === DOM.kanbanModal && !appState.isModalLocked) {
      closeModal();
    }
  });
}

/**
 * ==========================================================================
 * DATA SINKRONISASI (READ & WRITE)
 * Menangani pengambilan data (GET) dan pengiriman pembaruan (UPDATE).
 * ==========================================================================
 */

// Fungsi Menormalisasikan Grouping Tugas agar sesuai kategori OPEN, CLOSE, KENDALA
function normalizeTaskGroupings() {
  if (!appState.tasks) return;
  appState.tasks.forEach(task => {
    if (task.STATUS) {
      task.Grouping = APP_CONFIG.mappingStatusKeGrouping[task.STATUS.trim()] || "CLOSE";
    } else if (task.Grouping) {
      const oldGroup = task.Grouping.trim().toUpperCase();
      if (oldGroup === "OGP") {
        task.Grouping = "OPEN";
      } else if (oldGroup === "TERPASANG" || oldGroup === "COMPLETE PS") {
        task.Grouping = "CLOSE";
      } else if (oldGroup.includes("KENDALA")) {
        task.Grouping = "KENDALA";
      } else {
        task.Grouping = "CLOSE";
      }
    } else {
      task.Grouping = "CLOSE";
    }
  });
}

// Fungsi Utama Mengambil Data
function fetchData() {
  showLoader(true);
  DOM.statusDot.className = "status-dot loading";
  
  if (appState.isDemoMode) {
    // Jalankan mode simulasi
    setTimeout(() => {
      // Ambil dari localStorage jika sebelumnya ada perubahan, jika kosong gunakan bawaan
      const lokalTasks = localStorage.getItem('mock_tasks');
      if (lokalTasks) {
        const parsed = JSON.parse(lokalTasks);
        // Jika data lama di cache tidak memiliki kolom AO, reset cache agar menggunakan mock data baru yang lengkap
        if (parsed.length > 0 && !parsed[0].hasOwnProperty('AO')) {
          appState.tasks = [...APP_CONFIG.mockDataAwal];
          localStorage.setItem('mock_tasks', JSON.stringify(appState.tasks));
        } else {
          appState.tasks = parsed;
        }
      } else {
        appState.tasks = [...APP_CONFIG.mockDataAwal];
        localStorage.setItem('mock_tasks', JSON.stringify(appState.tasks));
      }
      
      normalizeTaskGroupings();
      renderSheetTabs();
      
      DOM.statusDot.className = "status-dot online";
      DOM.statusText.textContent = "Demo Mode (Sinkron)";
      showLoader(false);
      
      // Update UI
      renderPivotTable();
      updateStatistics();
      updateLastUpdatedTime();
      showAlert("Data simulasi berhasil dimuat!", "success");
    }, 600); // Beri delay buatan agar terasa efek loading
  } else {
    // Mode Google Sheets
    if (!appState.webAppUrl) {
      DOM.statusDot.className = "status-dot offline";
      DOM.statusText.textContent = "Masukkan Web App URL!";
      showLoader(false);
      showAlert("Harap masukkan URL Google Apps Script Web App Anda di sidebar!", "error");
      return;
    }

    DOM.statusText.textContent = "Menghubungkan ke Sheets...";
    
    // Panggil Apps Script dengan action=read
    const fetchUrl = `${appState.webAppUrl}?action=read`;
    
    fetch(fetchUrl)
      .then(response => {
        if (!response.ok) {
          throw new Error("Respon jaringan tidak baik");
        }
        return response.json();
      })
      .then(result => {
        if (result.status === "success") {
          appState.tasks = result.data;
          normalizeTaskGroupings();
          renderSheetTabs();
          DOM.statusDot.className = "status-dot online";
          DOM.statusText.textContent = "Sheets Sinkron";
          renderPivotTable();
          updateStatistics();
          updateLastUpdatedTime();
          showAlert("Data berhasil disinkronkan dari Google Sheets!", "success");
        } else {
          throw new Error(result.message || "Gagal mengambil data");
        }
      })
      .catch(error => {
        console.error("Fetch error:", error);
        DOM.statusDot.className = "status-dot offline";
        DOM.statusText.textContent = "Gagal Sinkronisasi";
        showAlert(`Error: ${error.message}. Periksa kembali URL dan Deploy Apps Script Anda.`, "error");
      })
      .finally(() => {
        showLoader(false);
      });
  }
}

// Fungsi Mengupdate Status/Teknisi dari Dropdown Kartu
function updateTaskOnServer(wonum, newStatus, newTechnician, newGrouping, successCallback, errorCallback) {
  if (appState.isDemoMode) {
    // Simulasi update data di LocalStorage
    setTimeout(() => {
      const taskIndex = appState.tasks.findIndex(t => t.WONUM === wonum);
      if (taskIndex !== -1) {
        appState.tasks[taskIndex].STATUS = newStatus;
        appState.tasks[taskIndex].Teknisi = newTechnician;
        appState.tasks[taskIndex].Grouping = newGrouping;
        
        // Simpan perubahan ke localStorage
        localStorage.setItem('mock_tasks', JSON.stringify(appState.tasks));
        
        // Render ulang tampilan utama
        renderPivotTable();
        updateStatistics();
        updateLastUpdatedTime();
        
        successCallback();
        showAlert(`WO ${wonum} berhasil diperbarui (Lokal)!`, "success");
      } else {
        errorCallback("Data WO tidak ditemukan");
      }
    }, 450);
  } else {
    // Kirim request update ke Google Sheets
    if (!appState.webAppUrl) {
      errorCallback("URL Google Sheets tidak valid");
      return;
    }

    const task = appState.tasks.find(t => t.WONUM === wonum);
    const sheetParam = task && task.SHEET_SOURCE ? `&sheet=${encodeURIComponent(task.SHEET_SOURCE)}` : '';
    const updateUrl = `${appState.webAppUrl}?action=update&wonum=${encodeURIComponent(wonum)}&status=${encodeURIComponent(newStatus)}&teknisi=${encodeURIComponent(newTechnician)}&grouping=${encodeURIComponent(newGrouping)}${sheetParam}`;
    
    fetch(updateUrl)
      .then(response => {
        if (!response.ok) throw new Error("Gagal melakukan pembaruan ke Google Sheets.");
        return response.json();
      })
      .then(result => {
        if (result.status === "success") {
          // Update data state lokal agar cocok
          const taskIndex = appState.tasks.findIndex(t => t.WONUM === wonum);
          if (taskIndex !== -1) {
            appState.tasks[taskIndex].STATUS = newStatus;
            appState.tasks[taskIndex].Teknisi = newTechnician;
            appState.tasks[taskIndex].Grouping = newGrouping;
          }
          
          // Render ulang tampilan utama
          renderPivotTable();
          updateStatistics();
          updateLastUpdatedTime();
          
          successCallback();
          showAlert(`WO ${wonum} berhasil diperbarui di Google Sheets!`, "success");
        } else {
          throw new Error(result.message || "Gagal mengupdate baris");
        }
      })
      .catch(error => {
        console.error("Update error:", error);
        errorCallback(error.message);
        showAlert(`Gagal update: ${error.message}`, "error");
      });
  }
}

/**
 * ==========================================================================
 * RENDERING PIVOT TABLE & STATISTIK
 * Logika memproses data mentah menjadi bentuk tabel pivot silang.
 * ==========================================================================
 */

// Filter data berdasarkan text pencarian global dan tab sheet yang aktif
function getFilteredTasks() {
  let filtered = appState.tasks;
  
  // Filter berdasarkan sheet tab yang aktif
  if (appState.activeFilter.sheetSource) {
    filtered = filtered.filter(task => task.SHEET_SOURCE === appState.activeFilter.sheetSource);
  }
  
  const keyword = DOM.globalSearch.value.trim().toLowerCase();
  if (!keyword) return filtered;
  
  return filtered.filter(task => {
    return (
      (task.WONUM && task.WONUM.toLowerCase().includes(keyword)) ||
      (task.CUST_NAME && task.CUST_NAME.toLowerCase().includes(keyword)) ||
      (task.INET_NUMBER && task.INET_NUMBER.toString().toLowerCase().includes(keyword)) ||
      (task.ALAMAT && task.ALAMAT.toLowerCase().includes(keyword)) ||
      (task.Teknisi && task.Teknisi.toLowerCase().includes(keyword)) ||
      (task.STATUS && task.STATUS.toLowerCase().includes(keyword)) ||
      (task.KETERANGAN && task.KETERANGAN.toLowerCase().includes(keyword))
    );
  });
}

// Menghasilkan dan merender tombol tab per Sheet secara dinamis
function renderSheetTabs() {
  if (!DOM.sheetTabsContainer) return;
  
  // Dapatkan daftar unik sheetSource dari data tugas yang aktif
  const sheetSources = new Set();
  appState.tasks.forEach(task => {
    if (task.SHEET_SOURCE) {
      sheetSources.add(task.SHEET_SOURCE);
    }
  });
  
  // Jika tidak ada info sheetSource (misal di demo mode tanpa SHEET_SOURCE), sembunyikan container tab
  if (sheetSources.size === 0) {
    DOM.sheetTabsContainer.classList.add('hidden');
    return;
  }
  
  DOM.sheetTabsContainer.classList.remove('hidden');
  
  const sortedSheets = Array.from(sheetSources).sort();
  
  let html = `
    <button class="sheet-tab-btn ${appState.activeFilter.sheetSource === "" ? "active" : ""}" data-sheet="">
      Semua Sheet (${appState.tasks.length})
    </button>
  `;
  
  sortedSheets.forEach(sheetName => {
    const count = appState.tasks.filter(t => t.SHEET_SOURCE === sheetName).length;
    html += `
      <button class="sheet-tab-btn ${appState.activeFilter.sheetSource === sheetName ? "active" : ""}" data-sheet="${sheetName}">
        ${sheetName} (${count})
      </button>
    `;
  });
  
  DOM.sheetTabsContainer.innerHTML = html;
  
  // Pasang Event Listener klik pada tombol tab
  DOM.sheetTabsContainer.querySelectorAll('.sheet-tab-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const selectedSheet = e.currentTarget.getAttribute('data-sheet');
      appState.activeFilter.sheetSource = selectedSheet;
      
      // Update kelas active tombol tab
      DOM.sheetTabsContainer.querySelectorAll('.sheet-tab-btn').forEach(b => b.classList.remove('active'));
      e.currentTarget.classList.add('active');
      
      // Render ulang dashboard berdasarkan filter sheet yang baru
      renderPivotTable();
      updateStatistics();
    });
  });
}

// Fungsi Render Pivot Table
function renderPivotTable() {
  const filteredTasks = getFilteredTasks();
  
  // 1. Dapatkan daftar unik Teknisi dan Grouping dari data terkini (ditambah dengan daftar default agar konsisten)
  const setTeknisi = new Set(APP_CONFIG.daftarTeknisi);
  const setGrouping = new Set(APP_CONFIG.daftarGrouping);
  
  appState.tasks.forEach(task => {
    if (task.Teknisi && task.Teknisi.trim() !== "") setTeknisi.add(task.Teknisi.trim());
    if (task.Grouping && task.Grouping.trim() !== "") setGrouping.add(task.Grouping.trim());
  });
  
  const listTeknisi = Array.from(setTeknisi).sort();
  const listGrouping = Array.from(setGrouping); // Urutan sesuai grouping default
  
  // Kolom pivot table: daftar Grouping
  const listColumns = [...listGrouping];

  // 2. Hitung jumlah data pivot
  // Struktur matrixPivot[nama_teknisi][nama_kolom] = jumlah_tugas
  const matrixPivot = {};
  listTeknisi.forEach(tek => {
    matrixPivot[tek] = {};
    listColumns.forEach(col => {
      matrixPivot[tek][col] = 0;
    });
  });
  
  filteredTasks.forEach(task => {
    const tek = (task.Teknisi || "").trim();
    const group = (task.Grouping || "").trim();
    
    if (matrixPivot[tek]) {
      // Hitung untuk kolom grouping
      if (matrixPivot[tek][group] !== undefined) {
        matrixPivot[tek][group]++;
      }
    }
  });

  // 3. Bangun Header Tabel
  const shortColNames = {
    "KENDALA": "Kdl"
  };

  let headerHtml = `
    <tr>
      <th class="th-technician">
        <span class="txt-full">Nama Teknisi</span>
        <span class="txt-short">Teknisi</span>
      </th>
  `;
  listColumns.forEach(col => {
    const shortCol = shortColNames[col] || col;
    headerHtml += `
      <th title="${col}">
        <span class="txt-full">${col}</span>
        <span class="txt-short">${shortCol}</span>
      </th>
    `;
  });
  headerHtml += `
      <th>
        <span class="txt-full">Total Tugas</span>
        <span class="txt-short">Total</span>
      </th>
    </tr>
  `;
  DOM.pivotTable.querySelector('thead').innerHTML = headerHtml;

  // 4. Bangun Baris Tabel (Data & Angka)
  let tbodyHtml = "";
  const totalStatusCol = {}; // Menyimpan total vertikal per kolom pivot
  listColumns.forEach(col => totalStatusCol[col] = 0);
  let grandTotal = 0;

  listTeknisi.forEach(teknisi => {
    // Hitung total tugas aktual teknisi ini (tanpa double counting Complete PS)
    const rowTotal = filteredTasks.filter(t => (t.Teknisi || "").trim() === teknisi).length;
    
    const displayName = teknisi.includes(" - ") ? teknisi.replace(" - ", " -<br>") : teknisi;
    let rowHtml = `
      <tr>
        <td class="td-technician">${displayName}</td>
    `;
    
    listColumns.forEach(col => {
      const count = matrixPivot[teknisi][col];
      totalStatusCol[col] += count;
      
      const isActive = count > 0 ? "pivot-cell-active" : "";
      const filterType = "grouping";
      
      rowHtml += `
        <td class="pivot-cell ${isActive}" data-status="${col}" data-teknisi="${teknisi}">
          <span class="pivot-number-badge" onclick="openDetailsModal('${teknisi}', '${col}', '${filterType}')">${count}</span>
        </td>
      `;
    });
    
    grandTotal += rowTotal;
    const isRowTotalActive = rowTotal > 0 ? "pivot-cell-active" : "";
    rowHtml += `
      <td class="pivot-cell ${isRowTotalActive} cell-total-tugas" data-status="TOTAL TUGAS" data-teknisi="${teknisi}">
        <span class="pivot-number-badge" onclick="openDetailsModal('${teknisi}', '', 'all')">${rowTotal}</span>
      </td>
    </tr>
    `;
    
    tbodyHtml += rowHtml;
  });

  // 5. Tambahkan Baris Total di paling bawah
  let footerHtml = `
    <tr class="tr-total">
      <td class="td-technician">TOTAL</td>
  `;
  listColumns.forEach(col => {
    const colTotal = totalStatusCol[col];
    const filterType = "grouping";
    const isActive = colTotal > 0 ? "pivot-cell-active" : "";
    footerHtml += `
      <td class="pivot-cell ${isActive}" data-status="${col}">
        <span class="pivot-number-badge" onclick="openDetailsModal('', '${col}', '${filterType}')">${colTotal}</span>
      </td>
    `;
  });
  
  // Hitung total aktual semua tugas yang disaring (bukan jumlah kolom pivot)
  const actualGrandTotal = filteredTasks.length;
  const isGrandActive = actualGrandTotal > 0 ? "pivot-cell-active" : "";
  footerHtml += `
      <td class="pivot-cell ${isGrandActive} cell-grand-total" data-status="GRAND TOTAL">
        <span class="pivot-number-badge" onclick="openDetailsModal('', '', 'all')">${actualGrandTotal}</span>
      </td>
    </tr>
  `;
  
  tbodyHtml += footerHtml;
  DOM.pivotTable.querySelector('tbody').innerHTML = tbodyHtml;
}

// Memperbarui Statistik di Sidebar
function updateStatistics() {
  const filtered = getFilteredTasks();
  
  const total = filtered.length;
  let open = 0;
  let close = 0;
  let kendala = 0;
  let completeps = 0;
  
  filtered.forEach(task => {
    const group = (task.Grouping || "").toUpperCase().trim();
    const status = (task.STATUS || "").toUpperCase().trim();
    
    // Hitung berdasarkan Grouping (menyinkronkan statistik dengan pivot)
    if (group === "OPEN") {
      open++;
    } else if (group === "CLOSE") {
      close++;
    } else if (group === "KENDALA") {
      kendala++;
    }
    
    // Hitung khusus COMPLETE PS berdasarkan STATUS
    if (status === "COMPLETE PS") {
      completeps++;
    }
  });
  
  DOM.statTotalWo.textContent = total;
  DOM.statOgpWo.textContent = open;
  DOM.statTerpasangWo.textContent = close;
  DOM.statKpWo.textContent = kendala;
  DOM.statCompletepsWo.textContent = completeps;
  
  // Perbarui Leaderboard Tim
  updateLeaderboard(filtered);
  
  // Perbarui Scoreboard PS/RE
  updateScoreboard();
}

// Memperbarui Leaderboard Tim di Sidebar
function updateLeaderboard(filteredTasks) {
  const countPerTeknisi = {};
  
  // Ambil daftar unik seluruh teknisi dari data agar leaderboard lengkap
  const setTeknisi = new Set(APP_CONFIG.daftarTeknisi);
  appState.tasks.forEach(t => { if(t.Teknisi) setTeknisi.add(t.Teknisi.trim()); });
  
  setTeknisi.forEach(tek => {
    countPerTeknisi[tek] = 0;
  });
  
  // Hitung jumlah COMPLETE PS per teknisi
  filteredTasks.forEach(task => {
    const tek = (task.Teknisi || "").trim();
    const status = (task.STATUS || "").toUpperCase().trim();
    if (status === "COMPLETE PS" && tek) {
      countPerTeknisi[tek] = (countPerTeknisi[tek] || 0) + 1;
    }
  });
  
  // Urutkan data berdasarkan jumlah Complete PS terbanyak
  const leaderboardData = Object.keys(countPerTeknisi)
    .map(tek => ({ name: tek, count: countPerTeknisi[tek] }))
    .sort((a, b) => b.count - a.count);
  
  // Bangun HTML Leaderboard (Top 5 Tim)
  let leaderboardHtml = "";
  leaderboardData.forEach((item, index) => {
    if (index < 5) {
      leaderboardHtml += `
        <div class="leaderboard-item">
          <div class="leaderboard-rank">${index + 1}</div>
          <div class="leaderboard-name" title="${item.name}">${item.name}</div>
          <div class="leaderboard-count">${item.count} WO</div>
        </div>
      `;
    }
  });
  
  DOM.leaderboardList.innerHTML = leaderboardHtml || `<p class="help-text" style="text-align: center; padding: 12px;">Belum ada Complete PS</p>`;
}

// Update jam terakhir data diperbarui
function updateLastUpdatedTime() {
  const now = new Date();
  const timeString = now.toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit', second: '2-digit' });
  DOM.dataUpdatedTime.textContent = `Terakhir diperbarui: Hari ini, ${timeString}`;
}

// Memperbarui data dan persentase di Scoreboard KAWAL SA MEMPAWAH
function updateScoreboard() {
  const filtered = getFilteredTasks();
  const total = filtered.length;
  
  let countOpen = 0;
  let countClose = 0;
  
  filtered.forEach(task => {
    const group = (task.Grouping || "").toUpperCase().trim();
    if (group === "OPEN") {
      countOpen++;
    } else if (group === "CLOSE") {
      countClose++;
    }
  });
  
  const pctOpen = total > 0 ? (countOpen / total) * 100 : 0;
  const pctClose = total > 0 ? (countClose / total) * 100 : 0;
  
  const openValueEl = document.getElementById('score-open-value');
  const openSubtextEl = document.getElementById('score-open-subtext');
  
  const closeValueEl = document.getElementById('score-close-value');
  const closeSubtextEl = document.getElementById('score-close-subtext');
  
  const totalValueEl = document.getElementById('score-total-value');
  const totalSubtextEl = document.getElementById('score-total-subtext');
  
  if (openValueEl) openValueEl.textContent = `${pctOpen.toFixed(1)}%`;
  if (openSubtextEl) openSubtextEl.textContent = `${countOpen} / ${total} WO`;
  
  if (closeValueEl) closeValueEl.textContent = `${pctClose.toFixed(1)}%`;
  if (closeSubtextEl) closeSubtextEl.textContent = `${countClose} / ${total} WO`;
  
  if (totalValueEl) totalValueEl.textContent = total;
  if (totalSubtextEl) {
    if (appState.activeFilter.sheetSource) {
      totalSubtextEl.textContent = `Sheet: ${appState.activeFilter.sheetSource}`;
    } else {
      totalSubtextEl.textContent = `Semua Sheet`;
    }
  }
}

/**
 * ==========================================================================
 * KANBAN BOARD POP-UP (MODAL DETAILS)
 * Mengelola modal detail pop-up dan rendering kartu-kartu tugas.
 * ==========================================================================
 */

// Membuka modal detail
window.openDetailsModal = function(teknisi, filterVal, filterType) {
  appState.activeFilter.technician = teknisi;
  
  if (filterType === 'grouping') {
    appState.activeFilter.grouping = filterVal;
    appState.activeFilter.status = "";
  } else if (filterType === 'status') {
    appState.activeFilter.grouping = "";
    appState.activeFilter.status = filterVal;
  } else {
    appState.activeFilter.grouping = "";
    appState.activeFilter.status = "";
  }
  
  // Tentukan judul modal
  let title = "Detail Seluruh Pekerjaan";
  let subtitle = "Menampilkan semua Work Order terdaftar";
  
  if (teknisi && filterVal) {
    title = filterVal;
    subtitle = `Teknisi: ${teknisi}`;
  } else if (teknisi) {
    title = `Semua Tugas Teknisi`;
    subtitle = teknisi;
  } else if (filterVal) {
    title = filterVal;
    subtitle = `Semua/Kolom ${filterVal}`;
  }
  
  DOM.modalTitle.textContent = title;
  DOM.modalSubtitle.textContent = subtitle;
  DOM.modalSearch.value = ""; // Reset kata kunci cari di modal
  
  // Tampilkan Modal Card
  DOM.kanbanModal.classList.add('active');
  
  // Render Kartu Detail
  renderKanbanCards();
};

// Menutup modal
function closeModal() {
  DOM.kanbanModal.classList.remove('active');
  appState.isModalLocked = false;
  DOM.modalLockBtn.classList.remove('active');
  DOM.lockIcon.setAttribute('data-lucide', 'unlock');
  lucide.createIcons();
}

// Menghitung durasi sejak jam open/booking hingga sekarang (atau sisa SLA untuk tiket MANJA)
function calculateTicketDuration(task) {
  const isManja = (task.PAKET || "").toUpperCase().trim() === "MANJA";
  
  // Untuk tiket MANJA, waktu dihitung berdasarkan BOOKING DATE. Untuk reguler berdasarkan JAM OPEN (DATEL).
  let dateStr = "";
  if (isManja) {
    dateStr = (task.BOOKING_DATE || task.DATEL || "").trim();
  } else {
    dateStr = (task.DATEL || "").trim();
  }
  
  if (!dateStr) {
    return { text: "-", class: "duration-normal", badgeHtml: "" };
  }
  
  // Cek apakah tiket sudah CLOSE
  const statusUpper = (task.STATUS || "").toUpperCase().trim();
  if (statusUpper === "CLOSE" || statusUpper === "ACTCOMP" || statusUpper === "COMPLETE PS" || statusUpper === "TERPASANG") {
    return {
      text: "Selesai",
      class: "duration-closed",
      badgeHtml: `<span class="badge duration-badge" style="background: rgba(255, 255, 255, 0.05); color: #888; border: 1px solid rgba(255, 255, 255, 0.15);">Selesai</span>`
    };
  }
  
  // Konversi format DD/MM/YYYY HH:mm ke ISO YYYY-MM-DDTHH:mm agar diparsing dengan benar oleh browser
  if (dateStr.includes("/")) {
    const parts = dateStr.split(" ");
    const dateParts = parts[0].split("/");
    if (dateParts.length === 3) {
      dateStr = `${dateParts[2]}-${dateParts[1]}-${dateParts[0]}`;
      if (parts[1]) dateStr += `T${parts[1]}`;
    }
  } else if (dateStr.includes("-") && !dateStr.includes("T")) {
    dateStr = dateStr.replace(" ", "T");
  }
  
  const baseTime = new Date(dateStr);
  if (isNaN(baseTime.getTime())) {
    return { text: dateStr, class: "duration-normal", badgeHtml: `<span class="badge">${dateStr}</span>` };
  }
  
  const now = new Date();
  const elapsedMs = now - baseTime;
  
  const elapsedMinutesTotal = Math.floor(elapsedMs / 60000);
  const elapsedHours = Math.floor(elapsedMinutesTotal / 60);
  const elapsedMinutes = elapsedMinutesTotal % 60;
  
  if (isManja) {
    // SLA Manja = 3 Jam (180 Menit) dari BOOKING DATE
    const slaMinutes = 180;
    const remainingMinutesTotal = slaMinutes - elapsedMinutesTotal;
    
    if (remainingMinutesTotal >= 0) {
      const remHours = Math.floor(remainingMinutesTotal / 60);
      const remMinutes = remainingMinutesTotal % 60;
      let text = "Sisa SLA: ";
      if (remHours > 0) {
        text += `${remHours}j ${remMinutes}m`;
      } else {
        text += `${remMinutes}m`;
      }
      return { 
        text: text, 
        class: "duration-sla-safe", 
        badgeHtml: `<span class="badge duration-badge" style="background: rgba(57, 255, 20, 0.12); color: #39ff14; border: 1px solid rgba(57, 255, 20, 0.35); font-weight: 600;" title="SLA dihitung dari Booking Date">${text}</span>`
      };
    } else {
      const overdueMinutesTotal = Math.abs(remainingMinutesTotal);
      const ovHours = Math.floor(overdueMinutesTotal / 60);
      const ovMinutes = overdueMinutesTotal % 60;
      let text = "Overdue: ";
      if (ovHours > 0) {
        text += `${ovHours}j ${ovMinutes}m`;
      } else {
        text += `${ovMinutes}m`;
      }
      return { 
        text: text, 
        class: "duration-sla-overdue", 
        badgeHtml: `<span class="badge duration-badge" style="background: rgba(247, 33, 25, 0.12); color: #F72119; border: 1px solid rgba(247, 33, 25, 0.35); font-weight: 600; animation: pulse-border 1.5s infinite;" title="SLA dihitung dari Booking Date">${text}</span>`
      };
    }
  } else {
    // Regular ticket: show elapsed age
    let text = "Umur: ";
    if (elapsedHours > 0) {
      const elapsedDays = Math.floor(elapsedHours / 24);
      const remHours = elapsedHours % 24;
      if (elapsedDays > 0) {
        text += `${elapsedDays}h ${remHours}j`;
      } else {
        text += `${elapsedHours}j ${elapsedMinutes}m`;
      }
    } else {
      text += `${elapsedMinutes}m`;
    }
    
    return { 
      text: text, 
      class: "duration-normal", 
      badgeHtml: `<span class="badge duration-badge" style="background: rgba(255, 255, 255, 0.05); color: var(--text-secondary); border: 1px solid var(--border-color);">${text}</span>`
    };
  }
}

// Memproses dan me-render kartu tugas di dalam modal popup
function renderKanbanCards() {
  const tekFilter = appState.activeFilter.technician;
  const groupingFilter = appState.activeFilter.grouping;
  const statusFilter = appState.activeFilter.status;
  const searchKeyword = DOM.modalSearch.value.trim().toLowerCase();
  
  // 1. Saring data berdasarkan filter sel pivot yang diklik
  let matchedTasks = appState.tasks.filter(task => {
    // Filter berdasarkan sheet tab yang aktif
    if (appState.activeFilter.sheetSource && task.SHEET_SOURCE !== appState.activeFilter.sheetSource) {
      return false;
    }
    
    const tekCocok = !tekFilter || (task.Teknisi || "").trim() === tekFilter;
    
    let filterCocok = true;
    if (groupingFilter) {
      filterCocok = (task.Grouping || "").trim() === groupingFilter;
    } else if (statusFilter) {
      filterCocok = (task.STATUS || "").trim() === statusFilter;
    }
    
    return tekCocok && filterCocok;
  });
  
  // 2. Saring lagi berdasarkan keyword pencarian modal jika diisi
  if (searchKeyword) {
    matchedTasks = matchedTasks.filter(task => {
      return (
        (task.WONUM && task.WONUM.toLowerCase().includes(searchKeyword)) ||
        (task.CUST_NAME && task.CUST_NAME.toLowerCase().includes(searchKeyword)) ||
        (task.INET_NUMBER && task.INET_NUMBER.toString().toLowerCase().includes(searchKeyword)) ||
        (task.ALAMAT && task.ALAMAT.toLowerCase().includes(searchKeyword)) ||
        (task.KETERANGAN && task.KETERANGAN.toLowerCase().includes(searchKeyword))
      );
    });
  }
  
  // Update badge jumlah WO di modal
  DOM.modalCountBadge.textContent = `${matchedTasks.length} WO`;
  appState.currentModalTasks = matchedTasks;
  
  // 3. Render HTML Kartu
  if (matchedTasks.length === 0) {
    DOM.kanbanCardsContainer.innerHTML = `
      <div style="grid-column: 1/-1; text-align: center; padding: 40px; color: var(--text-muted);">
        <i data-lucide="folder-open" style="width: 48px; height: 48px; margin-bottom: 12px; stroke-width: 1.5px;"></i>
        <p>Tidak ada data pekerjaan yang cocok.</p>
      </div>
    `;
    lucide.createIcons();
    return;
  }
  
  // Kumpulkan list teknisi & status untuk dropdown menu pada kartu
  // Ambil gabungan dari default dan unik data asli
  const setTeknisi = new Set(APP_CONFIG.daftarTeknisi);
  appState.tasks.forEach(t => { if(t.Teknisi) setTeknisi.add(t.Teknisi.trim()); });
  const listTeknisi = Array.from(setTeknisi).sort();

  const setStatus = new Set(APP_CONFIG.daftarStatus);
  appState.tasks.forEach(t => { if(t.STATUS) setStatus.add(t.STATUS.trim()); });
  const listStatus = Array.from(setStatus);

  let cardsHtml = "";
  
  matchedTasks.forEach(task => {
    // Definisikan class status border samping
    let statusClass = "status-lainnya";
    const statusUpper = (task.STATUS || "").toUpperCase();
    if (statusUpper === "TERPASANG" || statusUpper === "COMPLETE PS" || statusUpper === "ACTCOMP") {
      statusClass = "status-terpasang";
    } else if (statusUpper === "ANTRIAN PROGRES" || statusUpper === "PROSES PELURUSAN") {
      statusClass = "status-antrian";
    } else if (statusUpper.includes("PENDING") || statusUpper.includes("KENDALA") || statusUpper === "ODP FULL") {
      statusClass = "status-pending";
    }
    
    // Keterangan box if exists
    const keteranganBox = task.KETERANGAN 
      ? `<div class="card-keterangan" title="Keterangan Tambahan">${task.KETERANGAN}</div>` 
      : "";
      
    // Hubungi Pelanggan Link
    const waLink = task.KONTAK 
      ? `<a href="https://wa.me/${formatPhoneNumber(task.KONTAK)}" target="_blank" class="contact-link" title="Hubungi via WhatsApp">
          <i data-lucide="phone" style="width: 12px; height: 12px;"></i> ${task.KONTAK}
         </a>`
      : `<span style="color: var(--text-muted);">Tidak ada kontak</span>`;

    // Dropdown Status Options
    let statusOptionsHtml = "";
    listStatus.forEach(st => {
      const selected = st === task.STATUS ? "selected" : "";
      statusOptionsHtml += `<option value="${st}" ${selected}>${st}</option>`;
    });

    // Dropdown Teknisi Options
    let teknisiOptionsHtml = "";
    listTeknisi.forEach(tk => {
      const selected = tk === task.Teknisi ? "selected" : "";
      teknisiOptionsHtml += `<option value="${tk}" ${selected}>${tk}</option>`;
    });

    // Hitung durasi tiket
    const durationInfo = calculateTicketDuration(task);

    cardsHtml += `
      <div class="kanban-card ${statusClass}" id="card-${task.WONUM}">
        <!-- Spinner Loading Overlay -->
        <div class="card-loader">
          <div class="spinner"></div>
          <span style="font-size: 0.65rem; color: #fff; margin-top: 6px; font-weight: 500;">Menyimpan...</span>
        </div>

        <div class="card-header-info">
          <div style="display: flex; align-items: center; gap: 6px;">
            <span class="wo-number">${task.WONUM}</span>
            <button class="btn-icon-xs btn-copy-card" onclick="copyIndividualTask('${task.WONUM}')" title="Salin Data WO">
              <i data-lucide="copy" style="width: 11px; height: 11px;"></i>
            </button>
          </div>
          <div style="display: flex; align-items: center; gap: 6px;">
            ${durationInfo.badgeHtml}
            <span class="badge">${task.STO || "STO"}</span>
          </div>
        </div>

        <h4 class="card-title">${task.CUST_NAME || "Nama Pelanggan"}</h4>

        <div class="card-details">
          <div class="detail-row" title="Jam Open Tiket">
            <i data-lucide="clock"></i>
            <span>Open: ${task.DATEL || "-"}</span>
          </div>
          <div class="detail-row" title="Paket Layanan">
            <i data-lucide="package"></i>
            <span>${task.PAKET || "-"}</span>
          </div>
          <div class="detail-row" title="Alat Produksi / ODP">
            <i data-lucide="cpu"></i>
            <span>${task.ALPRO || "-"}</span>
          </div>
          <div class="detail-row" title="Nomor Internet">
            <i data-lucide="hash"></i>
            <span style="font-family: monospace;">${task.INET_NUMBER || "-"}</span>
          </div>
          <div class="detail-row" title="Nomor Kontak">
            <i data-lucide="user"></i>
            <span>${waLink}</span>
          </div>
          <div class="detail-row" title="Alamat">
            <i data-lucide="map-pin"></i>
            <span>${task.ALAMAT || "-"}</span>
          </div>
        </div>

        ${keteranganBox}

        <!-- Dropdowns geser status & teknisi -->
        <div class="card-controls">
          <div class="control-group">
            <label>Status</label>
            <select class="card-select select-status" onchange="handleDropdownChange('${task.WONUM}', this, 'status')">
              ${statusOptionsHtml}
            </select>
          </div>
          <div class="control-group">
            <label>Teknisi</label>
            <select class="card-select select-teknisi" onchange="handleDropdownChange('${task.WONUM}', this, 'teknisi')">
              ${teknisiOptionsHtml}
            </select>
          </div>
        </div>
      </div>
    `;
  });
  
  DOM.kanbanCardsContainer.innerHTML = cardsHtml;
  lucide.createIcons();
}

// Penanganan Perubahan Dropdown Status atau Teknisi
window.handleDropdownChange = function(wonum, selectElement, type) {
  const cardElement = document.getElementById(`card-${wonum}`);
  if (!cardElement) return;

  // Temukan nilai terpilih saat ini dari kedua dropdown di kartu tersebut
  const selectStatus = cardElement.querySelector('.select-status');
  const selectTeknisi = cardElement.querySelector('.select-teknisi');

  const newStatus = selectStatus.value;
  const newTechnician = selectTeknisi.value;
  
  // Cari grouping untuk status baru
  const newGrouping = APP_CONFIG.mappingStatusKeGrouping[newStatus] || "CLOSE";

  // Aktifkan loader visual di atas kartu yang sedang diedit
  cardElement.classList.add('updating');

  // Kirim data pembaruan ke Database (Sheets / LocalStorage)
  updateTaskOnServer(
    wonum, 
    newStatus, 
    newTechnician,
    newGrouping,
    // Callback SUKSES
    () => {
      cardElement.classList.remove('updating');
      
      // Efek micro-interaction: jika filter modal aktif, dan data yang diubah sudah tidak cocok lagi
      // dengan filter sel pivot saat ini, kartu akan memudar lalu menghilang.
      const tekFilter = appState.activeFilter.technician;
      const groupingFilter = appState.activeFilter.grouping;
      const statusFilter = appState.activeFilter.status;
      
      let isStillMatch = true;
      
      if (tekFilter && newTechnician !== tekFilter) {
        isStillMatch = false;
      }
      if (groupingFilter && newGrouping !== groupingFilter) {
        isStillMatch = false;
      }
      if (statusFilter && newStatus !== statusFilter) {
        isStillMatch = false;
      }
      
      if (!isStillMatch) {
        cardElement.classList.add('removing');
        setTimeout(() => {
          cardElement.remove();
          // Update jumlah kartu di modal
          const currentCards = DOM.kanbanCardsContainer.querySelectorAll('.kanban-card');
          DOM.modalCountBadge.textContent = `${currentCards.length} WO`;
          
          if (currentCards.length === 0) {
            // Jika kosong setelah dihapus semua, render tampilan kosong
            renderKanbanCards();
          }
        }, 300);
      } else {
        // Jika masih cocok, perbarui border warna statusnya
        cardElement.className = "kanban-card";
        let statusClass = "status-lainnya";
        const statusUpper = newStatus.toUpperCase();
        if (statusUpper === "TERPASANG" || statusUpper === "COMPLETE PS" || statusUpper === "ACTCOMP") {
          statusClass = "status-terpasang";
        } else if (statusUpper === "ANTRIAN PROGRES" || statusUpper === "PROSES PELURUSAN") {
          statusClass = "status-antrian";
        } else if (statusUpper.includes("PENDING") || statusUpper.includes("KENDALA") || statusUpper === "ODP FULL") {
          statusClass = "status-pending";
        }
        cardElement.classList.add(statusClass);
      }
    },
    // Callback GAGAL
    (errorMessage) => {
      cardElement.classList.remove('updating');
      // Kembalikan dropdown ke nilai semula (sesuai state lokal lama)
      const oldTask = appState.tasks.find(t => t.WONUM === wonum);
      if (oldTask) {
        selectStatus.value = oldTask.STATUS;
        selectTeknisi.value = oldTask.Teknisi;
      }
      showAlert(`Gagal menyimpan perubahan: ${errorMessage}`, "error");
    }
  );
};

/**
 * ==========================================================================
 * UTILITIES (ALAT BANTU LAINNYA)
 * ==========================================================================
 */

// Menampilkan Alert Toast Notifikasi di Kanan Atas
function showAlert(message, type = "info") {
  const alertDiv = document.createElement('div');
  alertDiv.className = `alert alert-${type}`;
  
  let iconName = "info";
  if (type === "success") iconName = "check-circle";
  if (type === "error") iconName = "alert-triangle";
  
  alertDiv.innerHTML = `
    <i data-lucide="${iconName}"></i>
    <span>${message}</span>
  `;
  
  DOM.alertContainer.appendChild(alertDiv);
  lucide.createIcons();
  
  // Hilang otomatis dalam 4 detik
  setTimeout(() => {
    alertDiv.style.animation = "slideInRight 0.3s reverse forwards";
    setTimeout(() => {
      alertDiv.remove();
    }, 300);
  }, 4000);
}

// Menampilkan/menyembunyikan loader global
function showLoader(show) {
  if (show) {
    DOM.loader.classList.remove('hidden');
  } else {
    DOM.loader.classList.add('hidden');
  }
}

// Membersihkan nomor telepon untuk link WhatsApp agar valid
function formatPhoneNumber(phone) {
  let cleaned = phone.replace(/[^0-9+]/g, '');
  if (cleaned.startsWith('0')) {
    cleaned = '62' + cleaned.substring(1);
  } else if (cleaned.startsWith('+')) {
    cleaned = cleaned.substring(1);
  }
  return cleaned;
}

// Memformat data WO ke format string tab-separated (\t)
function getTaskCopyString(task) {
  const fields = [
    task.WONUM || "",
    task.DATEL || "",
    task.STO || "",
    task.AO || "",
    task.PAKET || "",
    task.ALPRO || "",
    task.INET_NUMBER || "",
    task.CUST_NAME || "",
    task.KONTAK || "",
    task.ALAMAT || ""
  ];
  return fields.join("\t");
}

// Fitur Salin Semua Data yang aktif di Modal
window.copyAllModalTasks = function() {
  if (!appState.currentModalTasks || appState.currentModalTasks.length === 0) {
    showAlert("Tidak ada data WO untuk disalin.", "error");
    return;
  }
  
  const copyText = appState.currentModalTasks
    .map((task, index) => `${index + 1}. ${getTaskCopyString(task)}`)
    .join("\n\n");
    
  navigator.clipboard.writeText(copyText)
    .then(() => {
      showAlert(`Berhasil menyalin ${appState.currentModalTasks.length} data WO ke clipboard!`, "success");
    })
    .catch(err => {
      console.error("Gagal menyalin: ", err);
      showAlert("Gagal menyalin data ke clipboard.", "error");
    });
};

// Fitur Salin Satu Data WO dari kartu Kanban (tanpa nomor urut)
window.copyIndividualTask = function(wonum) {
  const task = appState.tasks.find(t => t.WONUM === wonum);
  if (!task) {
    showAlert("Data WO tidak ditemukan.", "error");
    return;
  }
  
  const copyText = getTaskCopyString(task);
  
  navigator.clipboard.writeText(copyText)
    .then(() => {
      showAlert(`Data WO ${wonum} berhasil disalin ke clipboard!`, "success");
    })
    .catch(err => {
      console.error("Gagal menyalin: ", err);
      showAlert("Gagal menyalin data ke clipboard.", "error");
    });
};
