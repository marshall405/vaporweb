const userURL = 'http://localhost:3000/users';
const loginForm = document.getElementById('login-form');

let user_id;

if (sessionStorage.getItem('username')) {
    fetchUser(sessionStorage.getItem('username'))
}


//  LOGIN 
const login = document.getElementById('login');
login.addEventListener('click', showLoginForm);

function showLoginForm(e) {
    loginForm.style.display = "flex"
}

document.getElementById('cancel').addEventListener('click', () => loginForm.style.display = 'none')

loginForm.addEventListener('submit', handleLogin);

function handleLogin(e) {
    e.preventDefault()
    fetchUser(e.target.username.value)

    loginForm.style.display = 'none';

    e.target.username.value = "";
}


function fetchUser(username) {
    fetch(userURL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json'
        },
        body: JSON.stringify({ username })
    })
        .then(response => response.json())
        .then(json => {
            if (!json.message) {
                login.style.display = 'none';
                welcomeUser(json)
            } else {
                alert(json.message)
            }
        });
}

const logoutButton = document.createElement("button");
let profileDiv;
function welcomeUser(user) {
    sessionStorage.setItem('user_id', user.id)
    sessionStorage.setItem('username', user.username)
    profileDiv = document.createElement('div')
    profileDiv.classList.add('profile-container')

    const h2 = document.createElement('h2');
    h2.id = "welcome";
    h2.innerText = `Welcome to the future past, ${user.username}.`;

    const img = document.createElement('img')
    img.classList.add('profile-pic')
    img.src = user.image.url
    img.addEventListener('click', handleImageClick)

    logoutButton.innerText = 'logout';
    logoutButton.addEventListener('click', handleLogout);

    profileDiv.appendChild(img);
    profileDiv.appendChild(h2);
    profileDiv.appendChild(logoutButton);
    document.querySelector('header').appendChild(profileDiv)

    loginForm.style.display = "none";
    document.getElementById('post-submit').disabled = false;
}


function handleLogout(e) {
    document.querySelector('header').removeChild(profileDiv);
    sessionStorage.removeItem('user_id')
    sessionStorage.removeItem('username')
    document.getElementById('post-submit').disabled = true;
    login.style.display = 'initial';
}




// END OF LOGIN

































