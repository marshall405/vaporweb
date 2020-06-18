const userURL = 'http://localhost:3000/users';
const loginForm = document.getElementById('login-form');

let user_id;

if (sessionStorage.getItem('username')) {
    fetchUser(sessionStorage.getItem('username'))
}


//  LOGIN 
const login = document.getElementById('login');
login.addEventListener('click', showLoginForm);
aLogin.addEventListener('click', showLoginForm)
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
let heroDiv;

function welcomeUser(user) {
    sessionStorage.setItem('user_id', user.id)
    sessionStorage.setItem('username', user.username)
    heroDiv = document.getElementById('heroImage')
    profileDiv = document.createElement('div')
    profileDiv.classList.add('profile-container')
    aLogin.style.display = 'none'

    const h2 = document.createElement('h2');
    h2.id = "welcome";
    h2.innerText = `Welcome to the future past, ${user.username}.`;

    const img = document.createElement('img')
    img.classList.add('profile-pic')
    img.src = user.image.url
    canvas.style.backgroundImage = `url(${user.image.url})`
    img.addEventListener('click', handleImageClick)

    logoutButton.innerText = 'logout';
    logoutButton.addEventListener('click', handleLogout);

    profileDiv.appendChild(img);
    profileDiv.appendChild(h2);
    profileDiv.appendChild(logoutButton);
    heroDiv.appendChild(profileDiv)

    loginForm.style.display = "none";
    document.getElementById('post-submit').disabled = false;
}


function handleLogout(e) {
    heroDiv.removeChild(profileDiv);
    canvas.style.backgroundImage = "url(https://www.festivalclaca.cat/imgfv/b/18-182681_jessicamaccormackrmack-transparent-background-smoke-fire-png.png)"
    sessionStorage.removeItem('user_id')
    sessionStorage.removeItem('username')
    document.getElementById('post-submit').disabled = true;
    login.style.display = 'initial';
    aLogin.style.display = 'inline'
}




// END OF LOGIN

































