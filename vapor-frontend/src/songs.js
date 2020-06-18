const songsURL = "http://localhost:3000/songs"
let songs;
let songIndex = 0

fetch(songsURL)
    .then(res => res.json())
    .then(json => {
        songs = json
    })
next.addEventListener('click', nextSong)

function nextSong(e) {
    songIndex += 1
    if (songIndex >= songs.length) {
        songIndex = 0
    }
    setSong(songs[songIndex])
}

back.addEventListener('click', backSong)

function backSong() {
    songIndex -= 1
    if (songIndex < 0) {
        songIndex = songs.length - 1
    }
    setSong(songs[songIndex])
}
function setSong(song) {
    audio.src = `${song.url}`
    songInfo.innerText = `${song.name} by: ${song.artist}`
    play.value = "play"
}

play.addEventListener('click', songControls)

function songControls(e) {
    if (play.value === "pause") {
        audio.pause()
        play.value = "play"
    } else {
        audio.play()
        play.value = "pause"
    }
}

volume.addEventListener('input', adjustVolume)

function adjustVolume() {
    audio.volume = volume.value / 10
}