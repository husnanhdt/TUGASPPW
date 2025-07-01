function validateForm() {
    const nama = document.getElementById("nama").value.trim();
    const email = document.getElementById("email").value.trim();
    const produk = document.getElementById("produk").value;
    const pengiriman = document.querySelector('input[name="pengiriman"]:checked');
    const setuju = document.getElementById("setuju").checked;

    if (!nama || !email || produk === "" || !pengiriman || !setuju) {
        alert("Harap lengkapi semua data sebelum mengirim form.");
        return false;
    }

    alert("Form berhasil dikirim!");
    return true;
}
