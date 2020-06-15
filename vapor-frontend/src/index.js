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
                sessionStorage.setItem('user_id', json.id)
                sessionStorage.setItem('username', json.username)
                welcomeUser(json)
            } else {
                alert(json.message)
            }
        });
}

function welcomeUser(user) {
    const h2 = document.createElement('h2');
    h2.id = "welcome";
    h2.innerText = `Welcome to the future past,\n ${user.username}.`;
    const logoutButton = document.createElement("button")
    logoutButton.innerText = 'logout';
    logoutButton.addEventListener('click', handleLogout)
    h2.appendChild(logoutButton)
    document.querySelector('header').appendChild(h2);
    login.style.display = 'none';
    loginForm.style.display = "none";
    document.getElementById('post-submit').disabled = false;
}


function handleLogout(e) {
    document.querySelector('header').removeChild(welcome);
    sessionStorage.removeItem('user_id')
    sessionStorage.removeItem('username')
    document.getElementById('post-submit').disabled = true;
    login.style.display = 'inline'

}
// END OF LOGIN

































