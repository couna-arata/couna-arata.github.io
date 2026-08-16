/* ============================================================
   couna — shared script
   ------------------------------------------------------------
   ▼ 編集はこの CONFIG だけでOK / Edit only this CONFIG block
   ============================================================ */

const CONFIG = {
  // メインアバター / main avatar
  avatar: {
    name: "アバター名（仮）",
    nameEn: "Avatar Name (placeholder)",
    note: "ベース：〇〇 / 衣装：〇〇",
    noteEn: "Base: xxx / Outfit: xxx",
    thumb: "assets/photos/vrc-05.jpg"   // 差し替え可 / swappable
  },

  // 今のお気に入りの曲 / current favourite song
  song: {
    title: "曲名（仮）",
    artist: "アーティスト名",
    url: ""   // 空ならリンクなし / leave empty for no link
  },

  // 拠点（気温・天気の表示に使用）/ home base, used for temp + weather flavour
  place: { ja: "東京", en: "Tokyo", tz: "Asia/Tokyo" },

  // 関連サイト / related links
  links: [
    { k: "BOOTH",           v: "c-farm.booth.pm",  url: "https://c-farm.booth.pm/" },
    { k: "X (Twitter)",     v: "@couna_jp",        url: "https://x.com/couna_jp" },
    { k: "VRChat",          v: "couna",            url: "https://vrchat.com/home/user/usr_68cde189-7b72-486a-81f7-635fc631b41d" }
  ]
};

/* ============================================================
   i18n
   ============================================================ */
