//Create and event listener for DOM load
addEventListener("DOMContentLoaded", async function () {
  const response = await fetch(
    "https://psychedelic-tidal-wash.glitch.me/api/songs"
  );
  const songs = await response.json();

  let html = "";
  for (let song of songs) {
    html += `<li>${song.title} - ${song.artist} - <a href="details.html?id=${song._id}">Details</a> - <a href="edit.html?id=${song._id}">Edit</a></li>`;
  }

  document.querySelector("#list-of-songs").innerHTML = html;
});
