/**
 * articles-app.js
 * Central data store and Load More logic for New Venus Clinic blog.
 * All 9 WordPress posts – newest first (IDs 1575 → 1).
 */

const BLOG_POSTS = [
  {
    slug: "76-year-old-gets-infected-stent-removed-from-heart",
    url: "76-year-old-gets-infected-stent-removed-from-heart.html",
    title: "76-year-old gets infected stent removed from heart",
    lang: "en",
    date: "1 August 2024",
    dateShort: "01 Aug 2024",
    dateISO: "2024-08-01",
    category: "Blog",
    image: "assets/images/blog1.png",
    webp: "assets/images/blog1.webp",
    width: 768,
    height: 286,
    alt: "News clipping: 76-year-old gets infected stent removed from heart at Apollo Hospitals OMR",
    excerpt: "Experiencing fever for nearly three days after under- going an angioplasty and sten- ting procedure seemed abnor mal to 76-year-old businessman Mohamed Salim 76-year-old gets infected stent removed from heart newvenusclinic.com 1 August 2024 76-year-old...",
    homeExcerpt: "Experiencing fever for nearly three days after under- going an angioplasty and sten- ting procedure seemed abnor mal...",
  },
  {
    slug: "man-treated-for-cardiac-stent-infection",
    url: "man-treated-for-cardiac-stent-infection.html",
    title: "Man treated for cardiac stent infection",
    lang: "en",
    date: "1 August 2024",
    dateShort: "01 Aug 2024",
    dateISO: "2024-08-01",
    category: "Blog",
    image: "assets/images/blog2.png",
    webp: "assets/images/blog2.webp",
    width: 768,
    height: 338,
    alt: "News clipping: Man treated for cardiac stent infection at Apollo Hospital Perungudi",
    excerpt: "A 77-year-old man was re- cently treated at Apollo PerungudiHospital's branch for a rare cardiac infection. Man treated for cardiac stent infection newvenusclinic.com 1 August 2024 The Hindu Bureau Chennai A 77-year-old man was re-...",
    homeExcerpt: "A 77-year-old man was re- cently treated at Apollo PerungudiHospital's branch for a rare cardiac infection. Man treated...",
  },
  {
    slug: "intracoronary-stent-extraction-surgery-tamil",
    url: "intracoronary-stent-extraction-surgery-tamil.html",
    title: "இதய நோயாளிக்குஇன்ட்ரா கரோனரி ஸ்டென்ட் பிரித்தெடுக்கும் அறுவை சிகிச்சை",
    lang: "ta",
    date: "1 August 2024",
    dateShort: "01 Aug 2024",
    dateISO: "2024-08-01",
    category: "Blog",
    image: "assets/images/blog3.jpg",
    webp: "assets/images/blog3.webp",
    width: 570,
    height: 248,
    alt: "Tamil press coverage of intracoronary stent extraction surgery at Apollo OMR Hospital",
    excerpt: "ஓஎம்ஆரில் உள்ள அப்போலோ மருத்துவமனையில் 76 வயது நோயாளிக்கு இதயத்தில் இன்ட்ரா கரோனரி ஸ்டென்ட் பிரித்தெடுத்த அறுவை சிகிச்சை குறித்த பத்திரிகையாளர் சந்திப்பு நுங்கம்பாக்கத்தில் நடந்தது. இதய நோயாளிக்குஇன்ட்ரா கரோனரி ஸ்டென்ட் பிரித்தெடுக்கும் அறுவை சிகிச்சை newvenusclinic.com 1 August 2024 இதய நோயாளிக்கு ஓஎம்ஆரில் உள்ள அப்போலோ...",
    homeExcerpt: "ஓஎம்ஆரில் உள்ள அப்போலோ மருத்துவமனையில் 76 வயது நோயாளிக்கு இதயத்தில் இன்ட்ரா கரோனரி ஸ்டென்ட் பிரித்தெடுத்த அறுவை சிகிச்சை குறித்த பத்திரிகையாளர் சந்திப்பு நுங்கம்பாக்கத்தில்...",
  },
  {
    slug: "apollo-omr-complex-stent-extraction-achievement-tamil",
    url: "apollo-omr-complex-stent-extraction-achievement-tamil.html",
    title: "அப்போலோ OMR மருத்துவமனை மிகவும் சிக்கலான, இதயத்தில் பொருத்தப்பட்ட உறை குழாயை மிகத்துல்லியமாக பிரித்து எடுத்து சாதனை!",
    lang: "ta",
    date: "1 August 2024",
    dateShort: "01 Aug 2024",
    dateISO: "2024-08-01",
    category: "Blog",
    image: "assets/images/blog6.png",
    webp: "assets/images/blog6.webp",
    width: 872,
    height: 644,
    alt: "Tamil feature report on Apollo OMR Hospital high-risk intracoronary stent extraction procedure",
    excerpt: "மிகவும் அரிதான மேலும் அதிக ஆபத்துள்ள நோயாளிக்கு பொருத்தப்பட்டு இருந்த இன்ட்ராகோரோனரி உறை குழாயைப் பிரித்தெடுத்து இருக்கிறது அப்போலோ மருத்துவமனை. அப்போலோ OMR மருத்துவமனை மிகவும் சிக்கலான, இதயத்தில் பொருத்தப்பட்ட உறை குழாயை மிகத்துல்லியமாக பிரித்து எடுத்து சாதனை! newvenusclinic.com 1 August 2024 சாதனை! சென்னை, சென்னை...",
    homeExcerpt: "மிகவும் அரிதான மேலும் அதிக ஆபத்துள்ள நோயாளிக்கு பொருத்தப்பட்டு இருந்த இன்ட்ராகோரோனரி உறை குழாயைப் பிரித்தெடுத்து இருக்கிறது அப்போலோ மருத்துவமனை. அப்போலோ OMR மருத்துவமனை...",
  },
  {
    slug: "risky-bypass-surgery-gives-new-life-to-76-year-old-hindi",
    url: "risky-bypass-surgery-gives-new-life-to-76-year-old-hindi.html",
    title: "जोखिम भरी बाईपास सर्जरी से 76 साल के बुजुर्ग को मिली नई जिंदगी",
    lang: "hi",
    date: "1 August 2024",
    dateShort: "01 Aug 2024",
    dateISO: "2024-08-01",
    category: "Blog",
    image: "assets/images/blog5.png",
    webp: "assets/images/blog5.webp",
    width: 1350,
    height: 416,
    alt: "Hindi news coverage of risky bypass surgery saving a 76-year-old patient at Apollo Hospital",
    excerpt: "चेन्नई. ओएमआर स्थित एक प्राइवेट हॉस्पिटल में 76 साल के बुजुर्ग के हृदय में लगा स्टेंट निकालकर जटिल बाईपास सर्जरी कर उन्हें नया जीवनदान दिया गया। हालांकि यह हार्ट सर्जरी आम बात हो गई है,...",
    homeExcerpt: "चेन्नई. ओएमआर स्थित एक प्राइवेट हॉस्पिटल में 76 साल के बुजुर्ग के हृदय में लगा स्टेंट निकालकर जटिल...",
  },
  {
    slug: "rare-cardiac-treatment-at-apollo-hospital-telugu",
    url: "rare-cardiac-treatment-at-apollo-hospital-telugu.html",
    title: "అపోలో ఆసుపత్రిలో అరుదైన చికిత్స",
    lang: "te",
    date: "1 August 2024",
    dateShort: "01 Aug 2024",
    dateISO: "2024-08-01",
    category: "Blog",
    image: "assets/images/blog4.png",
    webp: "assets/images/blog4.webp",
    width: 1281,
    height: 438,
    alt: "Telugu press coverage of rare intracoronary stent extraction treatment at Apollo OMR Hospital",
    excerpt: "విల్లివాకం న్యూస్: చెన్నై, అపోలో ఒఎంఆర్ హాస్పిటల్, అరుదైన మరియు అధిక-రిస్క్ ఇంట్రాకోరోనరీ స్టెంట్ వెలికితీత ప్రక్రియను విజయవంతంగా నిర్వహించడం ద్వారా గుండె శస్త్రచికిత్సలో అద్భుతమైన విజయాన్ని సాధించింది. బుధవారం ఏర్పాటైన సమావేశంలో సీనియర్ కన్సల్టెంట్- మెడిసిన్, డాక్టర్ కన్నయన్, కార్డియాల జిస్ట్ డాక్టర్ మధు ప్రభుద, సలీం(రోగి),...",
    homeExcerpt: "విల్లివాకం న్యూస్: చెన్నై, అపోలో ఒఎంఆర్ హాస్పిటల్, అరుదైన మరియు అధిక-రిస్క్ ఇంట్రాకోరోనరీ స్టెంట్ వెలికితీత ప్రక్రియను విజయవంతంగా నిర్వహించడం ద్వారా గుండె శస్త్రచికిత్సలో...",
  },
  {
    slug: "uyirukku-achcuruttalana-stent-ubagaram-mutiyavarai-kattha-marutthuvargal",
    url: "uyirukku-achcuruttalana-stent-ubagaram-mutiyavarai-kattha-marutthuvargal.html",
    title: "உயிருக்கு அச்சுறுத்தலான ஸ்டென்ட் உபகரணம்: முதியவரைக் காத்த மருத்துவர்கள்",
    lang: "ta",
    date: "1 August 2024",
    dateShort: "01 Aug 2024",
    dateISO: "2024-08-01",
    category: "Blog",
    image: "assets/images/blog7.png",
    webp: "assets/images/blog7.webp",
    width: 1423,
    height: 395,
    alt: "Tamil news report on life-saving stent device removal surgery for elderly patient at Apollo Hospital",
    excerpt: "இதய நாளத் தில் பொருத்தப்பட்ட ஸ்டென்ட் உபகரணத்தால் தொற்று பாதிப் புக்குள்ளாகி உயிருக்கு ஆபத்தான நிலையில் இருந்த முதியவருக்கு நுட்பமாக சிகிச்சையளித்து அப் பல்லோ மருத்துவக் குழுவினர் உயிர் காத்துள்ளனர். இதுதொடர்பாக மனை நிர்வாகிகள் கூறியதாவது: உயிருக்கு அச்சுறுத்தலான ஸ்டென்ட் உபகரணம்: முதியவரைக் காத்த மருத்துவர்கள் newvenusclinic.com 1...",
    homeExcerpt: "இதய நாளத் தில் பொருத்தப்பட்ட ஸ்டென்ட் உபகரணத்தால் தொற்று பாதிப் புக்குள்ளாகி உயிருக்கு ஆபத்தான நிலையில் இருந்த முதியவருக்கு நுட்பமாக சிகிச்சையளித்து அப் பல்லோ...",
  },
  {
    slug: "intracoronary-stent-surgery-dinakaran-tamil",
    url: "intracoronary-stent-surgery-dinakaran-tamil.html",
    title: "இதய நோயாளிக்குஇன்ட்ரா கரோனரி ஸ்டென்ட் பிரித்தெடுக்கும் அறுவை சிகிச்சை",
    lang: "ta",
    date: "1 August 2024",
    dateShort: "01 Aug 2024",
    dateISO: "2024-08-01",
    category: "Blog",
    image: "assets/images/blog2.png",
    webp: "assets/images/blog2.webp",
    width: 1130,
    height: 497,
    alt: "Tamil newspaper coverage of intracoronary stent extraction surgery at Apollo OMR by Dinakaran",
    excerpt: "ஓஎம்ஆரில் உள்ள அப்போலோ மருத்துவமனையில் 76 வயது நோயாளிக்கு இதயத்தில் இன்ட்ரா கரோனரி ஸ்டென்ட் பிரித்தெடுத்த அறுவை சிகிச்சை குறித்த பத்திரிகையாளர் சந்திப்பு நுங்கம்பாக்கத்தில் நடந்தது. இதில், சிகிச்சை பெற்ற சலீம், இதய அறுவை சிகிச்சை மருத்துவர் யூசுப், டாக்டர்கள் கல்யாணராமன், கண்ணையன், மது பிரபுதாஸ் கலந்துகொண்டனர். இதய...",
    homeExcerpt: "ஓஎம்ஆரில் உள்ள அப்போலோ மருத்துவமனையில் 76 வயது நோயாளிக்கு இதயத்தில் இன்ட்ரா கரோனரி ஸ்டென்ட் பிரித்தெடுத்த அறுவை சிகிச்சை குறித்த பத்திரிகையாளர் சந்திப்பு நுங்கம்பாக்கத்தில்...",
  },
  {
    slug: "complex-stent-extraction-performed-successfully",
    url: "complex-stent-extraction-performed-successfully.html",
    title: "Complex Stent Extraction Performed Successfully",
    lang: "en",
    date: "27 October 2023",
    dateShort: "27 Oct 2023",
    dateISO: "2023-10-27",
    category: "Blog",
    image: "assets/images/blog1.png",
    webp: "assets/images/blog1.webp",
    width: 1228,
    height: 457,
    alt: "News clipping: Complex Stent Extraction Performed Successfully at Apollo OMR Hospital Chennai",
    excerpt: "DOCTORS at Apollo OMR Hos- pital recently removed a stent, which led to intracoronary in- fection, from the coronary ar- tery of a 76-year-old patient with precision. It was a rare and high-risk intracoronary stent...",
    homeExcerpt: "DOCTORS at Apollo OMR Hos- pital recently removed a stent, which led to intracoronary in- fection, from the...",
  },
];

