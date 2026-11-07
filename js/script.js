/* ==========================================================
   script.js — Portfolio Azka Zakiyyan Khisbhan Ali

   ISI FILE
   1. DATA YANG BISA KAMU EDIT  (email, skill, project + foto)
   1b. TEKS DUA BAHASA (ID / EN) + tombol ganti bahasa
   2. Render skill & project
   3. Filter project
   4. Form kontak
   5. Galeri foto (lightbox)
   6. Animasi angka & animasi muncul saat scroll
   ========================================================== */

/* ==========================================================
   1. DATA — bagian ini yang kamu edit
   ========================================================== */

// Email tujuan form kontak
const EMAIL = "azkazakiyan3@gmail.com";

// Skill: [nama, deskripsi, level 0-100, kanji dekorasi]
const SKILLS = [
  [
    "Blender",
    {
      id: "3D modeling, sculpting, texturing, dan render.",
      en: "3D modeling, sculpting, texturing, and rendering.",
    },
    90,
    "立",
  ],
  [
    "Unity",
    { id: "Game programming C#: gameplay, UI, fisika.", en: "C# game programming: gameplay, UI, physics." },
    85,
    "統",
  ],
  [
    "Godot",
    { id: "Game 2D/3D dengan GDScript yang ringan.", en: "Lightweight 2D/3D games with GDScript." },
    80,
    "森",
  ],
  [
    "Roblox Studio",
    { id: "Scripting Luau, map, dan sistem game.", en: "Luau scripting, maps, and game systems." },
    85,
    "箱",
  ],
  [
    "Website",
    {
      id: "HTML, CSS, JavaScript: responsif dan interaktif.",
      en: "HTML, CSS, JavaScript: responsive and interactive.",
    },
    80,
    "網",
  ],
  [
    "Figma UI/UX",
    { id: "Wireframe, prototype, dan design system.", en: "Wireframes, prototypes, and design systems." },
    85,
    "絵",
  ],
  [
    "Android Studio",
    { id: "Aplikasi Android native dan antarmuka mobile.", en: "Native Android apps and mobile interfaces." },
    75,
    "機",
  ],
];

const PROJECTS = [
  {
    judul: { id: "Gereja", en: "Church" },
    deskripsi: {
      id: "Gereja fantasi.",
      en: "A fantasy church.",
    },
    tags: ["Blender", "Texturing"],
    kategori: ["Blender"],
    kanji: "遊",
    foto: ["images/blender/cruch.jpg", "images/blender/cruch1.jpg"],
  },
  {
    judul: { id: "mansion", en: "rumah besar" },
    deskripsi: {
      id: "Rumah besar di dunia fantasi anime",
      en: "A mansion house in an anime fantasy world.",
    },
    tags: ["Blender", "Texturing"],
    kategori: ["Blender"],
    kanji: "像",
    foto: ["images/blender/mansion.jpg"],
  },
  {
    judul: { id: "Shimonada stasiun", en: "Shimonada Station" },
    deskripsi: {
      id: "Shimoda stasiun dimana pemandangan nya indah yang mengarah ke lautan.",
      en: "Shimonada Station where the view is beautiful and looks out to the ocean.",
    },
    tags: ["Blender", "Texturing"],
    kategori: ["Blender"],
    kanji: "網",
    foto: ["images/blender/shimonada.jpg", "images/blender/train.jpg", "images/blender/train1.jpg", "images/blender/train2.jpg", "images/blender/train3.jpg"], 
  },
  {
    judul: { id: "Gempa Detektor", en: "Earthquake Detector" },
    deskripsi: {
      id: "Aplikasi mobile untuk melihat berita gempa cuaca.",
      en: "A mobile app for viewing earthquake news.",
    },
    tags: ["Android Studio", "UI/UX"],
    kategori: ["Android", "Figma"],
    kanji: "機",
    foto: ["images/android/gempa.jpg"],
  },
  {
    judul: { id: "Roblox Recursive game", en: "Roblox Recursive Game" },
    deskripsi: {
      id: "Game horor bernama recursive di Roblox.",
      en: "A horror game called recursive on Roblox.",
    },
    tags: ["Roblox Studio", "LuaScript"],
    kategori: ["Roblox"],
    kanji: "森",
    foto: ["images/roblok/r1.jpeg", "images/roblok/r2.jpeg"],
  },
  {
    judul: { id: "Kelas website informatika", en: "Class Website Informatika" },
    deskripsi: {
      id: "Kelas website informatika universitas al-ghifari.",
      en: "A class project for creating a website in the field of informatika at Al-Ghifari University.",
    },
    tags: ["Website", "figma"],
    kategori: ["Website"],
    kanji: "森",
    foto: ["images/web/w1.png",],
    link: "https://gallery-informatika.vercel.app/", 
  },
  {
    judul: { id: "zk downloader", en: "zk downloader" },
    deskripsi: {
      id: "Tempat download media atau foto secara offline",
      en: "Place to download media or photos offline",
    },
    tags: ["Website", "figma"],
    kategori: ["Website"],
    kanji: "森",
    foto: ["images/web/w2.png",],
    link: "https://github.com/Azka3/zkdownloader",
  },
];

