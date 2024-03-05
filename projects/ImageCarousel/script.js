////////////////////////////////////////
/// DOM
///////////////////////////////////////

// Select all slides
const slides = document.querySelectorAll('.slide');
// select next slide button
const nextSlide = document.querySelector('.btn-next');
// select next slide button
const prevSlide = document.querySelector('.btn-prev');
// Indicator Buttons
const indicatorWrapper = document.querySelector('.indicators');

// current slide counter
let curSlide = 0;
// maximum number of slides
let maxSlide = slides.length - 1;

// loop through slides and set each slides translateX
slides.forEach((slide, indx) => {
  slide.style.transform = `translateX(${indx * 100}%)`;

  const indicator = generateIndicator();
  indicatorWrapper.appendChild(indicator);
});

// Auto Slide
let autoSlideInterval = startAutoSlide();

// add event listener and navigation functionality
nextSlide.addEventListener('click', function () {
  clearInterval(autoSlideInterval);
  moveToNextSlide();
  autoSlideInterval = startAutoSlide(); // Restart auto sliding
});

// add event listener and navigation functionality
prevSlide.addEventListener('click', function () {
  clearInterval(autoSlideInterval);
  moveToPrevSlide();
  autoSlideInterval = startAutoSlide(); // Restart auto-sliding
});

// Get indicator buttons
const indicators = document.querySelectorAll('.btn-indicator');
// add event listener to indicators
indicators.forEach((indicator, index) => {
  indicator.addEventListener('click', () =>
    addListenerToIndicator(index)
  );
});

// /////////////////////////////////////
/// Functions
// ////////////////////////////////////

function updateIndicators() {
  indicators.forEach((indicator, index) => {
    if (index === curSlide) {
      indicator.classList.add('btn-indicator--active');
    } else {
      indicator.classList.remove('btn-indicator--active');
    }
  });
}

function addListenerToIndicator(index) {
  // Move to the selected slide when an indicator is clicked
  curSlide = index;
  // Move slides to the selected index
  slides.forEach((slide, i) => {
    slide.style.transform = `translateX(${100 * (i - curSlide)}%)`;
  });
  // Update indicators
  updateIndicators();
}
function generateIndicator() {
  const indicator = document.createElement('button');
  indicator.setAttribute('type', 'button');
  indicator.classList.add('btn-indicator');
  return indicator;
}

function moveToPrevSlide() {
  // check if current slide is the first and reset current slide to last
  if (curSlide === 0) {
    curSlide = maxSlide;
  } else {
    curSlide--;
  }

  // move slide by 100%
  slides.forEach((slide, indx) => {
    slide.style.transform = `translateX(${100 * (indx - curSlide)}%)`;
  });
  // Update the indicators
  updateIndicators();
}

function moveToNextSlide() {
  // check if current slide is the last and reset current slide
  if (curSlide === maxSlide) {
    curSlide = 0;
  } else {
    curSlide++;
  }

  //   move slide by -100%
  slides.forEach((slide, indx) => {
    slide.style.transform = `translateX(${100 * (indx - curSlide)}%)`;
  });
  updateIndicators();
}

function startAutoSlide() {
  return setInterval(moveToNextSlide, 3000);
}

// Initial update of indicators
updateIndicators();
