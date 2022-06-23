const buyButtons = document.querySelectorAll("#btn-buy");

function onClickBuyButton() {
  window.location = "./checkout.html";
}

buyButtons.forEach((btn) => btn.addEventListener("click", onClickBuyButton));
