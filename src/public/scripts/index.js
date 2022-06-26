const title = document.querySelector("#title");
const comingSoonButton = document.querySelector("#btn-coming-soon");

function onClickComingSoonButton() {
  const colors = ["red", "dodgerblue", "chocolate"];
  const randomIndex = Math.floor(Math.random() * colors.length);

  title.style = `color: ${colors[randomIndex]}`;
}

comingSoonButton.addEventListener("click", onClickComingSoonButton);
