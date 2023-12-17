document.addEventListener('DOMContentLoaded', function () {
  const progressBar = document.querySelector('.progress-bar');

  function updateProgressBar() {
    const scrollPosition = window.scrollY;
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;

    const progress = (scrollPosition / (documentHeight - windowHeight)) * 100;
    progressBar.style.width = `${progress}%`;

    // If the user has reached the end, fill the progress bar
    if (progress >= 100) {
      progressBar.style.width = '100%';
    }
  }
  console.log('Working');
  window.addEventListener('scroll', updateProgressBar);
});