const I18N = {
  id: {
    nav_about: "Tentang",
    nav_skill: "Skill",
    nav_project: "Project",
    nav_contact: "Kontak",
    lead: "Game developer & 3D artist. Saya membangun dunia interaktif dari model, kode, dan antarmuka, untuk game, web, dan aplikasi Android.",
    role: "Peran",
    open: "● Terbuka untuk project",
    btn_view: "Lihat project",
    btn_hire: "Hubungi saya",
    about_e: "01 // Perkenalan",
    about_h: "Halo, saya <em>Azka</em>.",
    about_p1:
      "Nama saya <strong>Azka Zakiyyan Khisbhan Ali</strong>. Saya senang membuat hal yang bisa dilihat, dimainkan, dan disentuh: dari model 3D di Blender, game di Unity, Godot, dan Roblox Studio, sampai website dan aplikasi Android.",
    about_p2:
      "Bagi saya desain dan kode tidak terpisah. Antarmuka yang rapi di Figma harus terasa mulus saat dijalankan, dan dunia 3D harus punya cerita di balik setiap detailnya.",
    st1: "Skill utama",
    st2: "Game engine",
    st3: "Rasa ingin tahu",
    skill_e: "02 // Skill",
    skill_h: "Alat yang saya <em>kuasai</em>.",
    proj_e: "03 // Project",
    proj_h: "Karya <em>pilihan</em>.",
    all: "Semua",
    showing: (n) => "// menampilkan " + n + " project",
    contact_e: "04 // Kontak",
    contact_h: "Mari buat sesuatu <em>bersama</em>.",
    contact_sub:
      "Punya ide game, website, atau aplikasi? Tulis pesan di bawah, saya akan membalasnya lewat email.",
    msg_new: "Pesan baru",
    to: "kepada:",
    lbl_name: "Nama",
    lbl_email: "Email kamu",
    lbl_msg: "Pesan",
    ph_name: "Nama kamu",
    ph_email: "nama@email.com",
    ph_msg: "Ceritakan ide atau project kamu...",
    send: "Kirim pesan",
    fill: "Lengkapi semua kolom",
    opened: "Aplikasi email dibuka ✓",
    subj: "Pesan dari ",
    find_h: "05 // Temukan saya",
    f1: "01 // kode",
    f2: "02 // sosial",
    f3: "03 // game",
    foot: "力と美のために · dibuat dengan sepenuh hati",
    alt_statue: "Patung marmer bergaya dithered",
    alt_forge: "Lengan bertato menempa di atas landasan, gaya dithered",
    lb_aria: "Galeri project",
    close: "Tutup",
    prev: "Sebelumnya",
    next: "Berikutnya",
    photoN: "Foto",
    phTxt: "FOTO PROJECT",
    view: "Lihat",
    visit: "Kunjungi website",
    open_gal: "Buka galeri",
    langaria: "Ganti bahasa",
    pw: () => "foto",
  },
  en: {
    nav_about: "About",
    nav_skill: "Skills",
    nav_project: "Projects",
    nav_contact: "Contact",
    lead: "Game developer & 3D artist. I build interactive worlds out of models, code, and interfaces, for games, the web, and Android apps.",
    role: "Role",
    open: "● Open to projects",
    btn_view: "View projects",
    btn_hire: "Contact me",
    about_e: "01 // About",
    about_h: "Hi, I'm <em>Azka</em>.",
    about_p1:
      "My name is <strong>Azka Zakiyyan Khisbhan Ali</strong>. I love making things you can see, play, and touch: from 3D models in Blender and games in Unity, Godot, and Roblox Studio, to websites and Android apps.",
    about_p2:
      "To me, design and code aren't separate. A clean interface in Figma should feel smooth once it runs, and a 3D world should have a story behind every detail.",
    st1: "Core skills",
    st2: "Game engines",
    st3: "Curiosity",
    skill_e: "02 // Skills",
    skill_h: "Tools I <em>work with</em>.",
    proj_e: "03 // Projects",
    proj_h: "Selected <em>works</em>.",
    all: "All",
    showing: (n) => "// showing " + n + " project" + (n === 1 ? "" : "s"),
    contact_e: "04 // Contact",
    contact_h: "Let's make something <em>together</em>.",
    contact_sub: "Got an idea for a game, website, or app? Write a message below and I'll reply by email.",
    msg_new: "New message",
    to: "to:",
    lbl_name: "Name",
    lbl_email: "Your email",
    lbl_msg: "Message",
    ph_name: "Your name",
    ph_email: "name@email.com",
    ph_msg: "Tell me about your idea or project...",
    send: "Send message",
    fill: "Please fill in all fields",
    opened: "Email app opened ✓",
    subj: "Message from ",
    find_h: "05 // Find me",
    f1: "01 // code",
    f2: "02 // social",
    f3: "03 // games",
    foot: "力と美のために · made with care",
    alt_statue: "Dithered marble statue",
    alt_forge: "A tattooed arm forging on an anvil, dithered style",
    lb_aria: "Project gallery",
    close: "Close",
    prev: "Previous",
    next: "Next",
    photoN: "Photo",
    phTxt: "PROJECT PHOTO",
    view: "View",
    visit: "Visit website",
    open_gal: "Open gallery",
    langaria: "Switch language",
    pw: (n) => (n === 1 ? "photo" : "photos"),
  },
};

