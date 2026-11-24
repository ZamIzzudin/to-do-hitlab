# To-Do Hitlab

Template To-Do List untuk sesi live coding **DOM Manipulation with JavaScript** (90 menit, peserta pemula total). Vanilla JavaScript murni: tanpa build, tanpa dependensi, tanpa instalasi.

> Data aplikasi hidup di array di memori, tanpa penyimpanan apa pun, dan itu disengaja: fokus sesi adalah DOM manipulation dan CRUD. Menyimpan data adalah materi sesi berikutnya.

## 1. Cara menjalankan

1. Clone atau download repo ini, lalu extrak bila perlu.
2. Buka foldernya di file manager.
3. Klik dua kali `index.html`. Selesai.

Tidak ada `npm`, tidak ada instalasi apa pun. Alternatif: buka lewat VS Code dengan ekstensi Live Server (klik kanan `index.html`, pilih "Open with Live Server"). Karena template ini tidak memakai `fetch`, hasilnya identik dengan membuka file langsung.

## 2. Arena latihan

Dua arena latihan tersedia di paket ini, dipakai di slide latihan materi:

- **`kotak-percobaan.html`**: arena Latihan 1, jelajah kartu jurus. Satu file berdiri sendiri, tanpa file JavaScript: semua aksi dilakukan lewat Console (F12). Buka filenya, tempel enam baris pegangan (lihat bagian 3a), lalu coba jurus satu per satu dari kartu jurus materi. Refresh selalu mengembalikan semuanya.
- **`latihan-1/`**: arena Latihan 1 versi folder, dengan `js/app.js` kosong berisi komentar. Dipakai kalau peserta ingin menempel pegangan dan jurus lewat file alih-alih Console.
- **`latihan-2/`**: arena Latihan 2, tombol sapa. Tugasnya menautkan event `click` ke perubahan elemen. Starter di `latihan-2/js/app.js`; solusi untuk instruktur di `latihan-2/solusi/app.js`.

### Ritual tiga gerakan

Simpan (Ctrl+S), refresh (F5), lihat hasilnya. Tiga gerakan ini akan kamu ulang ratusan kali hari ini. Nikmati.

### Tiga masalah paling umum

| Gejala | Penyebab paling sering | Obat |
| --- | --- | --- |
| Console sunyi, tidak ada "Halo" | Salah alamat di `src`, atau file belum disimpan | Cek ejaan `js/app.js`, Ctrl+S, refresh |
| Ada pesan merah di Console | Salah ketik kode | Baca baris pertama pesannya dan nomor barisnya; itu alamat kejadian |
| Kode berubah tapi layar tidak | Lupa simpan atau lupa refresh | Ritual tiga gerakan |

## 3. Peta milestone M0-M6

HTML dan CSS sudah jadi. Seluruh JavaScript ditulis peserta sendiri di `js/app.js` mengikuti instruktur, bertahap per milestone:

| Milestone | Yang dikerjakan | CRUD | Checkpoint |
| --- | --- | --- | --- |
| M0 | Array seed + memegang 4 elemen | - | - |
| M1 | `renderTodos()`: tampilkan daftar | Read | `checkpoints/m1-render` |
| M2 | Form submit + tambah tugas | Create | `checkpoints/m2-create` |
| M3 | Tombol hapus + `filter` | Delete | `checkpoints/m3-delete` |
| M4 | Tombol selesai/batal | Update | `checkpoints/m4-toggle` |
| M5 | Edit teks lewat `prompt()` | Update | `checkpoints/m5-edit` |
| M6 | Papan skor jumlah tugas | Read | `checkpoints/m6-score` |

Catatan: **M6 bersifat bonus**, boleh dilewati bila waktu menipis. Aplikasi sudah lengkap sebagai CRUD setelah M5.

Cara pakai checkpoint (untuk peserta yang tertinggal): buka folder checkpoint pada milestone terakhir yang selesai di kelas, lalu buka `index.html` di dalamnya. Tiap folder checkpoint berdiri sendiri (HTML + CSS + JavaScript pada tahap itu) supaya cukup dibuka langsung, tanpa menyalin-menempel. Setelah itu, lanjutkan mengetik di `js/app.js` milikmu dari kondisi tersebut.

