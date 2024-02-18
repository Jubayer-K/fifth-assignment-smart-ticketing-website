const phoneNumberInput = document.getElementById('phone-number');
const nameInput = document.getElementById('passenger-name').value;

phoneNumberInput.addEventListener("keyup", function (event) {
    const text = event.target.value;
    const nextButton = document.getElementById('btn-next');
    if (text !== "") {
        nextButton.removeAttribute("disabled");
    } else {
        nextButton.setAttribute("disabled", true);
    }
  });


  const coupon = document.getElementById('coupon-input');
  coupon.addEventListener('keyup' , function (event){
    text = event.target.value;
    const applyButton = document.getElementById('btn-apply');
    if (text == "NEW15" || text == "Couple 20") {
        applyButton.removeAttribute("disabled");
    } else {
        applyButton.setAttribute("disabled", true);
    }
  })


  