// Bahasa awal: pilihan terakhir pengunjung; kalau belum ada, ikut bahasa browser (Indonesia -> ID, lainnya -> EN)
let LANG;
try {
  LANG = localStorage.getItem("lang");
} catch (e) {}
if (LANG !== "id" && LANG !== "en")
  LANG = (navigator.language || "en").toLowerCase().startsWith("id") ? "id" : "en";

const t = (k, ...a) => {
  const v = I18N[LANG][k];
  return typeof v === "function" ? v(...a) : v;
};
// T(x): ambil teks sesuai bahasa dari data { id, en } (atau string biasa)
const T = (v) => (v && typeof v === "object" ? v[LANG] : v);
const LANG_HOOKS = []; // fungsi yang dijalankan tiap bahasa berganti
const langBtn = document.getElementById("lang");

function applyLang(anim) {
  document.documentElement.lang = LANG;
  const q = (a) => document.querySelectorAll("[" + a + "]");
  q("data-i18n").forEach((e) => (e.textContent = t(e.dataset.i18n)));
  q("data-i18n-html").forEach((e) => (e.innerHTML = t(e.dataset.i18nHtml)));
  q("data-i18n-ph").forEach((e) => (e.placeholder = t(e.dataset.i18nPh)));
  q("data-i18n-aria").forEach((e) => e.setAttribute("aria-label", t(e.dataset.i18nAria)));
  q("data-i18n-alt").forEach((e) => (e.alt = t(e.dataset.i18nAlt)));
  langBtn.dataset.lang = LANG;
  langBtn.querySelectorAll("span").forEach((s) => s.classList.toggle("on", s.dataset.l === LANG));
  try {
    localStorage.setItem("lang", LANG);
  } catch (e) {}
  LANG_HOOKS.forEach((f) => f());
  if (anim && D)
    [...q("data-i18n"), ...q("data-i18n-html")].forEach((e) =>
      e.animate(
        [
          { opacity: 0, filter: "blur(6px)", transform: "translateY(6px)" },
          { opacity: 1, filter: "blur(0)", transform: "none" },
        ],
        { duration: 450, easing: "cubic-bezier(.2,.8,.2,1)" },
      ),
    );
}

