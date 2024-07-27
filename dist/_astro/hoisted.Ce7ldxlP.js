document.addEventListener("DOMContentLoaded", function () {
  const l = document.getElementById("nav-toggle"),
    c = document.getElementById("nav-list"),
    n = document.getElementById("nav-overlay"),
    o = document.getElementById("search-toggle"),
    e = document.querySelector(".nav__search"),
    t = document.getElementById("search-toggle");
  function s() {
    return window.innerWidth <= 850;
  }
  function i() {
    s()
      ? (c.classList.toggle("active"),
        n.classList.toggle("active"),
        e.classList.remove("active"),
        (t.style.display = "block"))
      : (c.classList.remove("active"), n.classList.remove("active"));
  }
  function a() {
    s() &&
      (e.classList.toggle("active"),
      e.classList.contains("active")
        ? (t.style.display = "none")
        : (t.style.display = "block"));
  }
  l.addEventListener("click", function () {
    i();
  }),
    n.addEventListener("click", function () {
      i();
    }),
    o.addEventListener("click", function () {
      a();
    }),
    document.addEventListener("click", function (d) {
      d.target.closest(".nav__center") ||
        (e.classList.remove("active"), (t.style.display = "block"));
    }),
    e.addEventListener("focus", function () {
      t.style.display = "none";
    }),
    e.addEventListener("blur", function () {
      t.style.display = "block";
    });
});
