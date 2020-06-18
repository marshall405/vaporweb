const songsURL = "http://localhost:3000/songs"
let songs;
let songIndex = 0

fetch(songsURL)
    .then(res => res.json())
    .then(json => {
        songs = json
    })
selectSong.addEventListener('click', changeSong)

function changeSong(e) {
    songIndex += 1
    if (songIndex >= songs.length) {
        songIndex = 0
    }
    newSong = songs[songIndex]
    song.src = `${newSong.url}`
    songInfo.innerText = `${newSong.name} by: ${newSong.artist}`
}

play.addEventListener('click', songControls)

function songControls(e) {
    if (play.value === "pause") {
        song.pause()
        play.value = "play"
    } else {
        song.play()
        play.value = "pause"
    }
}