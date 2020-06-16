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
    console.log(id)
    const userID = sessionStorage.getItem('user_id')
    fetch(userURL + `/${userID}/${id}`, {
        method: "POST",
        header: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    })
        .then(res => res.json())
        .then(json => {
            document.querySelector('.profile-pic').src = json.image.url
            showImages.style.display = 'none'
        })

}