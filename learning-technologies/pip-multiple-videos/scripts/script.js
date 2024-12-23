import { loadVideos } from "./load-videos.js";
import { videos } from "../data/videos.js";
import { enterPiP } from "./pip.js";

// Handle the picture-in-picture window.
let pipWindow = null;

document.addEventListener("DOMContentLoaded", () => {
  loadVideos();

  let pipButton = document.querySelector("#enter-pip");

  pipButton.addEventListener("click", () => enterPiP(pipWindow, videos.length));
});
