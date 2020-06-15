const userURL = 'http://localhost:3000/users';

let user_id;
if (sessionStorage.getItem('username')) {
    fetchUser(sessionStorage.getItem('username'))
}
//  LOGIN 
const login = document.getElementById('login');
login.addEventListener('click', showLoginForm);

function showLoginForm(e) {
    document.getElementById('login-form').style.display = "flex"
}

document.getElementById('cancel').addEventListener('click', () => document.getElementById('login-form').style.display = 'none')

document.getElementById('login-form').addEventListener('submit', handleLogin);

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
    const logout = document.createElement('input');

    logout.type = 'button';
    logout.id = 'logout';
    logout.value = 'logout';

    h2.id = 'loginMessage';
    h2.innerText = `Welcome to the future past,\n ${user.username}.`;

    document.querySelector('header').appendChild(h2);
    document.querySelector('header').appendChild(logout);
    login.style.display = 'none';
    document.getElementById('login-form').style.display = "none";
    document.getElementById('post-submit').disabled = false;

    document.getElementById('logout').addEventListener('click', () => {
        document.getElementById('loginMessage').style.display = 'none';
        document.getElementById('logout').style.display = 'none';
        login.style.display = 'initial';
    })
}
// END OF LOGIN

































