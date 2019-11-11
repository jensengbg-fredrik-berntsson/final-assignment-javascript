const clearField = () => {
  let delBtn = document.getElementById("eraseBtn");
  let userSearch = (document.getElementById("searchInput").value = "");
  delBtn.style.display = "none";
};

export default clearField;
