function initializeContactForm() {
  const contactForm = document.getElementById("contact-form");

  if (!contactForm) {
    console.error("Contact form not found!");
    return;
  }

  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();
    console.log("Form submitted");

    const formData = new FormData(this);
    const name = formData.get("name");
    const email = formData.get("email");
    const subject = formData.get("subject");
    const message = formData.get("message");

    // Validasi
    if (!name || !email || !subject || !message) {
      showNotification("Mohon isi semua field yang diperlukan", "error");
      return;
    }

    if (!isValidEmail(email)) {
      showNotification("Format email tidak valid", "error");
      return;
    }

    const submitButton = this.querySelector(".submit-button");
    const originalText = submitButton.textContent;
    submitButton.textContent = "Mengirim...";
    submitButton.disabled = true;

    // Simulasi pengiriman (ganti dengan pengiriman email yang sebenarnya nanti)
    setTimeout(() => {
      showNotification("Pesan Anda telah berhasil terkirim!", "success");
      contactForm.reset();
      submitButton.textContent = originalText;
      submitButton.disabled = false;
    }, 2000);
  });
}

function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function showNotification(message, type) {
  console.log("Showing notification:", message, type); // Debug log

  const notif = document.createElement("div");
  notif.className = `notification ${type}`;
  notif.textContent = message;
  notif.style.position = "fixed";
  notif.style.top = "20px";
  notif.style.right = "20px";
  notif.style.zIndex = "9999";
  
  document.body.appendChild(notif);
  
  // Hapus notifikasi setelah 3 detik
  setTimeout(() => {
    notif.style.opacity = "0";
    setTimeout(() => notif.remove(), 300);
  }, 3000);
}

// Jalankan saat halaman siap
document.addEventListener("DOMContentLoaded", function() {
  console.log("Page loaded, initializing form...");
  initializeContactForm();
});