const I18N = {
  ja: {
    "nav.home":"Home", "nav.about":"About", "nav.works":"Works", "nav.cast":"Cast", "nav.gallery":"Gallery",

    "hero.eyebrow":"a quiet corner of the metaverse",
    "hero.sub":"VRChatで過ごしている、あたたかい夜のきろく。",
    "hero.scroll":"scroll",

    "status.title":"いまのこと",
    "status.meta":"リアルタイム更新",
    "status.temp":"体感温度",
    "status.weather":"天気",
    "status.time":"現地時刻",
    "status.avatar":"メインアバター",
    "status.song":"いまのお気に入り",

    "portal.title":"めぐる",
    "portal.meta":"4つのページ",
    "portal.about":"About",      "portal.about.desc":"couna という人のこと",
    "portal.works":"Works",      "portal.works.desc":"つくったもの・ワールド",
    "portal.cast":"Cast",        "portal.cast.desc":"いっしょにいる人たち",
    "portal.gallery":"Gallery",  "portal.gallery.desc":"撮りためた写真",

    "links.title":"つながる",
    "links.meta":"related sites",

    "about.kicker":"about",
    "about.title":"couna って、<br>こういう人。",
    "about.lead":"これは仮の紹介文です。VRChatでの活動や好きなこと、雰囲気などをここに書いてください。",
    "about.p1.badge":"すきなこと",
    "about.p1.title":"夜のワールドを歩くこと",
    "about.p1.body":"仮のテキストです。ゆっくり景色を見て回るのが好き、みたいな内容をここに。",
    "about.p2.badge":"やってること",
    "about.p2.title":"つくる・撮る・あつまる",
    "about.p2.body":"仮のテキストです。制作や撮影、イベント参加などの活動をここに書いてください。",
    "about.p3.badge":"だいじにしてること",
    "about.p3.title":"あたたかい場所であること",
    "about.p3.body":"仮のテキストです。大切にしている価値観や雰囲気をここに書いてください。",
    "about.tl.title":"これまで",
    "about.tl.1.yr":"2026 — 現在", "about.tl.1.desc":"（仮）いまやっていること", "about.tl.1.note":"内容を差し替えてください。",
    "about.tl.2.yr":"2025",        "about.tl.2.desc":"（仮）このころのこと",   "about.tl.2.note":"内容を差し替えてください。",
    "about.tl.3.yr":"それ以前",     "about.tl.3.desc":"（仮）はじまり",       "about.tl.3.note":"内容を差し替えてください。",

    "works.kicker":"works",
    "works.title":"つくったもの。",
    "works.lead":"ワールド・アバター・衣装など。すべてプレースホルダーです。",
    "works.meta":"06 items — placeholder",
    "works.1.role":"World",   "works.1.name":"ワールド名（仮）", "works.1.note":"説明文をここに。",
    "works.2.role":"Avatar",  "works.2.name":"アバター名（仮）", "works.2.note":"説明文をここに。",
    "works.3.role":"Outfit",  "works.3.name":"衣装名（仮）",     "works.3.note":"説明文をここに。",
    "works.4.role":"Gimmick", "works.4.name":"ギミック名（仮）", "works.4.note":"説明文をここに。",
    "works.5.role":"Event",   "works.5.name":"イベント名（仮）", "works.5.note":"説明文をここに。",
    "works.6.role":"Other",   "works.6.name":"その他（仮）",     "works.6.note":"説明文をここに。",
    "works.booth":"BOOTHで見る →",

    "cast.kicker":"cast",
    "cast.title":"いっしょに<br>いる人たち。",
    "cast.lead":"よく会う人・お世話になっている人。名前は仮です。",
    "cast.meta":"06 people — placeholder",
    "cast.role.friend":"Friend", "cast.role.crew":"Crew", "cast.role.thanks":"Thanks",
    "cast.note":"ひとことメモをここに。",

    "gallery.kicker":"gallery",
    "gallery.title":"撮りためた、<br>ひかりのかけら。",
    "gallery.lead":"VRChatで撮った写真。クリックで拡大できます。",
    "gallery.meta":"16 photos",

    "common.back":"← Home",
    "common.copied":"コピーしました ✓",
    "common.ph":"※ プレースホルダー：実際の内容に差し替え可",
    "footer.note":"made in the metaverse"
  },

  en: {
    "nav.home":"Home", "nav.about":"About", "nav.works":"Works", "nav.cast":"Cast", "nav.gallery":"Gallery",

    "hero.eyebrow":"a quiet corner of the metaverse",
    "hero.sub":"Notes from warm nights spent in VRChat.",
    "hero.scroll":"scroll",

    "status.title":"Right now",
    "status.meta":"live",
    "status.temp":"Feels like",
    "status.weather":"Weather",
    "status.time":"Local time",
    "status.avatar":"Main avatar",
    "status.song":"On repeat",

    "portal.title":"Wander",
    "portal.meta":"four pages",
    "portal.about":"About",      "portal.about.desc":"who couna is",
    "portal.works":"Works",      "portal.works.desc":"things made & worlds",
    "portal.cast":"Cast",        "portal.cast.desc":"the people around",
    "portal.gallery":"Gallery",  "portal.gallery.desc":"photos collected",

    "links.title":"Elsewhere",
    "links.meta":"related sites",

    "about.kicker":"about",
    "about.title":"A little about<br>couna.",
    "about.lead":"Placeholder intro. Write about your VRChat life, what you like, and the mood you go for.",
    "about.p1.badge":"likes",
    "about.p1.title":"Walking night worlds",
    "about.p1.body":"Placeholder text — something about slowly wandering and taking in the scenery.",
    "about.p2.badge":"doing",
    "about.p2.title":"Making, shooting, gathering",
    "about.p2.body":"Placeholder text — describe creating, photography, and events you join.",
    "about.p3.badge":"values",
    "about.p3.title":"Being a warm place",
    "about.p3.body":"Placeholder text — describe the values and atmosphere you care about.",
    "about.tl.title":"Timeline",
    "about.tl.1.yr":"2026 — now", "about.tl.1.desc":"(placeholder) what you do now", "about.tl.1.note":"Replace this text.",
    "about.tl.2.yr":"2025",       "about.tl.2.desc":"(placeholder) around this time", "about.tl.2.note":"Replace this text.",
    "about.tl.3.yr":"before",     "about.tl.3.desc":"(placeholder) the beginning",    "about.tl.3.note":"Replace this text.",

    "works.kicker":"works",
    "works.title":"Things made.",
    "works.lead":"Worlds, avatars, outfits. All placeholder for now.",
    "works.meta":"06 items — placeholder",
    "works.1.role":"World",   "works.1.name":"World Name",   "works.1.note":"Description goes here.",
    "works.2.role":"Avatar",  "works.2.name":"Avatar Name",  "works.2.note":"Description goes here.",
    "works.3.role":"Outfit",  "works.3.name":"Outfit Name",  "works.3.note":"Description goes here.",
    "works.4.role":"Gimmick", "works.4.name":"Gimmick Name", "works.4.note":"Description goes here.",
    "works.5.role":"Event",   "works.5.name":"Event Name",   "works.5.note":"Description goes here.",
    "works.6.role":"Other",   "works.6.name":"Other",        "works.6.note":"Description goes here.",
    "works.booth":"See on BOOTH →",

    "cast.kicker":"cast",
    "cast.title":"The people<br>around me.",
    "cast.lead":"Friends and folks I owe a lot to. Names are placeholder.",
    "cast.meta":"06 people — placeholder",
    "cast.role.friend":"Friend", "cast.role.crew":"Crew", "cast.role.thanks":"Thanks",
    "cast.note":"A short note goes here.",

    "gallery.kicker":"gallery",
    "gallery.title":"Fragments<br>of light.",
    "gallery.lead":"Photos taken in VRChat. Click to enlarge.",
    "gallery.meta":"16 photos",

    "common.back":"← Home",
    "common.copied":"Copied ✓",
    "common.ph":"※ Placeholder — replace with real content",
    "footer.note":"made in the metaverse"
  }
};

