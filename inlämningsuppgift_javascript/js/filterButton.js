const showHide = () => {
  let filterDisplay = document.getElementById("filterNav");
  let filterBtn = document.getElementById("filterBtn");

  if (filterDisplay.style.opacity === "1") {
    filterDisplay.style.opacity = "0";
    filterDisplay.style.transition = ".6s";

    filterBtn.style.transform = "rotate( 0deg)";
    filterBtn.style["-webkit-transform"] = "rotate(0deg)";
    filterBtn.style.transition = ".6s";
  } else {
    filterDisplay.style.opacity = "1";
    filterDisplay.style.transition = "1.5s";

    filterBtn.style.transform = "rotate(180deg)";
    filterBtn.style["-webkit-transform"] = "rotate(180deg)";
    filterBtn.style.transition = ".6s";
  }
};

export default showHide;