/* ==========================================================
   2. RENDER SKILL & PROJECT 
   ========================================================== */

const pad2 = (n) => String(n).padStart(2, "0");
// Daftar foto sebuah project; kalau kosong pakai 3 placeholder
const imgsOf = (p) => (p.foto && p.foto.length ? p.foto : [null, null, null]);
// Tombol link langsung ke website (hanya muncul kalau project punya field "link")
const linkBtn = (p, cls) =>
  p.link
    ? `<a class="btn ${cls}" href="${p.link}" target="_blank" rel="noopener noreferrer" data-lk>${t("visit")} ↗</a>`
    : "";
const viewLbl = (p) => `${t("view")} · ${imgsOf(p).length} ${t("pw", imgsOf(p).length)} ↗`;

document.getElementById("sk").innerHTML = SKILLS.map(
  (s, i) =>
    `<div class="skill"><span class="k">${s[3]}</span><span class="mono">0${i + 1} //</span><h3>${s[0]}</h3><p data-sd>${T(s[1])}</p><div class="bar"><i style="--w:${s[2]}%"></i></div></div>`,
).join("");
document.getElementById("pj").innerHTML = PROJECTS.map((p, i) => {
  const cover = p.foto && p.foto[0];
  const thumb = cover
    ? `<img src="${cover}" alt="${T(p.judul)}">`
    : `<div class="ph"></div><span class="ph-k">${p.kanji}</span><span class="ph-t" data-ph>${t("phTxt")} ${pad2(i + 1)}</span>`;
  return `<article class="card pre" data-i="${i}" data-cat="${p.kategori.join("|")}" tabindex="0" role="button" aria-label="${t("open_gal")} ${T(p.judul)}">
    <div class="thumb">${thumb}<span class="view mono" data-vw>${viewLbl(p)}</span></div>
    <div class="body">
      <span class="mono">0${i + 1} // Project</span>
      <h3 data-pt>${T(p.judul)}</h3>
      <p data-pd>${T(p.deskripsi)}</p>
      <div class="chips">${p.tags.map((t) => `<span>${t}</span>`).join("")}</div>
      ${linkBtn(p, "fill lk")}
    </div>
  </article>`;
}).join("");
const m = SKILLS.map((s) => s[0]).join("<b>力</b>") + "<b>力</b>";
document.getElementById("mq").innerHTML = m + m;

/* ==========================================================
   3. FILTER PROJECT
   ========================================================== */
const FL = ["Semua", "Blender", "Unity", "Godot", "Roblox", "Website", "Figma", "Android"];
const flab = (c) => (c === "Semua" ? t("all") : c); // "Semua" = kunci internal untuk semua kategori
const pj = document.getElementById("pj"),
  fl = document.getElementById("flt"),
  cnt = document.getElementById("cnt"),
  D = matchMedia("(prefers-reduced-motion:reduce)").matches ? 0 : 1;
const cnum = (c) => (c === "Semua" ? PROJECTS.length : PROJECTS.filter((p) => p.kategori.includes(c)).length);
fl.innerHTML =
  '<span class="pill"></span>' +
  FL.map(
    (c, i) =>
      `<button class="fbtn${i ? "" : " on"}" data-c="${c}"><span data-fl>${flab(c)}</span><sup>${cnum(c)}</sup></button>`,
  ).join("");
