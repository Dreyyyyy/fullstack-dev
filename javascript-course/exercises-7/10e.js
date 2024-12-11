function changeState1() {
  const button = document.querySelector(".js-button");
  if (!button.classList.contains("is-toggled")) {
    button.classList.add("is-toggled");
  } else {
    button.classList.remove("is-toggled");
  }
}

function changeState2() {
  const button = document.querySelector(".js-button-2");
  if (!button.classList.contains("is-toggled")) {
    button.classList.add("is-toggled");
  } else {
    button.classList.remove("is-toggled");
  }
}

function changeState3() {
  const button = document.querySelector(".js-button-3");
  if (!button.classList.contains("is-toggled")) {
    button.classList.add("is-toggled");
  } else {
    button.classList.remove("is-toggled");
  }
}
