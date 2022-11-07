const form = document.querySelector("form");
form.addEventListener("submit",(e) => {
  e.preventDefault()
  const submit = document.querySelector("button[type='submit']")
  const input = document.querySelector("#email");
  const text = input.value
  const isValid = (email) => email
    .toLowerCase()
    .match(
      /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
    );
    if (!isValid(text)) {
      input.classList.add("mistake")
      submit.classList.toggle("mistake")
    } else {
      input.classList.remove("mistake")
      submit.classList.remove("mistake")
    }
});