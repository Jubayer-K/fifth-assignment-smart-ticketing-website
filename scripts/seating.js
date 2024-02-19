function setInnerText(id, value) {
  document.getElementById(id).innerText = value;
}

const allSeatButton = document.getElementsByClassName("btn-seat-select");
let seatCount = 0;
let seatCountDecrease = 40;

const totalPriceStr = document.getElementById("total-price").innerText;
let totalPrice = parseInt(totalPriceStr);
const grandTotalStr = document.getElementById("grand-total").innerText;
let grandTotal = parseInt(grandTotalStr);
const perTicketPrice = 550;

const couponCodes = {
  new15: 0.15,
  "couple 20": 0.2,
};
function applyCoupon() {
    const couponInputValue = document.getElementById("coupon-input").value;
    const couponCode = couponCodes[couponInputValue.toLowerCase()];
    const discountedPrice = totalPrice * couponCode;
    console.log(discountedPrice);
    const discountAmount = document.getElementById("discount-price");
    discountAmount.innerText = '-' + discountedPrice;
    const couponSection = document.getElementById("coupon-section");
    const DiscountSection = document.getElementById("discount-section");

    grandTotal = totalPrice - discountedPrice;
    document.getElementById("grand-total").innerText = grandTotal;
    couponSection.classList.add("hidden");
    DiscountSection.classList.remove("hidden");
}

function unselectedSeatDisabled() {
  for (const button of allSeatButton) {
     button.setAttribute("disabled", true);
  }
}

for (const button of allSeatButton) {
  button.addEventListener("click", function (event) {
    event.target.setAttribute("disabled", true);
    const alert = document.getElementById("alert");
    event.target.style.background = "#1DD100";
    event.target.style.color = "white";
    const seatNum = event.target.innerText;
    seatCount++;
    setInnerText("seat-count", seatCount);
    seatCountDecrease--;
    setInnerText("seat-count-decrease", seatCountDecrease);

    const selectedSeatContainer = document.getElementById(
      "selected-seat-container"
    );
    const div = document.createElement("div");
    const p = document.createElement("p");
    p.innerText = seatNum;
    const p2 = document.createElement("p");
    p2.innerText = "Economy";
    const p3 = document.createElement("p");
    p3.innerText = "550";

    div.appendChild(p);
    div.appendChild(p2);
    div.appendChild(p3);
    div.classList.add(
      "flex",
      "justify-between",
      "border-b-2",
      "border-[#03071233]",
      "py-4",
      "font-normal",
      "text-[#03071299]",
      "text-base"
    );
    selectedSeatContainer.appendChild(div);
    const couponSection = document.getElementById("coupon-section");
   
    if (seatCount == 4 ) {
      unselectedSeatDisabled();
      alert.classList.remove("hidden");
      couponSection.classList.remove("hidden");
      
    }

    setInnerText("total-price", totalPrice + perTicketPrice);
    setInnerText("grand-total", totalPrice + perTicketPrice);
    totalPrice += perTicketPrice;
  });
}

document.getElementById('btn-continue').addEventListener('click',function(){
  window.location.reload();
})
