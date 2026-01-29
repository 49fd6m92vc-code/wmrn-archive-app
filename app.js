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
