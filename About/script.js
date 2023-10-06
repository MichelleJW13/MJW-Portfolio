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


/*Typing Container*/

document.addEventListener('DOMContentLoaded', function() {
  function typeText(element, text, speed) {
      let charIndex = 0;

      const typingInterval = setInterval(() => {
          try {
              if (charIndex < text.length) {
                  element.textContent += text.charAt(charIndex);
                  charIndex++;
              } else {
                  clearInterval(typingInterval);
              }
          } catch (error) {
              console.error("An error occurred:", error);
              clearInterval(typingInterval); // Stop the interval on error
          }
      }, speed);
  }

  const container = document.querySelector('.typing-container');
  const textToType = "\"Creativity is contagious, pass it on\" - Albert Einstein";

  typeText(container, textToType, 150);
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

/* Fetch Asynchronous Pup */

const fetchButton = document.getElementById("fetch-button");
const asyncImage = document.getElementById("async-image");

fetchButton.addEventListener("click", () => {
  asyncImage.style.opacity = 0;
  setTimeout(() => {
    asyncImage.src = "https://assets.codepen.io/10052609/shiloh-vector1-fetch.png";
    asyncImage.style.opacity = 1;
  }, 300); 
});
