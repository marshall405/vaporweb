const songs = ["sail.mp3", "killyourheros.mp3"];
let songIndex = 0


selectSong.addEventListener('click', changeSong)

function changeSong(e) {
    songIndex += 1
    if (songIndex >= songs.length) {
        songIndex = 0
    }
    song.src = `assets/audio/${songs[songIndex]}`

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