const buyButtons = document.querySelectorAll("#btn-buy");

function onClickBuyButton() {
  window.location = "./index.html";
}

buyButtons.forEach((btn) => btn.addEventListener("click", onClickBuyButton));
