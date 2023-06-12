// Smooth scroll when the button is clicked
document.querySelector('.scroll-button').addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('Services'));
    target.scrollIntoView({ behavior: 'smooth' });
  });
  