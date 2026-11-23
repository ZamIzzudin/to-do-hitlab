/* CHECKPOINT M2 - CREATE: daftar tampil + tambah tugas lewat form. */

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

// M1 selesai: nyalakan aplikasi
renderTodos();
