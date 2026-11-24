/* ============================================================
   TO-DO LIST - js/app.js
   File latihan live coding: DOM Manipulation with JavaScript.

   Seluruh JavaScript halaman ini kamu tulis sendiri, dari nol,
   mengikuti instruktur. HTML dan CSS sudah disiapkan; fokus
   kita penuh di file ini.

   Kalau tertinggal: buka folder checkpoints/, pilih milestone
   terakhir yang selesai di kelas, buka index.html di dalamnya,
   lalu lanjut menulis dari kondisi itu.

   Pola emas yang dipakai sepanjang sesi:
     1. pegang elemennya (getElementById / querySelector)
     2. pasang event bila perlu (addEventListener)
     3. ubah data di array todos, lalu render ulang (renderTodos)
   ============================================================ */


/* ------------------------------------------------------------
   M0 - FONDASI

   1) Rak tugas: buat array bernama todos (pakai let) berisi:

        { id: 1, text: "Belajar DOM manipulation", done: true }
        { id: 2, text: "Bikin To-Do List pertama", done: false }
        { id: 3, text: "Latihan addEventListener", done: false }

   2) Pegang 4 elemen HTML, simpan masing-masing ke const:
        list      <- elemen ber-ID "todo-list"
        form      <- elemen ber-ID "todo-form"
        input     <- elemen ber-ID "todo-input"
        papanSkor <- elemen ber-ID "jumlah-tugas"

   Pemeriksaan sebelum lanjut: buka Console (F12), ketik list.
   Yang benar muncul: <ul id="todo-list">. Kalau null: cek pagar
   (getElementById tanpa #) dan ejaan ID.
   ------------------------------------------------------------ */


/* ------------------------------------------------------------
   M1 - READ: TAMPILKAN DAFTAR

   Tulis function renderTodos() tanpa parameter:
     1) kosongkan papan: list.innerHTML = ""
     2) kalau todos.length === 0:
        - createElement("li"), isi textContent dengan
          "Belum ada tugas. Tulis satu!"
        - pasang class "empty", append ke list, lalu return
     3) loop for (const todo of todos):
        - createElement("li"), isi textContent = todo.text
        - kalau todo.done, pasang class "done"
        - append li ke list

   Terakhir, DI LUAR function, nyalakan aplikasi: renderTodos()
   ------------------------------------------------------------ */


/* ------------------------------------------------------------
   M2 - CREATE: TAMBAH TUGAS LEWAT FORM

   Pasang listener pada form:
     form.addEventListener("submit", function (event) { ... });

   Isi function:
     1) event.preventDefault()
     2) const teksBaru = input.value.trim()
     3) kalau teksBaru === "": return (kartu kosong ditolak)
     4) todos.push({ id: Date.now(), text: teksBaru, done: false })
     5) kosongkan kolom: input.value = ""
     6) renderTodos()
   ------------------------------------------------------------ */


/* ------------------------------------------------------------
   M3 - DELETE: HAPUS TUGAS

   1) Kembali ke dalam loop renderTodos. Setelah li diisi teks,
      buat tombolnya:
        - createElement("button"), textContent "Hapus"
        - pasang class "tombol-hapus"
        - listener kliknya memanggil hapusTodo(todo.id)
        - append tombol ke li
   2) Tulis function hapusTodo(id):
        todos = todos.filter(function (t) {
          return t.id !== id;
        });
        lalu renderTodos()
   ------------------------------------------------------------ */


/* ------------------------------------------------------------
   M4 - UPDATE: TANDAI SELESAI

   1) Masih di dalam loop renderTodos, buat tombol kedua:
        - textContent pakai ternary:
          todo.done ? "Batal" : "Selesai"
        - pasang class "tombol-selesai"
        - listener kliknya memanggil toggleTodo(todo.id)
   2) Tulis function toggleTodo(id):
        loop semua kartu, kalau t.id === id,
        balik kondisinya: t.done = !t.done
        lalu renderTodos()
   ------------------------------------------------------------ */


/* ------------------------------------------------------------
   M5 - UPDATE: EDIT TEKS TUGAS

   1) Tombol ketiga di loop renderTodos:
        - textContent "Edit", class "tombol-edit"
        - listener kliknya memanggil editTodo(todo.id)
   2) Tulis function editTodo(id):
        - const todo = todos.find(function (t) { return t.id === id; })
        - const teksBaru = prompt("Ubah teks tugas:", todo.text)
        - kalau teksBaru !== null DAN teksBaru.trim() !== "":
          timpa todo.text dengan teksBaru.trim(), lalu renderTodos()
   ------------------------------------------------------------ */


/* ------------------------------------------------------------
   M6 - READ (BONUS): PAPAN SKOR TUGAS

   1) Tulis function perbaruiPapanSkor():
        - mulai dari let jumlahSelesai = 0
        - loop semua kartu, kalau t.done, tambah satu
        - papanSkor.textContent = jumlah total + " tugas, "
          + jumlahSelesai + " selesai"
   2) Panggil perbaruiPapanSkor() dari dalam renderTodos(),
      di dua tempat: di ujung cabang rak kosong (sebelum
      return) dan di baris paling bawah function
   ------------------------------------------------------------ */


/* ------------------------------------------------------------
   SELESAI?

   Uji sendiri di browser: tambah tugas, tandai selesai, edit,
   hapus, sampai daftar kosong lalu tambah lagi. Setelah itu
   refresh halaman dan buka Console (F12), ketik todos: itulah
   rak datamu, hidup di memori. Ke mana tugasmu pergi saat
   refresh? Itu materi sesi berikutnya: menyimpan data.
   ------------------------------------------------------------ */
