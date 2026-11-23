# To-Do Hitlab

Template To-Do List untuk sesi live coding **DOM Manipulation with JavaScript** (90 menit, peserta pemula total). Vanilla JavaScript murni: tanpa build, tanpa dependensi, tanpa instalasi.

> Data aplikasi hidup di array di memori, tanpa penyimpanan apa pun, dan itu disengaja: fokus sesi adalah DOM manipulation dan CRUD. Menyimpan data adalah materi sesi berikutnya.

## 1. Cara menjalankan

1. Clone atau download repo ini, lalu extrak bila perlu.
2. Buka foldernya di file manager.
3. Klik dua kali `index.html`. Selesai.

Tidak ada `npm`, tidak ada instalasi apa pun. Alternatif: buka lewat VS Code dengan ekstensi Live Server (klik kanan `index.html`, pilih "Open with Live Server"). Karena template ini tidak memakai `fetch`, hasilnya identik dengan membuka file langsung.

## 2. Peta milestone M0-M6

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

## 3. Catatan untuk instruktur

Urutan demo penutup (setelah M5 atau M6):

1. Minta peserta refresh halaman: data kembali ke isi awal. Biarkan mereka kaget sebentar.
2. Buka Console (F12), ketik `todos`, tekan Enter: perlihatkan rak array-nya.
3. Tambah satu tugas lewat form, ketik `todos` lagi: rak bertambah.
4. Tutup dengan teaser sesi berikutnya: menyimpan data (localStorage, file, server) supaya tugas selamat setelah refresh.

Dan ingat: tidak ada localStorage, file JSON, server, atau `fetch` di repo ini. Itu keputusan desain sesi, bukan kelalaian.

## 4. Pemecahan masalah

- **Halaman kosong, tidak ada apa-apa**: pastikan `<script src="js/app.js"></script>` ada di akhir `<body>` dan path-nya benar.
- **Error `Cannot read properties of null`**: elemen tidak ketemu. Cek ejaan ID huruf per huruf, dan ingat aturan pagar: `getElementById` tanpa `#`, `querySelector` pakai `#`.
- **Perubahan tidak muncul**: simpan file, lalu hard refresh (`Ctrl+F5` atau `Cmd+Shift+R`) untuk melewati cache.

## 5. Struktur folder

```
.
├── README.md
├── index.html
├── css/
│   └── style.css
├── js/
│   └── app.js
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

## 6. Kontrak penamaan

ID, kelas, dan nama fungsi berikut terikat dengan materi slide dan naskah live coding. Jangan diganti tanpa koordinasi dengan penyusun materi:

- ID: `todo-form`, `todo-input`, `todo-list`, `jumlah-tugas`
- Kelas: `done`, `empty`, `tombol-selesai`, `tombol-edit`, `tombol-hapus`
- Fungsi: `renderTodos`, `hapusTodo`, `toggleTodo`, `editTodo`, `perbaruiPapanSkor`

---

Template untuk sesi live coding Hitlab. Selamat ngoding.
