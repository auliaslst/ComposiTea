// === Toggle Login & Register ===
function toggleRegister() {
  document.getElementById("loginForm").classList.toggle("hidden");
  document.getElementById("registerForm").classList.toggle("hidden");
}

// === Simpan User Baru ===
document.getElementById("registerForm").addEventListener("submit", e => {
  e.preventDefault();
  const user = {
    username: document.getElementById("newUsername").value,
    alamat: document.getElementById("alamat").value,
    nohp: document.getElementById("nohp").value,
    password: document.getElementById("newPassword").value
  };
  localStorage.setItem("user", JSON.stringify(user));
  alert("✅ Akun berhasil dibuat, silakan login!");
  toggleRegister();
});

// === Login ===
document.getElementById("loginForm").addEventListener("submit", e => {
  e.preventDefault();
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const user = JSON.parse(localStorage.getItem("user"));

  if (user && user.username === username && user.password === password) {
    window.location.href = "dashboard.html";
  } else {
    alert("❌ Username atau password salah!");
  }
});

// === Fitur Lupa Password (simulasi kirim SMS) ===
function lupaPassword() {
  const user = JSON.parse(localStorage.getItem("user"));
  if (!user) {
    alert("Belum ada akun terdaftar!");
    return;
  }
  alert(`🔑 Link reset password dikirim ke nomor: ${user.nohp}`);
}

// === Dashboard Navigation ===
function showPage(page) {
  document.querySelectorAll(".page").forEach(p => p.classList.add("hidden"));
  document.getElementById(page + "Page").classList.remove("hidden");
}

// === Load Riwayat ===
function loadRiwayat() {
  const riwayatList = document.getElementById("riwayatList");
  if (!riwayatList) return; // supaya tidak error di halaman login
  riwayatList.innerHTML = "";
  const riwayatData = JSON.parse(localStorage.getItem("riwayatTransaksi")) || [];
  riwayatData.forEach(item => {
    const li = document.createElement("li");
    li.textContent = item;
    riwayatList.appendChild(li);
  });
}

// === Simpan Riwayat ===
function saveRiwayat(newItem) {
  const riwayatData = JSON.parse(localStorage.getItem("riwayatTransaksi")) || [];
  riwayatData.unshift(newItem);
  localStorage.setItem("riwayatTransaksi", JSON.stringify(riwayatData));
}

// === Event Kirim Limbah ===
document.addEventListener("DOMContentLoaded", () => {
  if (document.getElementById("kirimBtn")) {
    document.getElementById("kirimBtn").addEventListener("click", () => {
      const limbah = document.getElementById("limbahSelect").value;
      const reward = document.getElementById("rewardSelect").value;
      const lokasi = document.getElementById("lokasiInput").value;

      if (lokasi.trim() === "") {
        alert("⚠️ Lokasi penjemputan harus diisi!");
        return;
      }

      const today = new Date();
      const tgl = today.toLocaleDateString("id-ID", { day: "2-digit", month: "2-digit", year: "numeric" });
      const transaksi = `[${tgl}] ${limbah} → Tukar ${reward} @ ${lokasi}`;

      const riwayatList = document.getElementById("riwayatList");
      const newItem = document.createElement("li");
      newItem.textContent = transaksi;
      riwayatList.prepend(newItem);

      saveRiwayat(transaksi);
      alert("✅ Transaksi berhasil ditambahkan!");
    });

    loadRiwayat();
  }
});