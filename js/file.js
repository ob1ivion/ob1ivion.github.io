document.addEventListener("DOMContentLoaded", () => {
  const loader = document.getElementById("page-loader");

  document.querySelectorAll("a").forEach(link => {
    const href = link.getAttribute("href");

    if (href && href.includes("3ds.html")) {
      link.addEventListener("click", e => {
        e.preventDefault();
        loader.classList.add("active");

        setTimeout(() => {
          window.location.href = href;
        }, 500); // short, smooth delay
      });
    }
  });
});
