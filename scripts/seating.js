function setInnerText(id, value) {
  document.getElementById(id).innerText = value;
}

const allSeatButton = document.getElementsByClassName("btn-seat-select");
let seatCount = 0;
let seatCountDecrease = 28;

const couponCodes = {
  new15: 0.15,
  "couple 20": 0.2,
};

function disabledButton (event) {
  // event.target.setAttribute("disabled", true);
  console.log(event);
}
function unselectedSeatDisabled (event){
  for (const button of allSeatButton){
    disabledButton(button)
  }

}

for (const button of allSeatButton) {
  button.addEventListener("click", function (event) {
    event.target.setAttribute("disabled", true);
    const alert = document.getElementById("alert");
    if (seatCount >= 4) {
      alert.classList.remove("hidden");
      return;
    }
    event.target.style.background = "#1DD100";
    event.target.style.color = "white";
    const seatNum = event.target.innerText;
    console.log(seatNum);
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

    unselectedSeatDisabled()


    const totalPriceStr = document.getElementById("total-price").innerText;
    let totalPrice = parseInt(totalPriceStr);
    const grandTotalStr = document.getElementById("grand-total").innerText;
    let grandTotal = parseInt(grandTotalStr);
    const perTicketPrice = 550;
    setInnerText("total-price", totalPrice + perTicketPrice);
    totalPrice += perTicketPrice;

    document.getElementById("btn-apply").addEventListener("click", function () {
      const couponInputValue = document.getElementById("coupon-input").value;
      console.log(couponInputValue);
      const couponCode = couponCodes[couponInputValue.toLowerCase()];
      console.log(couponCode);
      const discountedPrice = totalPrice * couponCode;
      grandTotal = totalPrice - discountedPrice;
      document.getElementById("grand-total").innerText = grandTotal;
      const couponSection = document.getElementById("coupon-section");
      couponSection.classList.add("hidden");
    });
  });
}
