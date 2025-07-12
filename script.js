
const row = document.getElementById("scrollable-row");

document.querySelector(".scroll-btn.left").addEventListener("click", () => {
    row.scrollBy({
        left: -300,
        behavior: "smooth"
    });
});

document.querySelector(".scroll-btn.right").addEventListener("click", () => {
    row.scrollBy({
        left: 300,
        behavior: "smooth"
    });
});
  document.querySelectorAll('.faqbox').forEach((box) => {
    box.addEventListener('click', () => {
      box.classList.toggle('open');
    });
  });