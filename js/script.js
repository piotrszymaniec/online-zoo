$donationCheckboxes = document.querySelectorAll(".donation > input");
$pickerWidget = document.querySelector(".picker-widget");
$anotherAmountWidget = document.querySelector(".payment");


//set 3rd (1000$) donation as default
$donationCheckboxes[2].checked = true
$anotherAmountWidget.value = $donationCheckboxes[2].value;

$donationCheckboxes.forEach(el => el.addEventListener('input', (e) => {
  const donationValue = e.target.value
  $anotherAmountWidget.value = donationValue;
}))


$anotherAmountWidget.addEventListener('keyup', (e) => {
  //check if value matches any amount in donations widget and select apropriate
  const amountValue = e.target.value
  const donations = Array.from($donationCheckboxes)

  const arr = donations.filter(el => el.value === amountValue)
  if (arr.length === 1) {
    arr[0].checked = true;
  }
})



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
