// Get the load bar element
const loadBar = document.querySelector('.load-bar');

// Listen for the scroll event
window.addEventListener('scroll', () => {
  // Calculate the percentage of the page that has been scrolled
  const percentScrolled = (window.scrollY / (document.body.offsetHeight - window.innerHeight)) * 100;

  // Update the width of the load bar
  loadBar.style.width = percentScrolled + '%';
});