/* ─── Load More Logic ─────────────────────────────────────────── */
const PAGE_SIZE = 3;
const shownSlugs = new Set();
let page = 1;

function getPageParam() {
  const p = parseInt(new URLSearchParams(window.location.search).get("page"), 10);
  return isNaN(p) || p < 1 ? 1 : p;
}

function setPageParam(p) {
  const url = new URL(window.location.href);
  if (p <= 1) {
    url.searchParams.delete("page");
  } else {
    url.searchParams.set("page", p);
  }
  history.replaceState(null, "", url.toString());
}

function createBlogCard(post, isHome = false) {
  const heading = isHome ? "h3" : "h2";
  const excerpt = isHome ? post.homeExcerpt : post.excerpt;
  const langAttr = post.lang !== "en" ? ` lang="${post.lang}"` : "";
  return `
    <article class="article-card${isHome ? "" : " article-card--horizontal"}" data-slug="${post.slug}"${langAttr}>
      <div class="article-image">
        <a href="${post.url}" aria-label="${escapeAttr(post.title)}">
          <picture>
            <source srcset="${post.webp}" type="image/webp">
            <img src="${post.image}" alt="${escapeAttr(post.alt)}" width="${post.width}" height="${post.height}" loading="lazy">
          </picture>
        </a>
        <a href="blog-archive.html" class="article-category" lang="en">Blog</a>
      </div>
      <div class="article-content">
        <${heading}><a href="${post.url}">${escapeHtml(post.title)}</a></${heading}>
        <p class="article-excerpt"${langAttr}>${escapeHtml(excerpt)}</p>
        <a href="${post.url}" class="read-more" lang="en" aria-label="Read more: ${escapeAttr(post.title)}">Read More <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2.2" aria-hidden="true"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg></a>
      </div>
    </article>`;
}