const pill = fl.querySelector(".pill");
function mp() {
  const b = fl.querySelector(".on");
  pill.style.left = b.offsetLeft + "px";
  pill.style.top = b.offsetTop + "px";
  pill.style.width = b.offsetWidth + "px";
  pill.style.height = b.offsetHeight + "px";
}
addEventListener("resize", mp);
if (document.fonts) document.fonts.ready.then(mp);
mp();
let shown = PROJECTS.length;
const setCnt = (n) => ((shown = n), (cnt.textContent = t("showing", n)));
setCnt(PROJECTS.length);
// Saat bahasa berganti: perbarui teks skill, kartu project, label filter
LANG_HOOKS.push(() => {
  fl.querySelectorAll("[data-fl]").forEach((x) => (x.textContent = flab(x.parentElement.dataset.c)));
  setCnt(shown);
  mp();
  document.querySelectorAll("#sk [data-sd]").forEach((e, i) => (e.textContent = T(SKILLS[i][1])));
  [...pj.children].forEach((c, i) => {
    const p = PROJECTS[i];
    c.setAttribute("aria-label", t("open_gal") + " " + T(p.judul));
    c.querySelector("[data-pt]").textContent = T(p.judul);
    c.querySelector("[data-pd]").textContent = T(p.deskripsi);
    c.querySelector("[data-vw]").textContent = viewLbl(p);
    const lk = c.querySelector("[data-lk]");
    if (lk) lk.textContent = t("visit") + " ↗";
    const ph = c.querySelector("[data-ph]");
    if (ph) ph.textContent = t("phTxt") + " " + pad2(i + 1);
    const im = c.querySelector(".thumb img");
    if (im) im.alt = T(p.judul);
  });
});
function enter(c, i) {
  c.classList.remove("pre");
  c.animate(
    [
      { opacity: 0, transform: "translateY(34px) scale(.92)", filter: "blur(8px)" },
      { opacity: 1, transform: "none", filter: "blur(0)" },
    ],
    { duration: 750 * D, delay: i * 110 * D, easing: "cubic-bezier(.2,.8,.2,1)", fill: "backwards" },
  );
}
const cards = [...pj.children];
new IntersectionObserver(
  (e, o) => {
    if (e[0].isIntersecting) {
      cards.forEach(enter);
      o.disconnect();
    }
  },
  { threshold: 0.1 },
).observe(pj);
let cur = "Semua",
  busy = false;
fl.addEventListener("click", (e) => {
  const b = e.target.closest(".fbtn");
  if (!b || busy || b.dataset.c === cur) return;
  const cat = (cur = b.dataset.c);
  busy = true;
  fl.querySelectorAll(".fbtn").forEach((x) => x.classList.toggle("on", x === b));
  mp();
  const show = (c) => cat === "Semua" || c.dataset.cat.split("|").includes(cat);
  const stay = cards.filter((c) => !c.hidden && show(c)),
    out = cards.filter((c) => !c.hidden && !show(c)),
    inn = cards.filter((c) => c.hidden && show(c));
  const first = new Map(stay.map((c) => [c, c.getBoundingClientRect()]));
  Promise.all(
    out.map(
      (c) =>
        c.animate(
          [
            { opacity: 1, transform: "none", filter: "blur(0)" },
            { opacity: 0, transform: "scale(.82) translateY(14px)", filter: "blur(8px)" },
          ],
          { duration: 280 * D, easing: "ease-in", fill: "forwards" },
        ).finished,
    ),
  ).then(() => {
    out.forEach((c) => {
      c.hidden = true;
      c.getAnimations().forEach((a) => a.cancel());
    });
    inn.forEach((c) => (c.hidden = false));
    stay.forEach((c) => {
      const f = first.get(c),
        l = c.getBoundingClientRect(),
        dx = f.left - l.left,
        dy = f.top - l.top;
      if (dx || dy)
        c.animate([{ transform: `translate(${dx}px,${dy}px)` }, { transform: "none" }], {
          duration: 650 * D,
          easing: "cubic-bezier(.2,.8,.2,1)",
        });
    });
    inn.forEach((c, i) => enter(c, i));
    setCnt(stay.length + inn.length);
    busy = false;
  });
});
/* ==========================================================
   4. FORM KONTAK
   ========================================================== */
/* ==========================================================
   5. GALERI FOTO (lightbox)
   ========================================================== */
