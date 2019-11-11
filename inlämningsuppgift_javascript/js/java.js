import closeLightbox from "./closeButton.js";
import showHide from "./filterButton.js";
import displayEraseBtn from "./displayEraseBtn.js";
import toTop from "./toTop.js";

// Display filters and rotate button
document.getElementById("filterBtn").addEventListener("click", showHide);

//var for function getData()
const api_key = "19d3e6e0acfe9c438f368e2c2bab1c5d"; // flickr-key
let quantity = document.getElementById("numberImg");
let userSearch = document.getElementById("searchInput"); // input search

//After you start typing an x shows up. if pressed, clear input and hide erase button
userSearch.addEventListener("keyup", function() {
  displayEraseBtn();
});

//function for getting the URLs
async function getData() {
  const URL = `https://www.flickr.com/services/rest/?method=flickr.photos.search&media=photos&api_key=${api_key}&per_page=${encodeURIComponent(
    quantity.value
  )}&text=${encodeURIComponent(
    userSearch.value
  )}&tag_mode=all&sort=relevance&sort=interestingness-desc&color_codes=2&format=json&nojsoncallback=1`;

  let response = await fetch(URL, { method: "GET" });
  let data = await response.json();
  let myObject = await data;
  let array = myObject.photos.photo;

  createUrl(array);
  //console.log("array " + array);
}

//button for starting the function getData()
const searchButton = document.getElementById("searchBtn");
searchButton.addEventListener("click", getData);

//start function getData() by pressing enter button while focus on input search field
userSearch.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
    getData();
  }
});
//start function getDatan() by pressing enter while focus on the number-field
quantity.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
    getData();
  }
});

//var for choosing what size you want on result images
let imgSize = document.getElementById("sizeImg");

//function for recieving each -url
const createUrl = array => {
  let imgArray = array.map(index => {
    return `https://farm${index.farm}.staticflickr.com/${index.server}/${index.id}_${index.secret}_${imgSize.value}.jpg`;
  });

  displayGallery(imgArray);
  // console.log("imgArray " + imgArray);
};

//function for showing the result images
const displayGallery = imgArray => {
  // Older img getting deleted before creating new ones
  document.querySelectorAll(".result-div").forEach(img => img.remove());

  let showResult = document.getElementById("result");

  for (let i = 0; i < imgArray.length; i++) {
    const newDiv = document.createElement("div");
    const newImage = document.createElement("img");
    newDiv.className = "result-div";
    showResult.appendChild(newDiv);
    newImage.src = imgArray[i];
    newImage.className = "result-img";
    newDiv.appendChild(newImage);

    newImage.addEventListener("click", function(event) {
      lightbox(event);
    });
  }
};

// function for showing toTop button as soon as page is scrolled.
window.onscroll = function() {
  toTop();
};

// function lightbox
const lightbox = event => {
  const imgLight = document.getElementById("lightboxImg");
  const secLight = document.getElementById("lightboxSec");

  imgLight.src = event.srcElement.attributes[0].value.replace(
    "_" + imgSize.value,
    "_b"
  );
  secLight.style.display = "flex";
  secLight.addEventListener("click", function() {
    this.style.display = "none";
  });
};

//close lightbox button
document.getElementById("closeBtn").addEventListener("click", closeLightbox);
