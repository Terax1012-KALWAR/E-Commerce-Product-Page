const imageElement = document.getElementById("product-image");

// ✅ You can use your own local images or placeholder images here
const images = [
  "images/img2.png",
  "images/img3.png"
];

let currentIndex = 0;

// ✅ Set first image on page load
imageElement.src = images[currentIndex];

// 🔁 Carousel Buttons
document.getElementById("next-btn").addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % images.length;
  imageElement.src = images[currentIndex];
});

document.getElementById("prev-btn").addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  imageElement.src = images[currentIndex];
});

// 🔘 Toggle Product Details
const toggleBtn = document.getElementById("toggle-details");
const detailsSection = document.querySelector(".more-details");

toggleBtn.addEventListener("click", () => {
  const isVisible = detailsSection.style.display === "block";
  detailsSection.style.display = isVisible ? "none" : "block";
  toggleBtn.textContent = isVisible ? "Show More Details" : "Hide Details";
});
