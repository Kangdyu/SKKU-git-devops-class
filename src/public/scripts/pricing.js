const buyButtons = document.querySelectorAll(".btn-buy");

function onClickBuyButton(e) {
  const card = e.target.parentElement.parentElement;
  const name = card.querySelector(".btn-name").innerHTML;
  const price = card.querySelector(".btn-price").innerHTML;
  console.log(name);
  console.log(price);
  window.location = `/checkout?name=${name}&price=${price}`;
}

buyButtons.forEach((btn) => btn.addEventListener("click", onClickBuyButton));