(function () {
  const g = (i) => document.getElementById(i),
    m = g("msg"),
    b = g("sd"),
    l = g("sl");
  g("to").textContent = t("to") + " " + EMAIL;
  b.addEventListener("click", () => {
    const n = g("fn").value.trim(),
      e = g("fe").value.trim(),
      t = g("fm").value.trim();
    if (!n || !e || !t) {
      m.classList.remove("shake");
      void m.offsetWidth;
      m.classList.add("shake");
      l.textContent = t("fill");
      setTimeout(() => (l.textContent = t("send")), 1800);
      return;
    }
    const u =
      "mailto:" +
      EMAIL +
      "?subject=" +
      encodeURIComponent(t("subj") + n + " (portfolio)") +
      "&body=" +
      encodeURIComponent(t + "\n\n— " + n + " (" + e + ")");
    const a = document.createElement("a");
    a.href = u;
    a.target = "_top";
    document.body.appendChild(a);
    a.click();
    a.remove();
    b.classList.add("ok");
    l.textContent = t("opened");
    setTimeout(() => {
      b.classList.remove("ok");
      l.textContent = t("send");
    }, 3500);
  });
  LANG_HOOKS.push(() => {
    g("to").textContent = t("to") + " " + EMAIL;
    if (!b.classList.contains("ok")) l.textContent = t("send");
  });
})();
(function () {
  const g = (i) => document.getElementById(i),
    lb = g("lb"),
    ls = g("ls"),
    lt = g("lt"),
    pad = (n) => String(n).padStart(2, "0");
  let cur = 0,
    gi = 0,
    imgs = [],
    last = null,
    x0 = null;
  function paint(dir) {
    const p = PROJECTS[cur],
      im = imgs[gi];
    ls.innerHTML = im
      ? `<img src='${im}' alt='${T(p.judul)} ${gi + 1}'>`
      : `<div class='ph' style='--a:${gi * 35}deg'></div><span class='ph-k'>${p.kanji}</span><span class='ph-t'>${t("phTxt")} ${pad(cur + 1)} · ${gi + 1}/${imgs.length}</span>`;
    g("lc").textContent = pad(gi + 1) + " / " + pad(imgs.length);
    lt.querySelectorAll(".th").forEach((b, i) => b.classList.toggle("on", i === gi));
    if (dir && D)
      ls.animate(
        [
          { opacity: 0, transform: `translateX(${dir * 70}px)`, filter: "blur(8px)" },
          { opacity: 1, transform: "none", filter: "blur(0)" },
        ],
        { duration: 480, easing: "cubic-bezier(.2,.8,.2,1)" },
      );
  }
  function show(i) {
    cur = i;
    gi = 0;
    const p = PROJECTS[i];
    imgs = imgsOf(p);
    g("lk").textContent = pad(i + 1) + " // Project";
    g("lh").textContent = T(p.judul);
    g("lp").textContent = T(p.deskripsi);
    g("lch").innerHTML = p.tags.map((t) => `<span>${t}</span>`).join("");
    g("ll").innerHTML = linkBtn(p, "fill");
    lt.innerHTML = imgs
      .map(
        (im, k) =>
          `<button class='th' data-g='${k}' aria-label='${t("photoN")} ${k + 1}'>${im ? `<img src='${im}' alt=''>` : `<span>${p.kanji}</span>`}</button>`,
      )
      .join("");
    lb.classList.toggle("one", imgs.length < 2);
    paint(0);
  }
  function open(i) {
    last = document.activeElement;
    show(i);
    lb.hidden = false;
    document.body.style.overflow = "hidden";
    if (D) {
      g("lbb").animate([{ opacity: 0 }, { opacity: 1 }], { duration: 300 });
      g("lbx").animate(
        [
          { opacity: 0, transform: "translateY(30px) scale(.94)", filter: "blur(10px)" },
          { opacity: 1, transform: "none", filter: "blur(0)" },
        ],
        { duration: 520, easing: "cubic-bezier(.2,.8,.2,1)" },
      );
    }
    lb.querySelector(".lb-x").focus();
  }
  function close() {
    if (lb.hidden) return;
    const f = () => {
      lb.hidden = true;
      document.body.style.overflow = "";
      if (last && last.focus) last.focus();
    };
    if (D) {
      const a = lb.animate([{ opacity: 1 }, { opacity: 0 }], { duration: 220, fill: "forwards" });
      a.finished.then(() => {
        f();
        a.cancel();
      });
    } else f();
  }
  function go(d) {
    gi = (gi + d + imgs.length) % imgs.length;
    paint(d);
  }
  pj.addEventListener("click", (e) => {
    if (e.target.closest("a")) return; // klik tombol link: jangan buka galeri
    const c = e.target.closest(".card");
    if (c) open(+c.dataset.i);
  });
  pj.addEventListener("keydown", (e) => {
    if (e.target.closest("a")) return;
    const c = e.target.closest(".card");
    if (c && (e.key === "Enter" || e.key === " ")) {
      e.preventDefault();
      open(+c.dataset.i);
    }
  });
  lb.addEventListener("click", (e) => {
    const t = e.target;
    if (t.closest(".lb-x") || t.id === "lbb" || t === lb) close();
    else if (t.closest(".prev")) go(-1);
    else if (t.closest(".next")) go(1);
    else {
      const b = t.closest(".th");
      if (b) {
        const n = +b.dataset.g,
          d = n > gi ? 1 : -1;
        gi = n;
        paint(d);
      }
    }
  });
  document.addEventListener("keydown", (e) => {
    if (lb.hidden) return;
    if (e.key === "Escape") close();
    if (e.key === "ArrowRight") go(1);
    if (e.key === "ArrowLeft") go(-1);
  });
  const st = g("lbs");
  st.addEventListener("pointerdown", (e) => (x0 = e.clientX));
  st.addEventListener("pointerup", (e) => {
    if (x0 === null) return;
    const dx = e.clientX - x0;
    x0 = null;
    if (imgs.length > 1 && Math.abs(dx) > 50) go(dx < 0 ? 1 : -1);
  });
  LANG_HOOKS.push(() => {
    if (lb.hidden) return;
    const p = PROJECTS[cur];
    g("lh").textContent = T(p.judul);
    g("lp").textContent = T(p.deskripsi);
    g("ll").innerHTML = linkBtn(p, "fill");
    lt.querySelectorAll(".th").forEach((x, k) => x.setAttribute("aria-label", t("photoN") + " " + (k + 1)));
    paint(0);
  });
})();
/* ==========================================================
   6. ANIMASI ANGKA & SCROLL REVEAL
   ========================================================== */
