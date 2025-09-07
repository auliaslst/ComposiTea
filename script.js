// Toggle Forms
function showRegister() {
  document.getElementById("loginForm").classList.add("hidden");
  document.getElementById("registerForm").classList.remove("hidden");
  document.getElementById("forgotForm").classList.add("hidden");
}
function showLogin() {
  document.getElementById("loginForm").classList.remove("hidden");
  document.getElementById("registerForm").classList.add("hidden");
  document.getElementById("forgotForm").classList.add("hidden");
}
function showForgot() {
  document.getElementById("loginForm").classList.add("hidden");
  document.getElementById("registerForm").classList.add("hidden");
  document.getElementById("forgotForm").classList.remove("hidden");
}

// Login Simulation
document.getElementById("loginForm")?.addEventListener("submit", function(e) {
  e.preventDefault();
  window.location.href = "dashboard.html";
});

// Register Simulation
document.getElementById("registerForm")?.addEventListener("submit", function(e) {
  e.preventDefault();
  alert("Akun berhasil dibuat! Silakan login.");
  showLogin();
});

// Forgot Password Simulation
document.getElementById("forgotForm")?.addEventListener("submit", function(e) {
  e.preventDefault();
  alert("Link reset password telah dikirim via SMS!");
  showLogin();
});

// Dashboard Navigation
function showPage(page) {
  document.querySelectorAll(".page").forEach(p => p.classList.add("hidden"));
  document.getElementById(page + "Page").classList.remove("hidden");
}

// Profile Dropdown
function toggleProfile() {
  document.getElementById("profileMenu").classList.toggle("hidden");
}
