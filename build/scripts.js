let currentIndex = 0;
const slides = document.querySelectorAll('.ad-slide');
const dots = document.querySelector('.slider-dots');

// Create dots dynamically
slides.forEach((_, index) => {
  const dot = document.createElement('div');
  dot.addEventListener('click', () => switchSlide(index));
  dots.appendChild(dot);
});

function switchSlide(index) {
  slides[currentIndex].classList.remove('active');
  dots.children[currentIndex].classList.remove('active');
  currentIndex = index;
  slides[currentIndex].classList.add('active');
  dots.children[currentIndex].classList.add('active');
}

// Auto-slide functionality
setInterval(() => {
  const nextIndex = (currentIndex + 1) % slides.length;
  switchSlide(nextIndex);
}, 5000);

// Initialize active states
switchSlide(0);
