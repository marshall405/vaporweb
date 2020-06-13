const userURL = 'http://localhost:3000/users';


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

    const userName = e.target.username.value;

    fetch(userURL, {
        method: 'POST',
        headers: { 
            'Content-Type': 'application/json',
            Accept: 'application/json'
        },
        body: JSON.stringify({userName})
    })
    .then(response => response.json())
    .then(json => {
        if (!json.message){
            const welcomeUser = document.createElement('h2');
            welcomeUser.innerText = `Welcome to the future past,\n ${userName}.`;
            document.querySelector('header').appendChild(welcomeUser);
            login.style.display = 'none';
            document.getElementById('login-form').style.display = "none"
        } else {
            alert(json.message)
        }
    });

    // fetch username details and render stuff
    
    // or alert invalid username? 

    e.target.username.value = "";
}

// END OF LOGIN

