function escapeHtml(str) {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function escapeAttr(str) {
  return str.replace(/"/g, "&quot;").replace(/'/g, "&#39;");
}

function renderBatch(grid, btn, statusEl) {
  const start = (page - 1) * PAGE_SIZE;
  const batch = BLOG_POSTS.slice(start, start + PAGE_SIZE).filter(
    (p) => !shownSlugs.has(p.slug)
  );
  batch.forEach((p) => {
    shownSlugs.add(p.slug);
    grid.insertAdjacentHTML("beforeend", createBlogCard(p));
  });
  page++;
  setPageParam(page - 1);

  const totalShown = shownSlugs.size;
  if (statusEl) {
    statusEl.textContent = `Showing ${totalShown} of ${BLOG_POSTS.length} articles`;
  }
  if (totalShown >= BLOG_POSTS.length) {
    if (btn) {
      btn.style.display = "none";
      btn.setAttribute("aria-disabled", "true");
    }
  }
}

if (typeof document !== "undefined") {
  document.addEventListener("DOMContentLoaded", () => {
    const grid = document.getElementById("articlesGrid");
    const btn = document.getElementById("loadMoreArticlesBtn");
    const statusEl = document.getElementById("articlesStatusText");

    if (!grid) return;

    // Clear static placeholder cards and render dynamically from data
    grid.innerHTML = "";
    page = 1;
    shownSlugs.clear();

    // Restore page state from URL (e.g. ?page=2)
    const targetPage = getPageParam();

    // Render all pages up to the target page
    for (let i = 0; i < targetPage; i++) {
      renderBatch(grid, btn, statusEl);
      if (shownSlugs.size >= BLOG_POSTS.length) break;
    }

    if (btn) {
      btn.addEventListener("click", () => {
        renderBatch(grid, btn, statusEl);
      });
    }
  });
}

if (typeof window !== "undefined") {
  window.BLOG_POSTS = BLOG_POSTS;
}
if (typeof module !== "undefined" && module.exports) {
  module.exports = { BLOG_POSTS, createBlogCard, PAGE_SIZE };
}



function setupHomeArticles() {
  const viewport = document.getElementById("homeArticlesGrid");
  if (!viewport) return;

  const previous = document.querySelector("[data-article-prev]");
  const next = document.querySelector("[data-article-next]");
  const total = BLOG_POSTS.length;
  const SPEED = 40; // pixels per second
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // Two identical copies make a seamless loop: when the track has moved one
  // full copy, the offset wraps back and the visible cards are the same.
  // The second copy is inert so keyboard focus and screen readers skip it.
  const cards = BLOG_POSTS.map((post) => createBlogCard(post, true));
  const clones = cards.map((html) => html.replace("<article ", "<article inert "));
  const track = document.createElement("div");
  track.className = "home-marquee-track";
  track.innerHTML = cards.join("") + clones.join("");

  viewport.removeAttribute("aria-live");
  viewport.classList.add("home-marquee");
  viewport.innerHTML = "";
  viewport.appendChild(track);

  let offset = 0;      // track position in px, kept within one copy
  let pending = 0;     // px still to glide after a Previous/Next click
  let stepPx = 0;      // distance of one card including the gap
  let setWidth = 0;    // distance of one full copy
  let paused = false;
  let visible = true;
  let last = null;

  function perView() {
    if (window.matchMedia("(max-width: 767px)").matches) return 1;
    if (window.matchMedia("(max-width: 992px)").matches) return 2;
    return 3;
  }

  function layout() {
    const gap = parseFloat(getComputedStyle(track).columnGap) || 0;
    const count = perView();
    const cardWidth = (viewport.clientWidth - gap * (count - 1)) / count;
    track.querySelectorAll(".article-card").forEach((card) => {
      card.style.width = cardWidth + "px";
    });
    stepPx = cardWidth + gap;
    setWidth = total * stepPx;
    offset = wrap(offset);
    track.style.transform = `translate3d(${offset}px,0,0)`;
  }

  function wrap(value) {
    return ((((value % setWidth) + setWidth) % setWidth) - setWidth);
  }

  function frame(now) {
    if (last === null) last = now;
    const dt = Math.min(now - last, 64) / 1000;
    last = now;

    if (!paused && visible && !reduceMotion) {
      offset -= SPEED * dt;
    }
    if (pending !== 0) {
      const move = pending * Math.min(1, dt * 7);
      offset -= move;
      pending -= move;
      if (Math.abs(pending) < 0.5) pending = 0;
    }
    offset = wrap(offset);
    track.style.transform = `translate3d(${offset}px,0,0)`;
    requestAnimationFrame(frame);
  }

  function pause() { paused = true; }
  function resume() { paused = false; }

  previous.disabled = false;
  next.disabled = false;
  previous.addEventListener("click", () => { pending -= stepPx; });
  next.addEventListener("click", () => { pending += stepPx; });

  // Pause only while the pointer or keyboard focus is on the cards themselves.
  viewport.addEventListener("mouseenter", pause);
  viewport.addEventListener("mouseleave", resume);
  viewport.addEventListener("focusin", pause);
  viewport.addEventListener("focusout", resume);

  // Stop moving the track while the section is off screen.
  if ("IntersectionObserver" in window) {
    new IntersectionObserver((entries) => {
      visible = entries[0].isIntersecting;
    }).observe(viewport);
  }

  window.addEventListener("resize", layout);
  layout();
  requestAnimationFrame(frame);
}

if (typeof document !== "undefined") {
  document.addEventListener("DOMContentLoaded", setupHomeArticles);
}
