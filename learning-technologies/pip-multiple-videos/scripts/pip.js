import { videos } from "../data/videos.js";

export function enterPiP(pipWindow, videoCount) {
  const player = [];

  for (let i = 0; i < videoCount; i++) {
    player[i] = document.querySelector("#player-" + videos[i].id);
  }

  // Set the width/height so the window is properly sized to the video.
  const pipOptions = {
    width: player.clientWidth,
    height: player.clientHeight,
    disallowReturnToOpener: true,
  };

  requestWindow(pipWindow, pipOptions, player, videoCount);
}

function requestWindow(pipWindow, pipOptions, player, videoCount) {
  const pipButton = document.querySelector("#enter-pip");
  const playerContainer = document.querySelector("#player-container");

  documentPictureInPicture.requestWindow(pipOptions).then((pipWin) => {
    pipWindow = pipWin;

    copyStyleSheet(pipWindow);

    // Style remaining container to imply the player is in PiP.
    playerContainer.classList.add("pip-mode");

    const messagePiP = document.createElement("div");
    messagePiP.classList.add("pip-message");
    messagePiP.textContent = "You are in PiP mode.";
    playerContainer.appendChild(messagePiP);

    // Add script.js dinnamically on the PiP window.
    const script = document.createElement("script");
    script.src = "scripts/script.js";
    pipWindow.document.head.appendChild(script);

    // Add player to the PiP window, without the pipButton.
    pipButton.parentNode.removeChild(pipButton);

    const playerContainerPiP = document.createElement("div");
    playerContainerPiP.id = "player-container";
    pipWindow.document.body.appendChild(playerContainerPiP);

    for (let i = 0; i < videoCount; i++) {
      playerContainerPiP.appendChild(player[i]);
    }

    addExitPiPButton(pipWindow);

    pipWindow.addEventListener(
      "pagehide",
      () => onLeavePiP(pipWindow, videoCount, pipButton),
      {
        once: true,
      }
    );
  });
}

function copyStyleSheet(pipWindow) {
  // Copy style sheets over from the initial document
  // so that the player looks the same.
  [...document.styleSheets].forEach((styleSheet) => {
    try {
      const cssRules = [...styleSheet.cssRules]
        .map((rule) => rule.cssText)
        .join("");
      const style = document.createElement("style");

      style.textContent = cssRules;
      pipWindow.document.head.appendChild(style);
    } catch (e) {
      const link = document.createElement("link");

      link.rel = "stylesheet";
      link.type = styleSheet.type;
      link.media = styleSheet.media;
      link.href = styleSheet.href;
      pipWindow.document.head.appendChild(link);
    }
  });
}

function addExitPiPButton(pipWindow) {
  const pipDocument = pipWindow.document;
  // const buttonsOverlay = pipDocument.querySelector("#buttons-overlay-" + id);
  const playerContainer = pipDocument.querySelector("#player-container");
  const exitPiPButton = pipDocument.createElement("button");

  exitPiPButton.classList.add("player-button");
  exitPiPButton.id = "exit-pip-button";
  exitPiPButton.textContent = "Exit PiP";
  exitPiPButton.addEventListener("click", () => {
    pipWindow.close();
  });

  playerContainer.appendChild(exitPiPButton);
}

// Called when the PiP window has closed.
export function onLeavePiP(pipWindow, videoCount, pipButton) {
  const playerContainer = document.querySelector("#player-container");
  const messagePiP = document.querySelector(".pip-message");

  // Remove PiP styling from the container.
  playerContainer.classList.remove("pip-mode");

  let player = [];

  for (let i = 0; i < videoCount; i++) {
    player = pipWindow.document.querySelector("#player-video-" + (i + 1));
    playerContainer.append(player);
  }

  if (pipButton) {
    playerContainer.appendChild(pipButton);
    playerContainer.removeChild(messagePiP);
  }

  pipWindow = null;
}
