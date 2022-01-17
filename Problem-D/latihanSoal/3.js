/**
 * Ganjil Genap Time
 *
 * Jadi, di dalam object daftar tersebut berisikan tanggal tilang mulai dari tanggal 24 sampai tanggal 27, lalu setiap tanggal tersebut memiliki array kendaraan yang lewat, lengkap dengan nama pemilik, plat nomor, tipe kendaraan dan rute yang dilewati. Pada tanggal ganjil, maka mobil yang lewat haruslah memiliki plat nomor dengan akhiran nomor ganjil, begitu pula sebaliknya, peraturan ini hanya berlaku untuk kendaraan mobil saja. Setiap mobil yang terkena tilang, maka wajib baginya untuk membayar denda sebesar Rp. 500.000.
 *
 * Rute yang berlaku ganjil genap:
 * Fatmawati, Panglima Polim, Sisingamangaraja
 */

//INPUT
let daftar = {
  24: [
    {
      name: "Denver",
      plat: "B 2791 KDS",
      type: "Mobil",
      rute: ["TB Simatupang", "Panglima Polim", "Depok", "Sisingamangaraja"],
    },
    {
      name: "Toni",
      plat: "B 1212 JBB",
      type: "Mobil",
      rute: [
        "Pintu Besar Selatan",
        "Panglima Polim",
        "Depok",
        "Senen Raya",
        "Kemang",
      ],
    },
    {
      name: "Stark",
      plat: "B 444 XSX",
      type: "Motor",
      rute: ["Pondok Indah", "Depok", "Senen Raya", "Kemang"],
    },
    {
      name: "Anna",
      plat: "B 678 DD",
      type: "Mobil",
      rute: [
        "Fatmawati",
        "Panglima Polim",
        "Depok",
        "Senen Raya",
        "Kemang",
        "Gajah Mada",
      ],
    },
  ],
  25: [
    {
      name: "Denver",
      plat: "B 2791 KDS",
      type: "Mobil",
      rute: ["TB Simatupang", "Panglima Polim", "Depok", "Senen Raya"],
    },
    {
      name: "Toni",
      plat: "B 1212 JBB",
      type: "Mobil",
      rute: [
        "Pintu Besar Selatan",
        "Panglima Polim",
        "Depok",
        "Senen Raya",
        "Kemang",
      ],
    },
    {
      name: "Stark",
      plat: "B 444 XSX",
      type: "Motor",
      rute: ["Pondok Indah", "Depok", "Senen Raya", "Kemang"],
    },
    {
      name: "Anna",
      plat: "B 678 DD",
      type: "Mobil",
      rute: [
        "Fatmawati",
        "Panglima Polim",
        "Depok",
        "Senen Raya",
        "Kemang",
        "Gajah Mada",
      ],
    },
  ],
  27: [
    {
      name: "Denver",
      plat: "B 2791 KDS",
      type: "Mobil",
      rute: ["TB Simatupang", "Panglima Polim", "Depok", "Senen Raya"],
    },
    {
      name: "Toni",
      plat: "B 1212 JBB",
      type: "Mobil",
      rute: [
        "Pintu Besar Selatan",
        "Panglima Polim",
        "Depok",
        "Senen Raya",
        "Kemang",
      ],
    },
    {
      name: "Stark",
      plat: "B 444 XSX",
      type: "Motor",
      rute: ["Pondok Indah", "Depok", "Senen Raya", "Kemang"],
    },
    {
      name: "Anna",
      plat: "B 678 DD",
      type: "Mobil",
      rute: ["Fatmawati", "Panglima Polim", "Depok", "Senen Raya", "Kemang"],
    },
  ],
};

function tilang(data) {}

console.log(tilang(daftar));
//OUTPUT
// {
//   'Denver': {
//     tanggalTilang: [24],
//     jumlahTilang: [2],
//     denda: 1000000
//   },
//   'Toni': {
//     tanggalTilang: [ 25, 27 ]
//     jumlahTilang: [1, 1]
//     denda: 1000000
//   },
//   'Anna': {
//     tanggalTilang: [25, 27]
//     jumlahTilang: [3, 2]
//     denda: 2500000
//   }
// }
