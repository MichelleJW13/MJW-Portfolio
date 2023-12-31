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
              clearInterval(typingInterval); 
          }
      }, speed);
  }

  const container = document.querySelector('.typing-container');
  const textToType = "\"The future belongs to those who believe in the beauty of their dreams.\" -  Eleanor Roosevelt";

  typeText(container, textToType, 125);
});



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
