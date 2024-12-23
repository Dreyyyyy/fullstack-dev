import { videos } from "../data/videos.js";

export function loadVideos() {
  const playerContainer = document.querySelector("#player-container");
  let videoElement = "";
  let videoCount = 0;

  const pipButton = `
      <button class="player-button-pip" id="enter-pip">Enter PiP</button>
    `;

  // Loop through the videos to create their elements
  videos.forEach((video) => {
    videoElement += `
      <div class="player" id="player-${video.id}">
        <video id="${video.id}" src="${video.src}" title="${video.title}" controls></video>
        <!-- More player elements can be added here. -->
      </div>
    `;

    videoCount++;
  });

  playerContainer.innerHTML += videoElement; // Append the video elements after the PiP button
  playerContainer.innerHTML += pipButton;

  return videoCount;
}
