// Navigasi Responsif
const mobileMenu = document.getElementById('mobile-menu');
const navLinks = document.querySelector('.nav-links');

mobileMenu.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Efek Scroll Navbar
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = '#0f172a';
        navbar.style.padding = '15px 10%';
    } else {
        navbar.style.background = 'transparent';
        navbar.style.padding = '20px 10%';
    }
});

// Validasi Form Sederhana
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Terima kasih, pesan Anda telah terkirim (Simulasi)!');
    this.reset();
});