/* =========================
   WMRN ARCHIVE – GLOBAL APP LOGIC
   ========================= */

/* =========================
   THEME HANDLING
   ========================= */

(function applyTheme() {
  const savedTheme = localStorage.getItem("theme") || "system";

  // Clean slate
  document.body.classList.remove("theme-light", "theme-dark");

  if (savedTheme === "light") {
    document.body.classList.add("theme-light");
  }

  if (savedTheme === "dark") {
    document.body.classList.add("theme-dark");
  }

  // If "system", we intentionally add NOTHING
  // CSS @media (prefers-color-scheme) handles it
})();

/* =========================
   OPTIONAL: DEBUG LOG
   ========================= */

console.log("WMRN Archive loaded · Theme:", localStorage.getItem("theme") || "system");

/* =========================
   BOTTOM NAV HIDE-ON-SCROLL
   (NAV ONLY — SAFE)
   ========================= */

(function () {
  const nav = document.getElementById("bottomNav");
  if (!nav) return;

  let lastY = window.scrollY;
  let ticking = false;

  function onScroll() {
    const y = window.scrollY;
    const delta = y - lastY;

    // Prevent flicker at the very top
    if (y <= 10) {
      nav.classList.remove("nav-hidden");
    } else if (Math.abs(delta) > 6) {
      if (delta > 0) {
        nav.classList.add("nav-hidden");   // scrolling down
      } else {
        nav.classList.remove("nav-hidden"); // scrolling up
      }
    }

    lastY = y;
    ticking = false;
  }

  window.addEventListener(
    "scroll",
    function () {
      if (!ticking) {
        window.requestAnimationFrame(onScroll);
        ticking = true;
      }
    },
    { passive: true }
  );
})();