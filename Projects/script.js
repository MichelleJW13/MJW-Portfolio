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

/* PDf Viewer */

function loadPDFViewer() {
  const pdfUrl = 'https://assets.codepen.io/10052609/projectPAWS-presentation1.pdf';
  const pdfContainer = document.getElementById('pdf-container');

  fetch(pdfUrl)
      .then(response => response.arrayBuffer())
      .then(data => {
          pdfjsLib.getDocument(data).promise
              .then(pdfDoc => {
                  pdfDoc.getPage(1).then(page => {
                      const viewport = page.getViewport({ scale: 1.5 });
                      const canvas = document.createElement('canvas');
                      const context = canvas.getContext('2d');
                      canvas.height = viewport.height;
                      canvas.width = viewport.width;
                      pdfContainer.innerHTML = ''; // Clear previous content
                      pdfContainer.appendChild(canvas);

                      page.render({ canvasContext: context, viewport });
                  });
              })
              .catch(error => console.error('Error loading PDF:', error));
      });
}

document.addEventListener('DOMContentLoaded', function () {

  const loadPDFButton = document.getElementById('load-pdf-button');
  if (loadPDFButton) {
      loadPDFButton.addEventListener('click', loadPDFViewer);
  }

 
  loadPDFViewer();
});

/* PDF Buttons */
let pdfDoc = null;
let pageNum = 1;
const scale = 1.5;

function renderPage(pageNumber) {
  pdfDoc.getPage(pageNumber).then(page => {
      const canvas = document.createElement('canvas');
      const context = canvas.getContext('2d');
      const viewport = page.getViewport({ scale });

      canvas.height = viewport.height;
      canvas.width = viewport.width;

      pdfContainer.innerHTML = '';
      pdfContainer.appendChild(canvas);

      page.render({ canvasContext: context, viewport });
  });
}

function prevPage() {
  if (pageNum <= 1) return;
  pageNum--;
  renderPage(pageNum);
}

function nextPage() {
  if (pageNum >= pdfDoc.numPages) return;
  pageNum++;
  renderPage(pageNum);
}

async function loadPDF(url) {
  const loadingTask = pdfjsLib.getDocument(url);
  pdfDoc = await loadingTask.promise;
  renderPage(pageNum);
}

loadPDF('https://assets.codepen.io/10052609/projectPAWS-presentation1.pdf');