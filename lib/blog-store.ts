export interface BlogPost {
  id: string
  title: string
  excerpt: string
  content: string
  coverImage: string
  category: string
  author: {
    name: string
    email: string
  }
  createdAt: Date
  updatedAt: Date
}

// In-memory store for demo (will be replaced with Firestore)
let blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'Panduan Lengkap Daur Ulang Plastik di Rumah',
    excerpt: 'Pelajari cara mendaur ulang berbagai jenis plastik dan mengurangi sampah plastik di rumah Anda.',
    content: `
# Panduan Lengkap Daur Ulang Plastik di Rumah

Plastik adalah salah satu material paling umum yang kita gunakan sehari-hari, namun sayangnya juga menjadi salah satu penyumbang limbah terbesar. Dengan memahami cara mendaur ulang plastik dengan benar, kita dapat berkontribusi untuk mengurangi dampak lingkungan.

## Jenis-Jenis Plastik

### 1. PET (Polyethylene Terephthalate)
- Biasa digunakan untuk: botol minuman, wadah makanan
- Dapat didaur ulang menjadi: serat tekstil, karpet, wadah baru

### 2. HDPE (High-Density Polyethylene)
- Biasa digunakan untuk: botol susu, wadah deterjen
- Dapat didaur ulang menjadi: pipa, mainan, furniture outdoor

### 3. PVC (Polyvinyl Chloride)
- Biasa digunakan untuk: pipa, bingkai jendela
- Sulit didaur ulang, sebaiknya dihindari

## Langkah-Langkah Daur Ulang Plastik

1. **Identifikasi jenis plastik** - Cari simbol segitiga dengan nomor di dalamnya
2. **Bersihkan plastik** - Bilas wadah plastik dari sisa makanan
3. **Keringkan** - Pastikan plastik dalam kondisi kering
4. **Pisahkan berdasarkan jenis** - Kelompokkan plastik sesuai jenisnya
5. **Serahkan ke pengepul atau bank sampah** - Cari lokasi terdekat

## Tips Mengurangi Penggunaan Plastik

- Gunakan tas belanja yang dapat digunakan ulang
- Bawa botol minum sendiri
- Hindari produk dengan kemasan plastik berlebihan
- Pilih produk dengan kemasan yang dapat didaur ulang

Dengan konsisten menerapkan langkah-langkah ini, Anda dapat membantu mengurangi limbah plastik dan berkontribusi untuk lingkungan yang lebih bersih.
    `,
    coverImage: 'https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=800',
    category: 'Tips & Trick',
    author: {
      name: 'Admin Smart Waste',
      email: 'admin@smartwaste.id'
    },
    createdAt: new Date('2026-01-15'),
    updatedAt: new Date('2026-01-15')
  },
  {
    id: '2',
    title: 'Ekonomi Sirkular: Masa Depan Pengelolaan Sumber Daya',
    excerpt: 'Memahami konsep ekonomi sirkular dan bagaimana penerapannya dapat mengubah cara kita memandang limbah.',
    content: `
# Ekonomi Sirkular: Masa Depan Pengelolaan Sumber Daya

Ekonomi sirkular adalah model ekonomi yang bertujuan untuk menghilangkan limbah dan penggunaan sumber daya secara terus-menerus. Berbeda dengan model ekonomi linier tradisional yang mengikuti pola "ambil-buat-buang", ekonomi sirkular menekankan pada penggunaan kembali, perbaikan, dan daur ulang material.

## Prinsip Dasar Ekonomi Sirkular

### 1. Desain Tanpa Limbah
Produk dirancang sejak awal untuk dapat digunakan kembali, diperbaiki, atau didaur ulang di akhir masa pakainya.

### 2. Menjaga Material dalam Siklus
Material terus digunakan selama mungkin melalui berbagai strategi seperti penggunaan ulang, perbaikan, remanufaktur, dan daur ulang.

### 3. Regenerasi Sistem Alam
Model ini mendukung proses alami dan mengurangi dampak negatif terhadap lingkungan.

## Manfaat Ekonomi Sirkular

- **Pengurangan limbah** - Mengurangi jumlah sampah yang berakhir di TPA
- **Efisiensi sumber daya** - Memaksimalkan nilai dari material yang ada
- **Peluang ekonomi baru** - Menciptakan bisnis dan pekerjaan di sektor daur ulang
- **Ketahanan rantai pasokan** - Mengurangi ketergantungan pada bahan baku baru

## Contoh Penerapan

1. **Fashion berkelanjutan** - Brand yang menerima pakaian bekas untuk didaur ulang
2. **Program refurbishment elektronik** - Perusahaan yang memperbaiki dan menjual kembali gadget bekas
3. **Sistem deposit botol** - Konsumen mengembalikan botol kosong untuk digunakan kembali

Dengan mengadopsi prinsip ekonomi sirkular, kita dapat menciptakan sistem yang lebih berkelanjutan dan ramah lingkungan.
    `,
    coverImage: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800',
    category: 'Edukasi',
    author: {
      name: 'Admin Smart Waste',
      email: 'admin@smartwaste.id'
    },
    createdAt: new Date('2026-01-10'),
    updatedAt: new Date('2026-01-10')
  },
  {
    id: '3',
    title: 'Bank Sampah: Solusi Pengelolaan Limbah Berbasis Komunitas',
    excerpt: 'Mengenal lebih dekat tentang bank sampah dan bagaimana menjadi bagian dari gerakan ini.',
    content: `
# Bank Sampah: Solusi Pengelolaan Limbah Berbasis Komunitas

Bank sampah adalah fasilitas pengelolaan sampah yang dikelola oleh masyarakat dengan sistem tabungan. Nasabah membawa sampah yang sudah dipilah, kemudian ditimbang dan dicatat dalam buku tabungan.

## Cara Kerja Bank Sampah

1. **Pendaftaran** - Masyarakat mendaftar sebagai nasabah bank sampah
2. **Pemilahan** - Nasabah memilah sampah di rumah sesuai jenisnya
3. **Penyetoran** - Sampah dibawa ke bank sampah secara berkala
4. **Penimbangan** - Sampah ditimbang dan dicatat nilainya
5. **Tabungan** - Nilai sampah dikreditkan ke rekening nasabah

## Jenis Sampah yang Diterima

- **Plastik** - Botol, kemasan, kantong plastik
- **Kertas** - Koran, kardus, majalah, buku bekas
- **Logam** - Kaleng, aluminium, besi
- **Kaca** - Botol kaca, gelas pecah

## Manfaat Bank Sampah

### Bagi Lingkungan
- Mengurangi volume sampah ke TPA
- Meningkatkan tingkat daur ulang
- Mencegah pencemaran lingkungan

### Bagi Masyarakat
- Mengubah sampah menjadi uang
- Meningkatkan kesadaran lingkungan
- Membangun kebersamaan komunitas

## Cara Memulai Bank Sampah

1. Bentuk kelompok pengelola
2. Siapkan tempat dan peralatan
3. Sosialisasi ke masyarakat
4. Jalin kerjasama dengan pengepul
5. Mulai operasional

Bergabunglah dengan bank sampah terdekat atau inisiasi pembentukan bank sampah di lingkungan Anda!
    `,
    coverImage: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=800',
    category: 'Lingkungan',
    author: {
      name: 'Admin Smart Waste',
      email: 'admin@smartwaste.id'
    },
    createdAt: new Date('2026-01-05'),
    updatedAt: new Date('2026-01-05')
  },
  {
  id: '4',
  title: 'Cara Membuat Kompos dari Sampah Organik di Rumah',
  excerpt: 'Ubah sampah dapur menjadi kompos yang bermanfaat untuk tanaman dengan langkah mudah.',
  content: `
# Cara Membuat Kompos dari Sampah Organik di Rumah

Sampah organik seperti sisa makanan dan daun kering dapat diolah menjadi kompos yang bermanfaat untuk tanaman.

## Bahan yang Dibutuhkan
- Sisa sayuran & buah
- Daun kering
- Tanah
- Air

## Langkah-Langkah
1. Siapkan wadah atau lubang tanah
2. Masukkan sampah organik
3. Tambahkan tanah secukupnya
4. Siram sedikit air
5. Aduk setiap beberapa hari

## Tips
- Hindari daging & minyak
- Jaga kelembaban
- Pastikan ada sirkulasi udara

Dalam 3-4 minggu, kompos sudah bisa digunakan.
  `,
coverImage: 'https://images.unsplash.com/photo-1516711345667-ebafb3ebea12?q=80&w=1172&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  category: 'Tips & Trick',
  author: {
    name: 'Admin Smart Waste',
    email: 'admin@smartwaste.id'
  },
  createdAt: new Date('2026-01-20'),
  updatedAt: new Date('2026-01-20')
},
{
  id: '5',
  title: 'Bahaya Sampah Plastik bagi Lingkungan dan Kesehatan',
  excerpt: 'Ketahui dampak buruk sampah plastik terhadap alam dan kesehatan manusia.',
  content: `
# Bahaya Sampah Plastik bagi Lingkungan dan Kesehatan

Plastik membutuhkan ratusan tahun untuk terurai dan dapat mencemari lingkungan.

## Dampak bagi Lingkungan
- Mencemari laut dan tanah
- Membahayakan hewan
- Menyumbat saluran air

## Dampak bagi Kesehatan
- Mikroplastik masuk ke tubuh manusia
- Mengganggu sistem hormon
- Berpotensi menyebabkan penyakit

## Cara Mengurangi
- Kurangi penggunaan plastik sekali pakai
- Gunakan produk reusable
- Daur ulang dengan benar

Kesadaran kecil bisa berdampak besar bagi bumi kita.
  `,
coverImage: 'https://images.unsplash.com/photo-1618477461853-cf6ed80faba5?w=800',
  category: 'Edukasi',
  author: {
    name: 'Admin Smart Waste',
    email: 'admin@smartwaste.id'
  },
  createdAt: new Date('2026-01-18'),
  updatedAt: new Date('2026-01-18')
},
{
  id: '6',
  title: '5 Ide Kreatif Kerajinan dari Barang Bekas',
  excerpt: 'Inspirasi membuat kerajinan unik dari barang bekas yang mudah dan bernilai guna.',
  content: `
# 5 Ide Kreatif Kerajinan dari Barang Bekas

Barang bekas bisa diubah menjadi sesuatu yang bernilai dan estetik.

## Ide Kerajinan
1. Pot tanaman dari botol plastik
2. Tempat pensil dari kaleng
3. Lampu hias dari sendok plastik
4. Rak dari kardus bekas
5. Tas dari bungkus kopi

## Manfaat
- Mengurangi sampah
- Menghemat biaya
- Melatih kreativitas

Mulai dari hal kecil, kamu bisa membuat perubahan besar!
  `,
  coverImage: 'https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?w=800',
  category: 'Kreasi',
  author: {
    name: 'Admin Smart Waste',
    email: 'admin@smartwaste.id'
  },
  createdAt: new Date('2026-01-17'),
  updatedAt: new Date('2026-01-17')
},
{
  id: '7',
  title: 'Kreasi Lampu Hias dari Botol Plastik Bekas',
  excerpt: 'Transformasi botol plastik menjadi lampu hias yang cantik dan fungsional untuk dekorasi rumah.',
  content: `
# Kreasi Lampu Hias dari Botol Plastik Bekas

Botol plastik bekas bisa diubah menjadi lampu hias yang indah dan berguna. Proyek ini tidak hanya mengurangi sampah plastik, tapi juga menciptakan dekorasi rumah yang unik.

## Bahan yang Dibutuhkan
- Botol plastik bekas (1 liter atau 1.5 liter)
- Kabel lampu dan bohlam LED
- Kertas hias atau kain untuk wrapping
- Lem tembak atau double tape
- Gunting dan cutter
- Bor kecil untuk membuat lubang

## Langkah Pembuatan

### 1. Persiapan Botol
- Bersihkan botol plastik hingga benar-benar kering
- Potong bagian atas botol sesuai keinginan (bentuk yang artistic)
- Haluskan tepi potongan dengan kertas pasir

### 2. Dekorasi Botol
- Lapisi botol dengan kertas hias atau kain
- Gunakan teknik decoupage untuk efek yang lebih menarik
- Tambahkan elemen dekoratif seperti manik-manik atau renda

### 3. Instalasi Lampu
- Buat lubang kecil di bagian bawah botol untuk kabel
- Pasang soket lampu dan kabel dengan aman
- Pastikan semua koneksi listrik terlindungi

### 4. Finishing
- Uji lampu untuk memastikan berfungsi dengan baik
- Tempatkan di area yang aman dari air

## Variasi Kreasi
- Lampu gantung dari beberapa botol
- Lampu meja dengan efek cahaya tembus
- Lampu taman dengan botol transparan

Kreasi ini tidak hanya ramah lingkungan, tapi juga menjadi statement fashion untuk rumah Anda!
  `,
  coverImage: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=800',
  category: 'Kreasi',
  author: {
    name: 'Maya Sari',
    email: 'maya.sari@email.com'
  },
  createdAt: new Date('2026-01-25'),
  updatedAt: new Date('2026-01-25')
},
{
  id: '8',
  title: 'Tips Efektif Mengelola Sampah Elektronik di Rumah',
  excerpt: 'Panduan praktis untuk menangani dan mendaur ulang barang elektronik bekas dengan aman.',
  content: `
# Tips Efektif Mengelola Sampah Elektronik di Rumah

Sampah elektronik mengandung bahan berbahaya yang perlu penanganan khusus. Dengan mengelola sampah elektronik dengan benar, kita melindungi lingkungan dan kesehatan keluarga.

## Bahaya Sampah Elektronik

Sampah elektronik mengandung:
- **Logam berat** seperti timbal, merkuri, kadmium
- **Bahan kimia berbahaya** yang dapat mencemari tanah dan air
- **Komponen yang sulit terurai** dalam jangka panjang

## Tips Pengelolaan

### 1. Jangan Buang Sembarangan
- Jangan masukkan sampah elektronik ke tempat sampah biasa
- Pisahkan dari sampah organik dan anorganik lainnya

### 2. Simpan dengan Aman
- Simpan di tempat yang kering dan aman
- Jauhkan dari jangkauan anak-anak
- Hindari kontak langsung dengan komponen elektronik

### 3. Manfaatkan Layanan Daur Ulang
- Cari drop point elektronik terdekat
- Manfaatkan program take-back dari produsen
- Gunakan layanan kurir elektronik khusus

### 4. Perpanjang Usia Barang
- Lakukan maintenance rutin
- Upgrade komponen daripada membeli baru
- Donasikan barang yang masih berfungsi

## Program Daur Ulang Elektronik

Beberapa program yang bisa dimanfaatkan:
- **e-Waste Collection Center** di kota besar
- **Program take-back** dari brand elektronik
- **Bank sampah elektronik** komunitas

Dengan mengelola sampah elektronik dengan baik, kita berkontribusi pada lingkungan yang lebih sehat.
  `,
  coverImage: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
  category: 'Tips & Trick',
  author: {
    name: 'Ahmad Rahman',
    email: 'ahmad.rahman@email.com'
  },
  createdAt: new Date('2026-01-22'),
  updatedAt: new Date('2026-01-22')
},
{
  id: '9',
  title: 'Pot Bunga dari Ban Bekas: Kreasi untuk Taman Minimalis',
  excerpt: 'Mengubah ban bekas menjadi pot bunga yang stylish dan praktis untuk mempercantik taman rumah.',
  content: `
# Pot Bunga dari Ban Bekas: Kreasi untuk Taman Minimalis

Ban bekas mobil atau motor bisa diubah menjadi pot bunga yang unik dan tahan lama. Kreasi ini cocok untuk taman minimalis dan memberikan sentuhan industrial pada desain taman Anda.

## Keunggulan Ban sebagai Pot Bunga

### 1. Tahan Lama
- Material karet yang kuat dan tahan cuaca
- Tidak mudah rusak oleh air dan sinar matahari
- Umur pakai yang panjang

### 2. Ramah Lingkungan
- Mengurangi sampah ban yang sulit terurai
- Memberikan nilai guna baru pada barang bekas
- Mengurangi kebutuhan pot bunga baru

### 3. Desain Unik
- Bentuk melingkar yang berbeda dari pot biasa
- Dapat di-stack untuk efek vertikal
- Mudah dikustomisasi

## Cara Membuat Pot Bunga dari Ban

### Bahan yang Dibutuhkan
- Ban bekas (ukuran sesuai keinginan)
- Cat semprot warna-warni
- Tanah pot
- Tanaman hias
- Alat: cutter, bor, kuas

### Langkah Pembuatan

1. **Persiapan Ban**
   - Bersihkan ban dari kotoran dan oli
   - Potong ban menjadi tinggi yang diinginkan
   - Buat lubang drainase di bagian bawah

2. **Dekorasi**
   - Lapisi ban dengan cat dasar
   - Tambahkan motif atau pola sesuai selera
   - Biarkan kering sempurna

3. **Pengisian**
   - Masukkan tanah pot ke dalam ban
   - Tanam bunga atau tanaman hias
   - Siram air secukupnya

## Ide Kreatif Lanjutan

- **Pot Bertingkat**: Stack beberapa ban untuk efek vertikal
- **Pot Gantung**: Gantung ban di dinding atau langit-langit
- **Pot dengan Tema**: Buat tema warna atau motif tertentu

Kreasi ini tidak hanya indah dipandang, tapi juga bermanfaat untuk mengurangi sampah ban di lingkungan!
  `,
  coverImage: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800',
  category: 'Kreasi',
  author: {
    name: 'Siti Nurhaliza',
    email: 'siti.nurhaliza@email.com'
  },
  createdAt: new Date('2026-01-20'),
  updatedAt: new Date('2026-01-20')
},
{
  id: '10',
  title: 'Dampak Mikroplastik terhadap Ekosistem Laut',
  excerpt: 'Pelajari bagaimana mikroplastik mempengaruhi kehidupan laut dan apa yang bisa kita lakukan untuk mencegahnya.',
  content: `
# Dampak Mikroplastik terhadap Ekosistem Laut

Mikroplastik telah menjadi ancaman serius bagi ekosistem laut di seluruh dunia. Partikel plastik berukuran mikro ini masuk ke rantai makanan dan mengancam kehidupan biota laut.

## Apa itu Mikroplastik?

Mikroplastik adalah partikel plastik berukuran kurang dari 5mm yang berasal dari:
- **Degradasi plastik besar** menjadi partikel kecil
- **Produk mikroplastik** seperti scrub wajah, deterjen
- **Serat sintetis** dari pakaian yang terlepas saat dicuci

## Dampak terhadap Biota Laut

### 1. Pencemaran Makanan
- Mikroplastik dikonsumsi oleh plankton dan ikan kecil
- Terakumulasi dalam rantai makanan
- Mengurangi nutrisi yang diperoleh organisme

### 2. Gangguan Sistem Pencernaan
- Menyebabkan penyumbatan saluran pencernaan
- Mengurangi nafsu makan dan pertumbuhan
- Meningkatkan risiko kematian

### 3. Transport Bahan Berbahaya
- Membawa polutan dan logam berat
- Meningkatkan toksisitas dalam tubuh organisme
- Mengganggu sistem reproduksi

## Dampak Jangka Panjang

### Ekosistem Laut
- Penurunan populasi spesies laut
- Perubahan struktur komunitas biota
- Gangguan keseimbangan ekosistem

### Manusia
- Mikroplastik masuk ke rantai makanan manusia
- Potensi risiko kesehatan jangka panjang
- Pengaruh terhadap sistem kekebalan tubuh

## Solusi Pencegahan

### 1. Kurangi Penggunaan Plastik
- Gunakan produk reusable
- Pilih produk tanpa mikroplastik
- Kurangi penggunaan kemasan plastik sekali pakai

### 2. Pengelolaan Limbah
- Daur ulang plastik dengan benar
- Gunakan filter pada mesin cuci
- Kelola sampah plastik secara bertanggung jawab

### 3. Edukasi dan Kesadaran
- Kampanye anti plastik
- Edukasi masyarakat tentang dampak mikroplastik
- Dukung regulasi anti plastik

## Aksi Nyata

Setiap individu dapat berkontribusi:
- Kurangi penggunaan sedotan plastik
- Gunakan tas belanja kain
- Partisipasi dalam program bersih pantai
- Dukung bisnis ramah lingkungan

Dengan aksi bersama, kita dapat mengurangi dampak mikroplastik terhadap ekosistem laut.
  `,
  coverImage: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800',
  category: 'Lingkungan',
  author: {
    name: 'Dr. Budi Santoso',
    email: 'budi.santoso@email.com'
  },
  createdAt: new Date('2026-01-18'),
  updatedAt: new Date('2026-01-18')
},
{
  id: '11',
  title: 'Tutorial Membuat Tas dari Bungkus Kopi Bekas',
  excerpt: 'Panduan lengkap membuat tas fashion dari bungkus kopi yang stylish dan tahan lama.',
  content: `
# Tutorial Membuat Tas dari Bungkus Kopi Bekas

Bungkus kopi bekas bisa diubah menjadi tas yang cantik dan unik. Proyek crafting ini menggabungkan kreativitas dengan upaya daur ulang yang bermanfaat.

## Bahan yang Dibutuhkan

### Bahan Utama
- Bungkus kopi bekas (10-15 lembar)
- Benang dan jarum atau mesin jahit
- Kancing atau resleting untuk penutup
- Tali tas (bisa dari kain bekas)

### Alat yang Diperlukan
- Gunting crafting
- Penggaris
- Lem tembak
- Penanda
- Pisau cutter

## Langkah Pembuatan

### 1. Persiapan Bahan
- Kumpulkan bungkus kopi dengan ukuran seragam
- Bersihkan dan ratakan bungkus kopi
- Potong sesuai pola yang diinginkan

### 2. Pola Dasar Tas
- Buat pola tas tote dengan ukuran 30x35cm
- Tambahkan 2cm seam allowance di setiap sisi
- Buat pola untuk bagian bawah tas

### 3. Perakitan Bagian Utama
- Jahit sisi-sisi bungkus kopi menjadi panel
- Gabungkan panel menjadi bentuk tas
- Jahit bagian bawah tas

### 4. Tambahan Fitur
- Pasang tali tas yang kuat
- Tambahkan kantong dalam dari kain bekas
- Pasang kancing atau resleting

### 5. Finishing
- Ratakan jahitan dan potong benang longgar
- Tambahkan hiasan jika diinginkan
- Uji kekuatan tas

## Tips Sukses

### Pemilihan Bahan
- Pilih bungkus kopi yang masih bagus kondisinya
- Gunakan warna yang kontras untuk efek menarik
- Kombinasikan dengan bahan lain untuk variasi

### Teknik Jahit
- Gunakan jahitan kecil untuk kekuatan maksimal
- Perkuat sudut-sudut tas
- Gunakan lem tembak untuk bagian yang sulit dijahit

### Perawatan Tas
- Jaga agar tidak terkena air langsung
- Bersihkan dengan kain lembab
- Simpan di tempat kering

## Variasi Desain

- **Tas Mini**: Untuk tas tangan kecil
- **Tas dengan Motif**: Tambahkan pola atau gambar
- **Tas Multifungsi**: Dengan banyak kantong

Kreasi ini tidak hanya menghasilkan tas yang stylish, tapi juga mengurangi sampah bungkus kopi di lingkungan!
  `,
  coverImage: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800',
  category: 'Kreasi',
  author: {
    name: 'Rina Wijaya',
    email: 'rina.wijaya@email.com'
  },
  createdAt: new Date('2026-01-15'),
  updatedAt: new Date('2026-01-15')
},
{
  id: '12',
  title: 'Panduan Lengkap Daur Ulang Kertas dan Kardus',
  excerpt: 'Pelajari cara mendaur ulang kertas dan kardus dengan benar untuk mengurangi deforestasi.',
  content: `
# Panduan Lengkap Daur Ulang Kertas dan Kardus

Kertas dan kardus merupakan bahan yang paling mudah didaur ulang. Dengan mendaur ulang kertas, kita dapat mengurangi penebangan pohon dan menghemat energi.

## Jenis Kertas yang Bisa Didaur Ulang

### 1. Kertas Kantor
- Kertas HVS, fotocopy, printer
- Nota, memo, surat
- Majalah dan katalog

### 2. Kertas Kemasan
- Kardus makanan dan minuman
- Kotak kemasan produk
- Bungkus kado

### 3. Kertas Lainnya
- Koran dan majalah bekas
- Buku yang sudah tidak terpakai
- Tissue dan tisu

## Persiapan Sebelum Daur Ulang

### 1. Pemisahan
- Pisahkan kertas putih dari kertas berwarna
- Keluarkan staples, klip, dan bahan non-kertas
- Pisahkan kardus dari kertas tipis

### 2. Pembersihan
- Buang sisa makanan atau minuman
- Keringkan kertas yang basah
- Ratakan kertas yang kusut

### 3. Pemotongan (Opsional)
- Potong kertas menjadi ukuran kecil
- Untuk kardus, lipat agar mudah disimpan

## Proses Daur Ulang Kertas

### 1. Pengumpulan
- Kumpulkan kertas dalam wadah terpisah
- Simpan di tempat kering
- Jangan campur dengan sampah basah

### 2. Pengolahan Industri
- Kertas dicacah menjadi pulp
- Diproses dengan bahan kimia
- Dibentuk menjadi kertas baru

### 3. Produk Hasil Daur Ulang
- Kertas toilet
- Tissue dan tisu
- Kardus kemasan
- Kertas koran

## Tips Efektif Daur Ulang Kertas

### Di Rumah
- Gunakan kedua sisi kertas sebelum dibuang
- Pilih produk dengan sertifikat FSC
- Kurangi penggunaan kertas cetak

### Di Kantor
- Implementasikan sistem 3R (Reduce, Reuse, Recycle)
- Gunakan kertas daur ulang untuk printing
- Digitalisasi dokumen

### Edukasi
- Ajarkan anak-anak pentingnya daur ulang kertas
- Bagikan informasi ke komunitas
- Dukung kampanye anti deforestasi

## Dampak Positif

### Lingkungan
- Mengurangi penebangan pohon
- Menghemat energi produksi
- Mengurangi emisi gas rumah kaca

### Ekonomi
- Menghemat biaya produksi kertas baru
- Membuka lapangan pekerjaan
- Mengurangi biaya pengelolaan sampah

Dengan mendaur ulang kertas secara konsisten, kita berkontribusi pada pelestarian hutan dan lingkungan yang lebih baik.
  `,
  coverImage: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=800',
  category: 'Tips & Trick',
  author: {
    name: 'Eko Prasetyo',
    email: 'eko.prasetyo@email.com'
  },
  createdAt: new Date('2026-01-12'),
  updatedAt: new Date('2026-01-12')
},
{
  id: '13',
  title: 'Pentingnya Pendidikan Lingkungan untuk Generasi Muda',
  excerpt: 'Mengapa pendidikan lingkungan harus menjadi prioritas dalam kurikulum sekolah dan rumah.',
  content: `
# Pentingnya Pendidikan Lingkungan untuk Generasi Muda

Pendidikan lingkungan merupakan investasi jangka panjang untuk masa depan bumi. Dengan mendidik generasi muda tentang pentingnya pelestarian lingkungan, kita menciptakan masyarakat yang lebih sadar dan bertanggung jawab.

## Mengapa Pendidikan Lingkungan Penting?

### 1. Kesadaran Global
- Memahami isu-isu lingkungan global
- Menyadari dampak aktivitas manusia
- Membangun empati terhadap lingkungan

### 2. Pembentukan Karakter
- Membentuk sikap peduli lingkungan
- Mengembangkan tanggung jawab sosial
- Melatih kedisiplinan dalam menjaga kebersihan

### 3. Keterampilan Hidup
- Belajar keterampilan daur ulang
- Memahami konservasi energi
- Menguasai teknik hidup berkelanjutan

## Strategi Pendidikan Lingkungan

### Di Sekolah
- **Kurikulum Terintegrasi**: Masukkan materi lingkungan di semua mata pelajaran
- **Kegiatan Praktis**: Project daur ulang, bersih lingkungan
- **Kunjungan Lapangan**: Study ke tempat pengolahan sampah, hutan, sungai

### Di Rumah
- **Contoh Nyata**: Orang tua sebagai role model
- **Kegiatan Keluarga**: Bersih lingkungan bersama, composting
- **Diskusi Terbuka**: Bahas isu lingkungan saat makan malam

### Di Komunitas
- **Program Sosialisasi**: Workshop, seminar lingkungan
- **Kompetisi Ramah Lingkungan**: Lomba daur ulang, poster
- **Kerja Sama**: Kolaborasi sekolah, pemerintah, masyarakat

## Tantangan Pendidikan Lingkungan

### Kurangnya Kesadaran
- Banyak orang tua belum memahami pentingnya
- Kurikulum sekolah masih kurang fokus
- Media sosial lebih menarik perhatian anak

### Keterbatasan Sumber Daya
- Kurangnya tenaga pendidik terlatih
- Keterbatasan alat dan bahan ajar
- Minim anggaran untuk program lingkungan

### Perubahan Sosial Budaya
- Konsumsi berlebihan masih menjadi norma
- Budaya buang sampah sembarangan
- Kurangnya regulasi yang ketat

## Solusi dan Rekomendasi

### 1. Penguatan Kurikulum
- Wajibkan mata pelajaran lingkungan di semua jenjang
- Latih guru dengan metode pengajaran yang menarik
- Integrasikan teknologi digital dalam pembelajaran

### 2. Kemitraan Strategis
- Kerja sama dengan NGO lingkungan
- Kolaborasi dengan dunia usaha
- Libatkan influencer dan artis

### 3. Kampanye Berkelanjutan
- Gerakan #SaveEarth di media sosial
- Program sekolah adiwiyata
- Kompetisi lingkungan antar sekolah

## Dampak Jangka Panjang

### Generasi Sadar Lingkungan
- Masyarakat yang peduli dengan bumi
- Inovasi teknologi ramah lingkungan
- Kebijakan yang pro lingkungan

### Pembangunan Berkelanjutan
- Ekonomi hijau yang berkembang
- Pengurangan emisi karbon
- Pelestarian biodiversitas

### Masyarakat Sehat
- Lingkungan yang bersih dan sehat
- Pengurangan penyakit dari polusi
- Kualitas hidup yang lebih baik

Pendidikan lingkungan bukan hanya tentang mengajar anak-anak tentang lingkungan, tapi juga tentang membentuk manusia yang bertanggung jawab terhadap bumi tempat kita hidup.
  `,
  coverImage: 'https://images.unsplash.com/photo-1544717297-fa95b6ee9643?w=800',
  category: 'Edukasi',
  author: {
    name: 'Prof. Dr. Ani Suryani',
    email: 'ani.suryani@email.com'
  },
  createdAt: new Date('2026-01-10'),
  updatedAt: new Date('2026-01-10')
},
{
  id: '14',
  title: 'Kreasi Hiasan Dinding dari Kardus Bekas',
  excerpt: 'Tutorial membuat hiasan dinding yang artistik dari kardus bekas untuk dekorasi rumah yang unik.',
  content: `
# Kreasi Hiasan Dinding dari Kardus Bekas

Kardus bekas bisa diubah menjadi hiasan dinding yang indah dan personal. Proyek ini menggabungkan kreativitas dengan upaya daur ulang yang memberikan nilai estetika pada rumah Anda.

## Inspirasi Desain

### 1. Motif Geometris
- Pola segitiga, persegi, lingkaran
- Efek 3D dengan layering kardus
- Kombinasi warna dan tekstur

### 2. Tema Alam
- Daun, bunga, pohon dari kardus
- Hewan dan burung tropis
- Lanskap miniatur

### 3. Abstrak Modern
- Pola acak yang artistik
- Kombinasi bentuk tak beraturan
- Efek ombre dengan kardus berbeda ketebalan

## Bahan dan Alat

### Bahan Utama
- Kardus bekas berbagai ukuran
- Cat akrilik atau cat tembok
- Lem tembak dan lem kayu
- Kertas hias atau wallpaper bekas

### Alat yang Dibutuhkan
- Gunting crafting dan cutter
- Penggaris dan pensil
- Kuas cat berbagai ukuran
- Pisau utility untuk potong presisi

## Langkah Pembuatan

### 1. Perencanaan Desain
- Tentukan ukuran hiasan sesuai dinding
- Buat sketsa desain di kertas
- Pilih tema dan warna yang diinginkan

### 2. Persiapan Kardus
- Potong kardus sesuai pola desain
- Ratakan permukaan kardus
- Buat variasi ketebalan untuk efek 3D

### 3. Dekorasi dan Pewarnaan
- Lapisi kardus dengan cat dasar
- Tambahkan motif dan pola
- Gunakan teknik decoupage untuk efek menarik

### 4. Perakitan
- Gabungkan bagian-bagian kardus
- Gunakan lem yang kuat untuk daya tahan
- Tambahkan elemen hiasan tambahan

### 5. Pemasangan
- Gunakan perekat dinding yang aman
- Pastikan posisi simetris dan seimbang
- Uji kekuatan pemasangan

## Teknik Advanced

### Layering Effect
- Buat kedalaman dengan kardus bertingkat
- Gunakan bayangan untuk efek dimensi
- Tambahkan pencahayaan LED

### Mixed Media
- Kombinasikan dengan kain, kertas, kayu
- Tambahkan elemen logam atau kaca
- Gunakan teknik collage

### Custom Framing
- Buat frame dari kardus yang sama
- Tambahkan efek patina pada frame
- Gunakan kaca akrilik untuk proteksi

## Tips Sukses

### Pemilihan Kardus
- Pilih kardus yang tebal dan kuat
- Hindari kardus yang terlalu lembek
- Gunakan kardus dengan permukaan yang halus

### Teknik Pewarnaan
- Gunakan cat yang tahan lama
- Lakukan priming sebelum cat utama
- Biarkan kering sempurna antar lapisan

### Perawatan Hiasan
- Jaga dari kelembaban berlebih
- Bersihkan dengan kain kering
- Hindari sinar matahari langsung

## Inspirasi Penerapan

- **Ruang Tamu**: Hiasan geometris modern
- **Kamar Anak**: Motif hewan dan kartun
- **Dapur**: Tema makanan dan bumbu
- **Kamar Tidur**: Desain abstrak calming

Kreasi hiasan dinding dari kardus tidak hanya mengurangi sampah, tapi juga mengekspresikan kreativitas dan kepribadian Anda dalam dekorasi rumah!
  `,
  coverImage: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800',
  category: 'Kreasi',
  author: {
    name: 'Dian Purnama',
    email: 'dian.purnama@email.com'
  },
  createdAt: new Date('2026-01-08'),
  updatedAt: new Date('2026-01-08')
},
{
  id: '15',
  title: 'Dampak Urbanisasi terhadap Pengelolaan Sampah',
  excerpt: 'Analisis bagaimana pertumbuhan kota mempengaruhi sistem pengelolaan sampah dan solusinya.',
  content: `
# Dampak Urbanisasi terhadap Pengelolaan Sampah

Urbanisasi yang pesat telah menciptakan tantangan besar dalam pengelolaan sampah. Dengan meningkatnya populasi kota, volume sampah juga meningkat secara signifikan, sehingga memerlukan sistem pengelolaan yang lebih efektif dan berkelanjutan.

## Tren Urbanisasi Global

### 1. Pertumbuhan Populasi Kota
- Lebih dari 50% populasi dunia tinggal di kota
- Prediksi 70% pada tahun 2050
- Konsentrasi ekonomi dan sosial di area urban

### 2. Pola Konsumsi Modern
- Gaya hidup konsumtif
- Penggunaan kemasan sekali pakai
- Budaya fast fashion dan elektronik

### 3. Keterbatasan Ruang
- TPA yang semakin penuh
- Sulitnya menemukan lahan baru
- Konflik dengan pemukiman warga

## Dampak terhadap Sistem Sampah

### 1. Volume Sampah yang Meningkat
- Produksi sampah per kapita lebih tinggi di kota
- Komposisi sampah yang kompleks
- Tantangan logistik pengangkutan

### 2. Masalah Infrastruktur
- Sistem pengangkutan yang overload
- TPA yang tidak memadai
- Kurangnya fasilitas pemilahan

### 3. Isu Lingkungan
- Pencemaran udara dari pembakaran sampah
- Pencemaran tanah dan air
- Emisi gas metana dari TPA

### 4. Masalah Sosial
- Kemiskinan di kalangan pemulung
- Kesehatan masyarakat terancam
- Konflik sosial terkait sampah

## Solusi Pengelolaan Sampah Urban

### 1. Sistem 3R+ (Reduce, Reuse, Recycle, Recover)
- **Reduce**: Mengurangi produksi sampah
- **Reuse**: Menggunakan kembali barang
- **Recycle**: Daur ulang material
- **Recover**: Mengambil energi dari sampah

### 2. Teknologi Modern
- Waste-to-Energy (WTE) plant
- Sistem smart waste management
- Aplikasi tracking sampah

### 3. Partisipasi Masyarakat
- Program bank sampah
- Edukasi masyarakat
- Insentif untuk daur ulang

### 4. Kebijakan Pemerintah
- Regulasi zero waste
- Pajak sampah progresif
- Investasi infrastruktur

## Studi Kasus Kota Sukses

### 1. San Francisco, USA
- Target zero waste 2020
- Program composting wajib
- Sistem pembayaran berdasarkan volume sampah

### 2. Kamikatsu, Jepang
- Target zero waste tercapai
- Sistem pemilahan 45 kategori
- Partisipasi masyarakat 80%

### 3. Curitiba, Brazil
- Sistem pengangkutan terintegrasi
- Program pertukaran sampah dengan makanan
- Edukasi sejak dini

## Rekomendasi untuk Kota Indonesia

### 1. Penguatan Regulasi
- Perda pengelolaan sampah daerah
- Sanksi tegas untuk pelanggar
- Insentif untuk program ramah lingkungan

### 2. Infrastruktur Modern
- TPS 3R di setiap kelurahan
- Armada pengangkut yang memadai
- TPA sanitary landfill

### 3. Edukasi dan Sosialisasi
- Program sekolah adiwiyata
- Kampanye media sosial
- Pelatihan pemulung profesional

### 4. Kolaborasi Stakeholders
- Pemerintah, swasta, masyarakat
- NGO dan akademisi
- Komunitas lingkungan

## Tantangan dan Peluang

### Tantangan
- Anggaran terbatas
- Kurangnya kesadaran masyarakat
- Infrastruktur yang belum memadai

### Peluang
- Teknologi digital yang berkembang
- Semangat generasi muda
- Dukungan internasional

Dengan pendekatan yang tepat dan komitmen bersama, urbanisasi tidak harus berarti bencana sampah. Sebaliknya, bisa menjadi momentum untuk menciptakan kota yang lebih bersih, hijau, dan berkelanjutan.
  `,
  coverImage: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=800',
  category: 'Lingkungan',
  author: {
    name: 'Ir. Hendra Gunawan',
    email: 'hendra.gunawan@email.com'
  },
  createdAt: new Date('2026-01-05'),
  updatedAt: new Date('2026-01-05')
}

]

export function getAllPosts(): BlogPost[] {
  return blogPosts.sort((a, b) => 
    new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  )
}

export function getPostById(id: string): BlogPost | undefined {
  return blogPosts.find(post => post.id === id)
}

export function getPostsByCategory(category: string): BlogPost[] {
  return blogPosts.filter(post => post.category === category)
}

export function createPost(post: Omit<BlogPost, 'id' | 'createdAt' | 'updatedAt'>): BlogPost {
  const newPost: BlogPost = {
    ...post,
    id: `post_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
    createdAt: new Date(),
    updatedAt: new Date()
  }
  blogPosts = [newPost, ...blogPosts]
  return newPost
}

export function deletePost(id: string): boolean {
  const initialLength = blogPosts.length
  blogPosts = blogPosts.filter(post => post.id !== id)
  return blogPosts.length < initialLength
}

export function getCategories(): string[] {
  const categories = new Set(blogPosts.map(post => post.category))
  return Array.from(categories)
}