/* ============================================================
   theme (sun / moon) + language (ja / en)
   ============================================================ */
const store = {
  get(k, fallback){ try{ return localStorage.getItem(k) || fallback; }catch(e){ return fallback; } },
  set(k, v){ try{ localStorage.setItem(k, v); }catch(e){} }
};

let theme = store.get("couna-theme", "moon");
let lang  = store.get("couna-lang", "ja");

function applyTheme(t){
  theme = t;
  document.documentElement.setAttribute("data-theme", t);
  store.set("couna-theme", t);
}
function applyLang(l){
  lang = l;
  document.documentElement.setAttribute("data-lang", l);
  document.documentElement.lang = l;
  store.set("couna-lang", l);
  document.querySelectorAll("[data-cap]").forEach(c=> c.textContent = l.toUpperCase());
  const dict = I18N[l];
  document.querySelectorAll("[data-t]").forEach(el=>{
    const key = el.getAttribute("data-t");
    if(dict[key] !== undefined) el.textContent = dict[key];
  });
  document.querySelectorAll("[data-th]").forEach(el=>{
    const key = el.getAttribute("data-th");
    if(dict[key] !== undefined) el.innerHTML = dict[key];
  });
  renderDynamic();
}

/* build the two toggles into every page's nav */
function mountToggles(){
  document.querySelectorAll("[data-mount-toggles]").forEach(host=>{
    host.innerHTML = `
      <div class="langtog" role="button" tabindex="0" aria-label="language">
        <div class="slider"></div>
        <span class="g ja">あ</span>
        <span class="g en">A</span>
        <span class="cap" data-cap>JA</span>
      </div>
      <div class="sunmoon" role="button" tabindex="0" aria-label="theme">
        <div class="clouds"><i></i><i></i></div>
        <div class="stars"><i></i><i></i><i></i><i></i><i></i></div>
        <div class="horizon"></div>
        <div class="arc"><div class="lift">
          <div class="rays"><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i></div>
          <div class="body">
            <span class="crater c1"></span><span class="crater c2"></span><span class="crater c3"></span>
            <span class="bite"></span>
          </div>
        </div></div>
      </div>`;

    const sm = host.querySelector(".sunmoon");
    const lt = host.querySelector(".langtog");
    const hit = (el, fn)=>{
      el.addEventListener("click", fn);
      el.addEventListener("keydown", e=>{ if(e.key === "Enter" || e.key === " "){ e.preventDefault(); fn(); } });
    };
    hit(sm, ()=> applyTheme(theme === "moon" ? "light" : "moon"));
    hit(lt, ()=> applyLang(lang === "ja" ? "en" : "ja"));
  });
}

/* ============================================================
   dynamic content driven by CONFIG (re-rendered on lang change)
   ============================================================ */
function renderDynamic(){
  const ja = lang === "ja";

  const av = document.getElementById("chip-avatar-name");
  if(av){
    av.textContent = ja ? CONFIG.avatar.name : CONFIG.avatar.nameEn;
    document.getElementById("chip-avatar-note").textContent = ja ? CONFIG.avatar.note : CONFIG.avatar.noteEn;
    const th = document.getElementById("chip-avatar-thumb");
    if(th) th.src = CONFIG.avatar.thumb;
  }

  const sg = document.getElementById("chip-song-title");
  if(sg){
    sg.textContent = CONFIG.song.title;
    document.getElementById("chip-song-artist").textContent = CONFIG.song.artist;
  }

  const pl = document.getElementById("chip-place");
  if(pl) pl.textContent = ja ? CONFIG.place.ja : CONFIG.place.en;

  const lg = document.getElementById("link-grid");
  if(lg){
    lg.innerHTML = CONFIG.links.map(l=>`
      <a class="linkrow" href="${l.url}" target="_blank" rel="noopener noreferrer">
        <div><div class="k mono">${l.k}</div><div class="v">${l.v}</div></div>
        <span class="go">↗</span>
      </a>`).join("");
  }

  updateAmbient();
}

/* ============================================================
   playful ambient: temperature / weather / clock
   （実測ではなく、時間帯で表情が変わる“気配”の表示）
   ============================================================ */
