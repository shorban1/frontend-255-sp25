//Create and event listener for DOM load
addEventListener('DOMContentLoaded', async function() {
    const response = await fetch('https://glaze-near-whistle.glitch.me/api/songs');
    const songs = await response.json();

    let html = "";
    for (let song of songs) {
        html += `<li>${song.title} - ${song.artist}</li>`;
    }

    document.querySelector("#added-songs").innerHTML = html;
});
