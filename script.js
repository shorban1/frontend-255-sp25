//Create and event listener for DOM load
addEventListener('DOMContentLoaded', async function() {
    const response = await fetch('http://localhost:3000/api/songs');
    const songs = await response.json();

    let html = "";
    for (let song of songs) {
        html += `<li>${song.title} - ${song.artist}</li>`;
    }

    document.querySelector("#added-songs").innerHTML = html;
});