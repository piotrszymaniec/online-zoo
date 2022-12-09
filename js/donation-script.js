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
