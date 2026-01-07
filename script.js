document.getElementById('registrationForm').addEventListener('submit', function(e) {
    e.preventDefault();

    // Mengambil nilai input
    const nama = document.getElementById('fullName').value;
    const nim = document.getElementById('nim').value;
    const email = document.getElementById('email').value;
    const prodi = document.getElementById('prodi').value;
    const gender = document.querySelector('input[name="gender"]:checked').value;

    // Logika Sederhana: Menampilkan hasil pendaftaran
    console.log("Data Pendaftaran:", { nama, nim, email, prodi, gender });

    // Pesan Sukses
    alert(`Terima kasih ${nama}!\nPendaftaran Anda di Prodi ${prodi} berhasil dikirim.`);
    
    // Reset form
    this.reset();
});