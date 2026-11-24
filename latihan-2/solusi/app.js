// SOLUSI LATIHAN 2: Tombol Sapa
// Referensi untuk instruktur; peserta menulis versinya sendiri.

const tombolSapa = document.getElementById("tombolSapa");
const nama = document.getElementById("nama");
const sapaan = document.getElementById("sapaan");

tombolSapa.addEventListener("click", function () {
  sapaan.textContent = "Halo, " + nama.value + "!";
});

// Bonus: gabungan latihan 1 + event
const tombolWarna = document.getElementById("tombolWarna");
const judul = document.getElementById("judul");

tombolWarna.addEventListener("click", function () {
  judul.style.color = "tomato";
});
