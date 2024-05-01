function showImage(index) {
  // Get the carousel and the list of slides
  const carousel = document.querySelector('#carouselExample');
  const slides = carousel.querySelectorAll('.carousel-item');

  // Set the active slide
  slides.forEach((slide, i) => {
    if (i === index) {
      slide.classList.add('active');
    } else {
      slide.classList.remove('active');
    }
  });

  // Update the previous and next buttons
  const prevButton = carousel.querySelector('.carousel-control-prev');
  const nextButton = carousel.querySelector('.carousel-control-next');
  prevButton.setAttribute('data-bs-slide-to', index - 1);
  nextButton.setAttribute('data-bs-slide-to', index + 1);
}

window.addEventListener('load', () => {
  showImage(0);
});


const imageContainers = document.querySelectorAll('.image-container');

    imageContainers.forEach(imageContainer => {
      imageContainer.addEventListener('click', () => {
        imageContainers.forEach(imgContainer => {
          imgContainer.classList.remove('clicked');
        });
        imageContainer.classList.add('clicked');
      });
    });
