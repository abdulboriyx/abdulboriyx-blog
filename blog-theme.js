(function () {
  var root = document.documentElement;
  var key = "ravia-theme";
  var stored = null;

  try {
    stored = window.localStorage.getItem(key);
  } catch (error) {
    stored = null;
  }

  if (stored === "light") {
    root.classList.add("ravia-light");
  }

  function isUzbekPage() {
    return document.documentElement.lang === "uz" || window.location.pathname.indexOf("blog-posts-uz") !== -1 || window.location.pathname.indexOf("index-uz") !== -1;
  }

  function isIndexPage() {
    return document.body.classList.contains("blog-index");
  }

  function pathPrefix() {
    return window.location.pathname.indexOf("/blog-posts") !== -1 ? "../" : "";
  }

  function normalizeNav() {
    var nav = document.querySelector(".navbar-list");
    var name = document.querySelector(".name-blog");
    if (!nav || !name) return;

    var uz = isUzbekPage();
    var prefix = pathPrefix();
    var home = prefix + (uz ? "index-uz.html" : "index.html");
    var languageHref = prefix + (uz ? "index.html" : "index-uz.html");
    var languageLabel = uz ? "English" : "Uzbek";

    name.href = home;
    name.textContent = isIndexPage() ? "Wesley's Theory." : "Index";

    nav.innerHTML = "";
    [
      ["About", "https://x.com/abdulboriyx19", ""],
      [uz ? "O'qish" : "Studies", prefix + "learning/", ""],
      [languageLabel, languageHref, "link-logo"]
    ].forEach(function (item) {
      var li = document.createElement("li");
      li.className = "navbar-list-list";
      var a = document.createElement("a");
      a.textContent = item[0];
      a.href = item[1];
      if (item[2]) a.className = item[2];
      li.appendChild(a);
      nav.appendChild(li);
    });
  }

  function syncLabel(button) {
    var isLight = root.classList.contains("ravia-light");
    button.textContent = isLight ? "Dark" : "Light";
    button.setAttribute("aria-label", isLight ? "Switch to dark mode" : "Switch to light mode");
  }

  function mountToggle() {
    normalizeNav();
    var nav = document.querySelector(".navbar-list");
    if (!nav || nav.querySelector(".theme-toggle")) return;

    var item = document.createElement("li");
    item.className = "navbar-list-list";

    var button = document.createElement("button");
    button.type = "button";
    button.className = "theme-toggle";
    syncLabel(button);

    button.addEventListener("click", function () {
      var isLight = root.classList.toggle("ravia-light");
      try {
        window.localStorage.setItem(key, isLight ? "light" : "dark");
      } catch (error) {}
      syncLabel(button);
    });

    item.appendChild(button);
    nav.appendChild(item);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", mountToggle);
  } else {
    mountToggle();
  }
})();
