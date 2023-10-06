/*Header Animation*/
const profileImage = document.getElementById('profile-image');

function animateImage() {
  profileImage.style.transform = 'translateY(-10px) scale(1.10)';
  setTimeout(() => {
    profileImage.style.transform = 'translateY(0) scale(1)';
  }, 1000);
}

/* Dark Mode */

document.addEventListener('DOMContentLoaded', function () {
  const darkModeToggle = document.getElementById('darkModeToggle');
  const body = document.body;

  darkModeToggle.addEventListener('click', toggleDarkMode);

  function toggleDarkMode() {
    body.classList.toggle('dark-mode');
    darkModeToggle.textContent = body.classList.contains('dark-mode') ? 'Light Mode' : 'Dark Mode';
  }
});



/*Slide-In Animation*/

const textElement = document.querySelector('.slide-in-text');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      textElement.classList.add('active');
      observer.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.5
});

observer.observe(textElement);

// Lightbox

const lightbox = document.querySelector('.lightbox');
const lightboxImage = document.getElementById('lightbox-image');
const lightboxCaption = document.getElementById('lightbox-caption');
const closeLightbox = document.querySelector('.close-lightbox');
const lightboxTriggers = document.querySelectorAll('.lightbox-trigger');

function openLightbox(event) {
    event.preventDefault();
    const imageSrc = event.currentTarget.getAttribute('href');
    const caption = event.currentTarget.getAttribute('data-caption');
    
    lightboxImage.setAttribute('src', imageSrc);
    lightboxCaption.textContent = caption;
    
    lightbox.style.display = 'block';
}

function closeLightboxHandler(event) {
    if (event.target === closeLightbox) {
        lightbox.style.display = 'none';
        event.stopPropagation();
        event.preventDefault();
    }
}

lightboxTriggers.forEach(trigger => {
    trigger.addEventListener('click', openLightbox);
});

closeLightbox.addEventListener('click', closeLightboxHandler);
lightbox.addEventListener('click', closeLightboxHandler);