const WEATHER = {
  ja: ["晴れ","うすぐもり","星がきれい","おだやかな夜","風がすこし"],
  en: ["Clear","Light clouds","Starry","Calm night","A little wind"]
};

function updateAmbient(){
  const now  = new Date();
  const hour = Number(now.toLocaleString("en-US",{hour:"2-digit",hour12:false,timeZone:CONFIG.place.tz}));

  // temp: warmer in the evening, cooler before dawn — playful, not a forecast
  const base = 21.5 + Math.sin(((hour - 4) / 24) * Math.PI * 2) * 4.5;
  const temp = Math.round((base + (Math.random() - .5) * .8) * 10) / 10;
  const pct  = Math.min(100, Math.max(12, ((temp - 12) / 20) * 100));

  const tv = document.getElementById("chip-temp-value");
  if(tv){
    tv.textContent = temp.toFixed(1) + "°C";
    document.getElementById("chip-temp-merc").style.height = pct + "%";
    const ja = lang === "ja";
    const mood = temp < 18 ? (ja ? "すこしひんやり" : "a bit cool")
               : temp < 22 ? (ja ? "ちょうどいい" : "just right")
               : temp < 26 ? (ja ? "ぽかぽか" : "cosy")
                           : (ja ? "あたたかい夜" : "a warm night");
    document.getElementById("chip-temp-mood").textContent = mood;
  }

  const wv = document.getElementById("chip-weather-value");
  if(wv){
    const list = WEATHER[lang];
    wv.textContent = list[hour % list.length];
    // hide the sun glyph after dark
    const sun = document.querySelector(".wglyph .sun");
    if(sun) sun.style.opacity = (hour >= 6 && hour < 18) ? "1" : "0.25";
  }
}

function tickClock(){
  const el = document.getElementById("chip-clock");
  if(!el) return;
  el.textContent = new Date().toLocaleTimeString("ja-JP", {hour12:false, timeZone:CONFIG.place.tz});
}

/* ============================================================
   starfield (visible in moon mode only, via CSS opacity)
   ============================================================ */
function initStars(){
  const canvas = document.getElementById("stars");
  if(!canvas) return;
  const ctx = canvas.getContext("2d");
  let stars = [], t = 0;

  function resize(){
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    const count = Math.floor((canvas.width * canvas.height) / 9000);
    stars = Array.from({length: count}, ()=>({
      x: Math.random()*canvas.width,
      y: Math.random()*canvas.height,
      r: Math.random()*1.25 + 0.2,
      o: Math.random()*0.55 + 0.15,
      tw: Math.random()*0.02 + 0.004,
      ph: Math.random()*Math.PI*2
    }));
  }
  function draw(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
    t++;
    for(const s of stars){
      const f = Math.sin(t*s.tw + s.ph)*0.3 + 0.7;
      ctx.beginPath();
      ctx.arc(s.x, s.y, s.r, 0, Math.PI*2);
      ctx.fillStyle = `rgba(242,236,226,${s.o*f})`;
      ctx.fill();
    }
    requestAnimationFrame(draw);
  }
  resize();
  window.addEventListener("resize", resize);
  draw();
}

/* ============================================================
   hero — parallax + noise DISSOLVE on scroll
   ------------------------------------------------------------
   The SVG filter thresholds fractal noise into an alpha mask.
   Sweeping `intercept` from HI → LO eats the image away in
   speckles instead of a flat fade. The value is quantised into
   STEPS so the (expensive) filter only re-renders a few dozen
   times over the whole hero, keeping scrolling smooth.
   ============================================================ */
/* Tuning: with slope=5 the mask is fully opaque at intercept ≈ +0.8 and fully
   clear at ≈ -4.9, so the sweep spans exactly that range with no dead zone at
   either end. EASE > 1 makes the sweep move a little quicker early on, which
   offsets the way fractal noise clusters around its midpoint.               */
const DISSOLVE = { HI: 0.8, LO: -4.9, STEPS: 32, EASE: 1.2 };

