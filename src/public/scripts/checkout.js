const redeemButton = document.querySelector("#btn-redeem");
const checkoutButton = document.querySelector("#btn-checkout");

function onClickRedeemButton() {
  alert("쿠폰 적용 되었습니다!");
}

function onClickCheckoutButton() {
  alert("안드로메다 폰을 구매하였습니다!");
}

redeemButton.addEventListener("click", onClickRedeemButton);
checkoutButton.addEventListener("click", onClickCheckoutButton);
