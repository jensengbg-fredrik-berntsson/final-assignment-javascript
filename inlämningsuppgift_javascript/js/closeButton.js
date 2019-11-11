const closeLightbox = () => {
  const secLight = document.getElementById("lightboxSec");
  if (secLight.style.display === "flex") {
    secLight.style.display = "none";
  }
};

export default closeLightbox;
