addEventListener("DOMContentLoaded", async function () {
  this.document
    .querySelector("#deleteBtn")
    .addEventListener("click", deleteSong);
  getAllSongs();
});

async function getAllSongs() {
  const response = await fetch(
    "https://right-horn-flamingo.glitch.me/api/songs"
  );
  if (response.ok) {
    const songs = await response.json();
    let html = "";
    for (let song of songs) {
      html += `<option value='${song._id}'>${song.title}</option>`;
    }
    document.querySelector("#songDropdown").innerHTML = html;
  }
}

async function deleteSong() {
  const songID = document.querySelector("#songDropdown option:checked").value;
  const response = await fetch(
    "https://right-horn-flamingo.glitch.me/api/songs" + songID,
    {
      method: "DELETE",
    }
  );
  if (response.ok) {
    alert("Song deleted");
    getAllSongs();
  } else {
    document.querySelector("#error").innerHTML = "Cannot delete song";
  }
}
