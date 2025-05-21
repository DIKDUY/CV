// Validasi form sederhana
document.querySelector("form").addEventListener("submit", function(e) {
  if (document.getElementById("email").value === "") {
    alert("Email harus diisi!");
    e.preventDefault();
  }
});