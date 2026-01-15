// Prompt Nama saat Load
document.addEventListener("DOMContentLoaded", () => {
    let name = prompt("Siapa nama Anda?", "");
    document.getElementById("user-name").innerText = name || "";
});

// Logika Form Submit
document.getElementById("messageForm").addEventListener("submit", function (e) {
    e.preventDefault();

    // Ambil data
    const name = document.getElementById("input-name").value;
    const birth = document.getElementById("input-birth").value;
    const gender = document.querySelector('input[name="gender"]:checked').value;
    const msg = document.getElementById("input-msg").value;

    // Tampilkan di Result Box
    document.getElementById("res-time").innerText = new Date().toLocaleString();
    document.getElementById("res-name").innerText = name;
    document.getElementById("res-birth").innerText = birth;
    document.getElementById("res-gender").innerText = gender;
    document.getElementById("res-msg").innerText = msg;

    alert("Pesan Terkirim!");
});