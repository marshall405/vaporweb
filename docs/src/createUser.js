document.getElementById('createUser').addEventListener('click', createUser)

function createUser(e) {
    const username = e.target.parentNode.parentNode.username.value
    fetch(userURL + '/new', {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({
            username
        })
    })
        .then(res => res.json())
        .then(json => {
            if (json.message) {
                alert(`${username} ${json.message.username[0]}`)
            } else {
                login.style.display = 'none';
                welcomeUser(json)
            }
        })
}


