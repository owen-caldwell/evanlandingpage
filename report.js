const slideshow = document.querySelector('.reportWrapper');
const slides = Array.from(slideshow.children);
let currentIndex = 0;

function goToSlide(index) {
  currentIndex = index;
  const offset = -currentIndex * 100;
  slideshow.style.transform = `translateX(${offset}%)`;
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % slides.length;
  
  goToSlide(currentIndex);
}

setInterval(nextSlide, 5000); // Auto scroll every 5 seconds