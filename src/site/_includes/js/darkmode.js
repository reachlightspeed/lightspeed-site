if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
  document.documentElement.classList.add("mode-dark");
} else {
  document.documentElement.classList.remove("mode-dark");
}
