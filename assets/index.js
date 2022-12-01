const navToggle = document.querySelector('.nav__toggle');

    navToggle.addEventListener('click', () => {
      document.body.classList.toggle('nav-open');
    });

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
};


function reveal() {
  var reveals = document.querySelectorAll(".reveal");
  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 50;
    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
};

window.addEventListener("scroll", reveal);

reveal();