## 3a. Arena latihan 1: kotak percobaan

Latihan 1 "Jelajah Kartu Jurus" dipakai di menit 25-29 materi. Arena ada dua bentuk:

- `kotak-percobaan.html` di akar repo: satu file, tanpa JavaScript, murni lewat Console. Ini bentuk yang dipakai di kelas.
- `latihan-1/`: salinan berfolder dengan `js/app.js` kosong (komentar saja). Tempat melanjutkan di rumah.

Langkah main arena:

1. Buka `kotak-percobaan.html` di browser (klik dua kali).
2. F12, tab Console.
3. Tempel enam baris pegangan berikut sekali saja:

```js
const judul = document.getElementById("judul");
const paragraf = document.getElementById("paragraf");
const foto = document.getElementById("foto");
const kolom = document.getElementById("kolom");
const tombol = document.getElementById("tombol");
const daftar = document.getElementById("daftar");
```

4. Coba jurus dari Kartu Jurus materi (Lampiran B): minimal 5 jurus berbeda dari 3 keluarga berbeda. Satu wajib: `classList.toggle`.
5. Refresh mengembalikan semuanya. Bebas berantakan.

## 4. Catatan untuk instruktur

Urutan demo penutup (setelah M5 atau M6):

1. Minta peserta refresh halaman: data kembali ke isi awal. Biarkan mereka kaget sebentar.
2. Buka Console (F12), ketik `todos`, tekan Enter: perlihatkan rak array-nya.
3. Tambah satu tugas lewat form, ketik `todos` lagi: rak bertambah.
4. Tutup dengan teaser sesi berikutnya: menyimpan data (localStorage, file, server) supaya tugas selamat setelah refresh.

Dan ingat: tidak ada localStorage, file JSON, server, atau `fetch` di repo ini. Itu keputusan desain sesi, bukan kelalaian.

## 5. Pemecahan masalah

- **Halaman kosong, tidak ada apa-apa**: pastikan `<script src="js/app.js"></script>` ada di akhir `<body>` dan path-nya benar.
- **Error `Cannot read properties of null`**: elemen tidak ketemu. Cek ejaan ID huruf per huruf, dan ingat aturan pagar: `getElementById` tanpa pagar, `querySelector` pakai `#`.
- **Perubahan tidak muncul**: simpan file, lalu hard refresh (`Ctrl+F5` atau `Cmd+Shift+R`) untuk melewati cache.

## 6. Struktur folder

```
.
├── README.md
├── index.html
├── kotak-percobaan.html   (arena Latihan 1, satu file, tanpa JavaScript)
├── css/
│   └── style.css
├── js/
│   └── app.js             (file live coding: kamu yang mengisi)
├── latihan-1/
│   ├── index.html         (kotak percobaan, salinan latihan-1)
│   └── js/
│       └── app.js         (kosong: aksi lewat Console)
├── latihan-2/
│   ├── index.html         (tombol sapa)
│   ├── css/
│   │   └── style.css
│   ├── js/
│   │   └── app.js         (starter: kamu yang mengisi)
│   └── solusi/
│       └── app.js         (referensi instruktur)
├── checkpoints/
│   ├── m1-render/     (index.html + css/ + js/ versi M1)
│   ├── m2-create/
│   ├── m3-delete/
│   ├── m4-toggle/
│   ├── m5-edit/
│   └── m6-score/
└── reference/
    └── app.js         (solusi lengkap, identik M6, untuk review instruktur)
```

## 7. Kontrak penamaan

ID, kelas, dan nama fungsi berikut terikat dengan materi slide dan naskah live coding. Jangan diganti tanpa koordinasi dengan penyusun materi:

- ID: `todo-form`, `todo-input`, `todo-list`, `jumlah-tugas`
- Kelas: `done`, `empty`, `tombol-selesai`, `tombol-edit`, `tombol-hapus`
- Fungsi: `renderTodos`, `hapusTodo`, `toggleTodo`, `editTodo`, `perbaruiPapanSkor`

---

Template untuk sesi live coding Hitlab. Selamat ngoding.
