const button1 = document.querySelector(".js-button");
const button2 = document.querySelector(".js-button-2");
const button3 = document.querySelector(".js-button-3");

function changeState1() {
  if (!button1.classList.contains("is-toggled")) {
    button1.classList.add("is-toggled");

    if (button2.classList.contains("is-toggled")) {
      button2.classList.remove("is-toggled");
    }

    if (button3.classList.contains("is-toggled")) {
      button3.classList.remove("is-toggled");
    }
  } else {
    button1.classList.remove("is-toggled");
  }
}

function changeState2() {
  if (!button2.classList.contains("is-toggled")) {
    button2.classList.add("is-toggled");

    if (button1.classList.contains("is-toggled")) {
      button1.classList.remove("is-toggled");
    }

    if (button3.classList.contains("is-toggled")) {
      button3.classList.remove("is-toggled");
    }
  } else {
    button2.classList.remove("is-toggled");
  }
}

function changeState3() {
  if (!button3.classList.contains("is-toggled")) {
    button3.classList.add("is-toggled");

    if (button1.classList.contains("is-toggled")) {
      button1.classList.remove("is-toggled");
    }

    if (button2.classList.contains("is-toggled")) {
      button2.classList.remove("is-toggled");
    }
  } else {
    button3.classList.remove("is-toggled");
  }
}
