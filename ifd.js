const accordionHeaders = document.querySelectorAll('.accordion-header');

accordionHeaders.forEach(header => {
  header.addEventListener('click', () => {
    const accordionContent = header.nextElementSibling;
    accordionContent.classList.toggle('active');
  });
});

const slideshow_A= document.querySelector('.slideshow_A');

const currentImageIndex = 0;

const nextImage = () => {
  currentImageIndex++;
  if (currentImageIndex >= slideshow_A.querySelectorAll('img').length) {
    currentImageIndex = 0;
  }

  slideshow_A.querySelectorAll('img')[currentImageIndex].classList.add('active');
  slideshow_A.querySelectorAll('img')[currentImageIndex - 1].classList.remove('active');
};

const prevImage = () => {
  currentImageIndex--;
  if (currentImageIndex < 0) {
    currentImageIndex = slideshow.querySelectorAll('img').length - 1;
  }

  slideshow_A.querySelectorAll('img')[currentImageIndex].classList.add('active');
  slideshow_A.querySelectorAll('img')[currentImageIndex + 1].classList.remove('active');
};

document.querySelector('.next').addEventListener('click', nextImage);
document.querySelector('.prev').addEventListener('click', prevImage);
</script>
<script>
const slideshow= document.querySelector('.slideshow');

const carousel = document.querySelector('.carousel');
const images = carousel.querySelectorAll('img');
const prevButton = carousel.querySelector('.prev');
const nextButton = carousel.querySelector('.next');

let currentImageIndex = 0;

prevButton.addEventListener('click', showPrevImage);
nextButton.addEventListener('click', showNextImage);

function showPrevImage() {
  images[currentImageIndex].classList.remove('active');
  images[currentImageIndex].classList.add('next');
  
  currentImageIndex--;
  
  if (currentImageIndex < 0) {
    currentImageIndex = images.length - 1;
  }
  
  images[currentImageIndex].classList.remove('prev');
  images[currentImageIndex].classList.add('active');
}

function showNextImage() {
  images[currentImageIndex].classList.remove('active');
  images[currentImageIndex].classList.add('prev');
  
  currentImageIndex++;
  
  if (currentImageIndex >= images.length) {
    currentImageIndex = 0;
  }
  
  images[currentImageIndex].classList.remove('next');
  images[currentImageIndex].classList.add('active');
}

document.querySelectorAll(".accordion-header").forEach(function(header) {
  header.addEventListener("click", function() {
    const content = header.nextElementSibling;
    content.classList.toggle("active");
  });
});

</script>
