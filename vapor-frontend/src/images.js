const imagesURL = "http://localhost:3000/images"
// const userURL = "http://localhost:3000/users"
function handleImageClick(e) {
    fetch(imagesURL)
        .then(res => res.json())
        .then(json => renderImages(json))
}

function renderImages(images) {
    showImages.innerHTML = ""
    showImages.style.display = 'flex'
    images.forEach(image => {
        let img = document.createElement('img')
        img.src = image.url
        img.classList.add('display-img')
        img.addEventListener('click', (e) => updateUserImage(image.id))
        showImages.appendChild(img)
    })

    const x = document.createElement('span')
    x.classList.add('x')
    x.innerHTML = "&#10006"
    x.addEventListener('click', e => showImages.style.display = 'none')

    const desc = document.createElement('h2')
    desc.classList.add('select-image-text')
    desc.innerText = "Select new image"
    showImages.appendChild(desc)
    showImages.appendChild(x)
}

function updateUserImage(id) {

    const userID = sessionStorage.getItem('user_id')
    fetch(userURL + `/image`, {
        method: "PATCH",
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({
            user_id: userID,
            image_id: id
        })
    })
        .then(res => res.json())
        .then(json => {
            // document.querySelector('.canvas-pic img').src = json.image.url
            canvas.style.backgroundImage = `url(${json.image.url})`

            showImages.style.display = 'none'
        })

}