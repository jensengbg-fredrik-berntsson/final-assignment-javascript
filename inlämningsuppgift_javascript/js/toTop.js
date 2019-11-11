let toTopBtn = document.getElementById("toTopBtn");
let userSearch = document.getElementById("searchInput");

let prevScrollpos = window.pageYOffset;
const toTop = () => {
  let currentScrollPos = window.pageYOffset;

  toTopBtn.addEventListener("click", function() {
    toTopBtn.style.display = "none";
    toTopBtn.style.transition = "0.5s";
    userSearch.scrollIntoView({
      behavior: "smooth",
      block: "end",
      inline: "nearest"
    });
  });
  if (prevScrollpos < currentScrollPos) {
    toTopBtn.style.display = "block";
  }
  prevScrollpos = currentScrollPos;
};
export default toTop;
