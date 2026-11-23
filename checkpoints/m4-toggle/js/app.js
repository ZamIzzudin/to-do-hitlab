/* CHECKPOINT M4 - UPDATE (toggle): lengkap dengan tombol selesai/batal. */

// M0: rak tugas kita (data hidup di memori; segar setiap refresh, by design)
let todos = [
  { id: 1, text: "Belajar DOM manipulation", done: true },
  { id: 2, text: "Bikin To-Do List pertama", done: false },
  { id: 3, text: "Latihan addEventListener", done: false }
];

const list = document.getElementById("todo-list");
const form = document.getElementById("todo-form");
const input = document.getElementById("todo-input");
const papanSkor = document.getElementById("jumlah-tugas");

// M1 (Read): gambar ulang seluruh daftar
function renderTodos() {
  list.innerHTML = "";
  if (todos.length === 0) {
    const kosong = document.createElement("li");
    kosong.textContent = "Belum ada tugas. Tulis satu!";
    kosong.classList.add("empty");
    list.append(kosong);
    return;
  }
  for (const todo of todos) {
    const li = document.createElement("li");
    li.textContent = todo.text;
    if (todo.done) {
      li.classList.add("done");
    }

    // tombol Selesai/Batal
    const tombolSelesai = document.createElement("button");
    tombolSelesai.textContent = todo.done ? "Batal" : "Selesai";
    tombolSelesai.classList.add("tombol-selesai");
    tombolSelesai.addEventListener("click", function () {
      toggleTodo(todo.id);
    });
    li.append(tombolSelesai);

    // tombol Hapus
    const tombolHapus = document.createElement("button");
    tombolHapus.textContent = "Hapus";
    tombolHapus.classList.add("tombol-hapus");
    tombolHapus.addEventListener("click", function () {
      hapusTodo(todo.id);
    });
    li.append(tombolHapus);

    list.append(li);
  }
}

// M2 (Create): tambah tugas lewat form
form.addEventListener("submit", function (event) {
  event.preventDefault();
  const teksBaru = input.value.trim();
  if (teksBaru === "") {
    return;
  }

  todos.push({ id: Date.now(), text: teksBaru, done: false });
  input.value = "";
  renderTodos();
});

// M3 (Delete)
function hapusTodo(id) {
  todos = todos.filter(function (t) {
    return t.id !== id;
  });
  renderTodos();
}

// M4 (Update): tandai selesai
function toggleTodo(id) {
  for (const t of todos) {
    if (t.id === id) {
      t.done = !t.done;
    }
  }
  renderTodos();
}

// M1 selesai: nyalakan aplikasi
renderTodos();