const SYM = ["∞", "力", "美", "技", "創", "道"];
document.querySelectorAll(".roll").forEach((b, bi) => {
  const v = b.dataset.v;
  b.setAttribute("aria-label", v);
  [...v].forEach((ch, ci) => {
    const base = /\d/.test(ch) ? [..."0123456789"] : SYM,
      k = base.indexOf(ch),
      rot = base.slice(k).concat(base.slice(0, k)),
      loops = 3 + bi,
      seq = [];
    for (let r = 0; r < loops; r++) seq.push(...rot);
    seq.push(ch);
    const s = document.createElement("span");
    s.className = "strip";
    s.setAttribute("aria-hidden", "true");
    s.dataset.n = seq.length - 1;
    s.style.transitionDuration = 1.8 + bi * 0.5 + ci * 0.3 + "s";
    s.innerHTML = seq.map((x) => `<i>${x}</i>`).join("");
    b.appendChild(s);
  });
});
const ro = new IntersectionObserver(
  (e) =>
    e.forEach((x) => {
      if (x.isIntersecting) {
        x.target
          .querySelectorAll(".strip")
          .forEach((s) => (s.style.transform = `translateY(${-s.dataset.n * 1.1}em)`));
        ro.unobserve(x.target);
      }
    }),
  { threshold: 0.6 },
);
document.querySelectorAll(".stats").forEach((el) => ro.observe(el));
const io = new IntersectionObserver(
  (e) =>
    e.forEach((x) => {
      if (x.isIntersecting) {
        x.target.classList.add("in");
        io.unobserve(x.target);
      }
    }),
  { threshold: 0.15 },
);
document.querySelectorAll(".rv").forEach((el) => io.observe(el));

/* ==========================================================
   7. TOMBOL GANTI BAHASA (jalan terakhir, setelah semua siap)
   ========================================================== */
langBtn.addEventListener("click", () => {
  LANG = LANG === "id" ? "en" : "id";
  applyLang(true);
});
applyLang(false);
