const displayEraseBtn = () => {
  let delBtn = document.getElementById("eraseBtn");
  let userSearch = document.getElementById("searchInput");
  if (userSearch.value !== "") {
    delBtn.style.display = "block";
  } else {
    delBtn.style.display = "none";
  }
  delBtn.addEventListener("click", function() {
    userSearch.value = "";
    delBtn.style.display = "none";
    userSearch.focus();
  });
};

export default displayEraseBtn;
