
// MOBILE NAVIGATION
const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('#navigation');

if (toggle && nav) {
  toggle.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(open));
  });
}

// COPYRIGHT YEAR
const year = document.querySelector('#year');

if (year) {
  year.textContent = new Date().getFullYear();
}

// HOMEPAGE IMAGE SLIDER
const hero = document.querySelector('.hero');
const previous = document.querySelector('.slider-prev');
const next = document.querySelector('.slider-next');

const slides = [
  {
    image: "https://images.unsplash.com/photo-1438232992991-995b7058bbb3?auto=format&fit=crop&w=1800&q=85",
    title: "A place of faith, worship and fellowship."
  },
  {
    image: "https://images.unsplash.com/photo-1507692049790-de58290a4334?auto=format&fit=crop&w=1800&q=85",
    title: "Growing together in faith and love."
  },
  {
    image: "https://images.unsplash.com/photo-1519491050282-cf00c82424b4?auto=format&fit=crop&w=1800&q=85",
    title: "Join us in prayer and worship."
  }
];

let currentSlide = 0;

function showSlide(index) {
  currentSlide = (index + slides.length) % slides.length;

  hero.style.backgroundImage =
    `linear-gradient(90deg,rgba(6,25,44,.91),rgba(6,25,44,.56)), url('${slides[currentSlide].image}')`;
}

if (hero && previous && next) {
  previous.addEventListener('click', () => {
    showSlide(currentSlide - 1);
  });

  next.addEventListener('click', () => {
    showSlide(currentSlide + 1);
  });

  showSlide(0);

  setInterval(() => {
    showSlide(currentSlide + 1);
  }, 6000);
}
