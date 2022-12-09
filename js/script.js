const form = document.querySelector(".subscribe form");
form.addEventListener("submit", (e) => {
  e.preventDefault()
  const submit = form.querySelector("button[type='submit']")
  const input = form.querySelector("#email");
  const emailCandidate = input.value
  const regexEmail = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/
  const isValid = (email) => email
    .toLowerCase()
    .match(regexEmail);


  if (regexEmail.test(emailCandidate)) {
    console.log(regexEmail.test(emailCandidate));
    input.classList.remove("mistake")
    submit.classList.remove("mistake")
  } else {
    input.classList.add("mistake")
    submit.classList.add("mistake")
  }
});

function toggleMobileMenu() {
  const header = document.querySelector("header")
  header.classList.toggle("mobile-menu")
  const icon = document.querySelector("header .container .burger")
  if (header.classList.contains('mobile-menu')) {
    icon.style.background = 'url(/images/icons/burger-menu-cross.svg) no-repeat';
  } else {
    icon.style.background = 'url(/images/icons/burger-menu.svg) no-repeat';
  }
}


//TESTIMONIALS




const isTabletView = matchMedia("(min-width: 640px").matches;

const card = document.querySelectorAll(".testimonial-card")[0]
const cardContainer = document.querySelector(".testimonial-cards")

function getStyleValue(el, styleProperty) {
  return window.getComputedStyle(el).getPropertyValue(styleProperty)
}

const cardWidth = getStyleValue(card, "width").slice(0, -2) //cut 'px' pixels - i dont check for em etc
const cardGap = getStyleValue(cardContainer, "gap").slice(0, -2)
const moveCardBy = Number.parseInt(cardWidth) + Number.parseInt(cardGap)

function moveCards(e) {
  const current = e.target.value
  // moveBy = moveCardBy
  moveBy = 298
  cardContainer.style.transform = `translateX(-${current * moveBy}px)`;
  console.log(cardContainer)
  console.log(current)
}

const slider = document.querySelector('.testimonial-slider>input');
slider.addEventListener('input', moveCards)

function calcMove(e) {
  let position = 1
  let currPosition = e.target.value


}
let moveBy = 0
const browserWidth = window.visualViewport.width
//!!! important to be equal to css @media
if (browserWidth > 1160) {
  //4 testimonial cards
  moveBy = 20
} else {
  //3 testimonial cards
}







function handleChange() {
  const step = matchMedia("(max-width: 1000px)").matches ? 327 : 297;
  const input = document.querySelector(".progress_wrapper input");
  document.querySelector(".testimonials .container").style.transform = `translateX(-${input.value * step}px)`;
}




function testimonialsCarousel() {
  // handle change range
  const small = matchMedia("(min-width: 1001px)");
  document.querySelector(".progress_wrapper input").addEventListener("input", handleChange);
  small.addEventListener("change", handleChange);
}