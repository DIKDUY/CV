// Animasi saat halaman dimuat
document.addEventListener('DOMContentLoaded', function() {
  // Set semua section ke opacity 0 untuk animasi
  const animatableElements = document.querySelectorAll('section, header');
  animatableElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
  });

  // Trigger animasi berurutan
  animatableElements.forEach((el, index) => {
    setTimeout(() => {
      el.style.opacity = '1';
      el.style.transform = 'translateY(0)';
    }, 200 * index);
  });

  // Validasi form jika ada
  const form = document.querySelector('form');
  if (form) {
    form.addEventListener('submit', function(e) {
      const emailInput = document.getElementById('email');
      if (emailInput && emailInput.value.trim() === '') {
        e.preventDefault();
        alert('Email harus diisi!');
        emailInput.focus();
      }
    });
  }
});

// Efek hover untuk skill
document.querySelectorAll('.skill').forEach(skill => {
  skill.addEventListener('mouseenter', function() {
    this.style.transform = 'scale(1.05)';
    this.style.transition = 'transform 0.2s ease';
  });
  
  skill.addEventListener('mouseleave', function() {
    this.style.transform = 'scale(1)';
  });
});
