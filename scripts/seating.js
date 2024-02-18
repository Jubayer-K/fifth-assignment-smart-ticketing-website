function setInnerText(id, value) {
  document.getElementById(id).innerText = value;
}

const allSeatButton = document.getElementsByClassName("btn-seat-select");
let seatCount = 0;
let seatCountDecrease = 28;


for (const button of allSeatButton) {
  button.addEventListener("click", function (event) {
    event.target.style.background = "#1DD100";
    event.target.style.color = "white";
    event.target.setAttribute("disabled", true);
    const alert = document.getElementById('alert');
    if(seatCount >= 4 ){
        alert.classList.remove('hidden');
        return;
    }
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

    const totalPriceStr = document.getElementById("total-price").innerText;
    const totalPrice = parseInt(totalPriceStr);
    const grandTotalStr = document.getElementById("grand-total").innerText;
    const grandTotal = parseInt(grandTotalStr);

    setInnerText("total-price", totalPrice + 550);

    const finalPrice = (document.getElementById("grand-total").innerText =
      grandTotal + 550);
    document.getElementById("btn-apply").addEventListener("click", function () {
      document.getElementById("grand-total").innerText =
        finalPrice - totalPrice * 0.15;
      const couponArea = document.getElementById("coupon-section");
      couponArea.classList.add("hidden");
    });
  });
}

