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



  console.log(isValid(emailCandidate))

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

// function pickADonation() {


// }
const selectedCheckbox = document.querySelectorAll(".donation>input")[2]
selectedCheckbox.checked = true;
document.querySelector(".payment").value = '1000';
document.querySelectorAll(".donation>radio").forEach((checkbox, index) => {
  //sprawdzic liste wszystkich ktore maja ... co?
  //wpisac zawartosc do value
  // if (index == 2) {
  //   checkbox.checked = true;
  //   document.querySelector(".payment").value = checkbox.value;
  // ustaw na checked i 
  // przepisz value do another amount input
  // }
  //albo deterministycznie - odrauz ustawic i wpisac z js
});

document.querySelectorAll(".donation>input").forEach(checkbox => {

  checkbox.addEventListener('click', (checkbox) => {
    // checkbox.checked = true; 
    //w sumie to samo sie zrobi poprzez interfejs
    console.log(document.querySelector(".payment"))
    document.querySelector(".payment").value = checkbox.value;

  })
})