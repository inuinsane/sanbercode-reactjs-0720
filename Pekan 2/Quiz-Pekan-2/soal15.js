let warna = ["biru", "merah", "kuning", "hijau"];

let dataBukuTambahan = {
    penulis: "John Doe",
    tahunTerbit : 2020
}

let buku = {
    nama: "Pemrograman Dasar",
    jumlahHalaman: 172,
    warnaSampul: ["hitam"]
}

buku.warnaSampul = [...buku.warnaSampul, ...warna];
buku = {...buku, ...dataBukuTambahan};

console.log(buku);