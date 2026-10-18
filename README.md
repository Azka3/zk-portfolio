# Portfolio — Azka Zakiyyan Khisbhan Ali

## Struktur folder
```
site/
├── index.html        ← struktur halaman (teks perkenalan, judul bagian)
├── css/style.css     ← semua tampilan & warna (warna di :root paling atas)
├── js/script.js      ← data skill/project/email + semua animasi
└── images/
    ├── patung.png    ← patung wajah di bagian atas
    ├── tempa.png     ← foto lengan di bagian kontak
    └── projects/     ← TARUH FOTO PROJECT DI SINI
```

## Cara menambah foto project
1. Taruh foto di `images/projects/` (contoh: `game01-1.jpg`, `game01-2.jpg`).
2. Buka `js/script.js`, cari `const PROJECTS`, lalu isi `foto`:
   ```js
   foto: ["images/projects/game01-1.jpg", "images/projects/game01-2.jpg"],
   ```
3. Foto pertama jadi sampul kartu; semuanya muncul di galeri saat kartu diklik.
4. Ganti `judul`, `deskripsi`, `tags`, dan `kategori` sesuai project asli.
   Kategori yang tersedia: Blender, Unity, Godot, Roblox, Website, Figma, Android.

## Dua bahasa (ID / EN)
- Tombol **ID | EN** ada di pojok kanan atas. Pilihan pengunjung diingat; kalau belum memilih, bahasa mengikuti browser (Indonesia -> ID, lainnya -> EN).
- Teks tetap (menu, judul, tombol, form) ada di `js/script.js` bagian **1b. TEKS DUA BAHASA** (`I18N`). Cari kuncinya, lalu ubah di `id` dan `en`.
- Judul & deskripsi project serta deskripsi skill ditulis dua bahasa langsung di `PROJECTS` / `SKILLS`:
  ```js
  judul: { id: "Project Game 01", en: "Game Project 01" },
  deskripsi: { id: "Teks Indonesia", en: "English text" },
  ```
- Menambah teks baru di `index.html`: beri atribut `data-i18n="kunci"` (teks biasa) atau `data-i18n-html="kunci"` (teks dengan `<em>`/`<strong>`), lalu tambahkan `kunci` di `id` dan `en`.

## Cara menambah project baru
Salin satu blok `{ ... }` di dalam `PROJECTS`, tempel di bawahnya, lalu ubah isinya.

## Cara menjalankan
Buka `index.html` di browser. Untuk online, upload seluruh folder `site` ke Netlify, GitHub Pages, atau Vercel.
