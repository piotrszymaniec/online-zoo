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