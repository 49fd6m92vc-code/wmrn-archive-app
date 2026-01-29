/* =========================
   GLOBAL THEME LOADER
   ========================= */

(function () {
  const darkMode = localStorage.getItem("darkMode");

  if (darkMode === "on") {
    document.documentElement.classList.add("dark");
    document.body.classList.add("dark");
  }
})();

// Reserved for future enhancements
console.log("WMRN Archive app loaded");