function initHero(){
  const bg = document.querySelector(".hero-bg");
  if(!bg) return;

  const layer  = bg.querySelector(".layer");
  const funcA  = document.getElementById("couna-dissolve-a");
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // no filter support (or user prefers less motion) → plain fade.
  // Applied inline (not from the external stylesheet) so the #fragment always
  // resolves against the document in every browser.
  const canDissolve = !!funcA && !reduce;
  if(canDissolve) layer.style.filter = "url(#couna-dissolve)";
  else bg.classList.add("no-dissolve");

  let lastStep = -1, ticking = false;

  function update(){
    ticking = false;
    const y = window.scrollY;
    const p = Math.min(1, Math.max(0, y / (window.innerHeight * 0.9)));

    // parallax drift + slow push-in
    layer.style.transform = `translateY(${y * 0.3}px) scale(${1 + p * 0.07})`;

    if(canDissolve){
      // quantised threshold sweep → speckled dissolve
      const step = Math.round(p * DISSOLVE.STEPS);
      if(step !== lastStep){
        lastStep = step;
        const t    = step / DISSOLVE.STEPS;
        const ease = 1 - Math.pow(1 - t, DISSOLVE.EASE);
        funcA.setAttribute("intercept",
          (DISSOLVE.HI + (DISSOLVE.LO - DISSOLVE.HI) * ease).toFixed(3));
      }
      // a touch of extra fade so the tail end goes fully quiet
      bg.style.opacity = String(1 - p * 0.35);
    }else{
      bg.style.opacity = String(1 - p * 0.95);
    }
  }

  window.addEventListener("scroll", ()=>{
    if(!ticking){ ticking = true; requestAnimationFrame(update); }
  }, {passive:true});
  window.addEventListener("resize", update, {passive:true});
  update();
}

/* ============================================================
   misc: nav shadow, reveal, copy, lightbox
   ============================================================ */
function initChrome(){
  const bar = document.querySelector("nav.topbar");
  if(bar){
    const onScroll = ()=> bar.classList.toggle("scrolled", window.scrollY > 20);
    window.addEventListener("scroll", onScroll, {passive:true});
    onScroll();
  }

  const io = new IntersectionObserver(entries=>{
    entries.forEach(e=>{ if(e.isIntersecting){ e.target.classList.add("in"); io.unobserve(e.target); } });
  }, {threshold:0.1});
  document.querySelectorAll(".reveal").forEach(el=>io.observe(el));

  document.addEventListener("click", async e=>{
    const row = e.target.closest("[data-copy]");
    if(!row) return;
    try{
      await navigator.clipboard.writeText(row.dataset.copy);
      const v = row.querySelector(".v");
      if(!v) return;
      const orig = v.textContent;
      v.textContent = I18N[lang]["common.copied"];
      v.classList.add("copied");
      setTimeout(()=>{ v.textContent = orig; v.classList.remove("copied"); }, 1600);
    }catch(err){ console.error(err); }
  });
}

function initGallery(photos){
  const grid = document.getElementById("photo-grid");
  if(!grid) return;
  grid.innerHTML = photos.map((p,i)=>
    `<div class="tile reveal" data-i="${i}">
       <img src="${p.src}" alt="VRChat photo ${p.tag}" loading="lazy">
       <span class="tag mono">${p.tag}</span>
     </div>`).join("");

  const lb    = document.getElementById("lightbox");
  const lbImg = document.getElementById("lb-img");
  const lbTag = document.getElementById("lb-tag");
  let idx = 0;

  const show = ()=>{ lbImg.src = photos[idx].src; lbTag.textContent = photos[idx].tag; };
  grid.addEventListener("click", e=>{
    const tile = e.target.closest(".tile");
    if(!tile) return;
    idx = Number(tile.dataset.i); show(); lb.classList.add("open");
  });
  document.getElementById("lb-close").onclick = ()=> lb.classList.remove("open");
  document.getElementById("lb-prev").onclick  = ()=>{ idx = (idx-1+photos.length)%photos.length; show(); };
  document.getElementById("lb-next").onclick  = ()=>{ idx = (idx+1)%photos.length; show(); };
  lb.addEventListener("click", e=>{ if(e.target === lb) lb.classList.remove("open"); });
  window.addEventListener("keydown", e=>{
    if(!lb.classList.contains("open")) return;
    if(e.key === "Escape") lb.classList.remove("open");
    if(e.key === "ArrowRight") document.getElementById("lb-next").click();
    if(e.key === "ArrowLeft")  document.getElementById("lb-prev").click();
  });

  const io = new IntersectionObserver(entries=>{
    entries.forEach(e=>{ if(e.isIntersecting){ e.target.classList.add("in"); io.unobserve(e.target); } });
  }, {threshold:0.08});
  grid.querySelectorAll(".reveal").forEach(el=>io.observe(el));
}

/* ============================================================
   boot
   ============================================================ */
document.addEventListener("DOMContentLoaded", ()=>{
  mountToggles();
  applyTheme(theme);
  applyLang(lang);
  initStars();
  initHero();
  initChrome();
  tickClock();
  setInterval(tickClock, 1000);
  setInterval(updateAmbient, 30000);
});
