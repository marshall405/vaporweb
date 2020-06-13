


//  LOGIN 
document.getElementById('login').addEventListener('click', showLoginForm)

function showLoginForm(e) {
    document.getElementById('login-form').style.display = "flex"
}

document.getElementById('cancel').addEventListener('click', () => document.getElementById('login-form').style.display = 'none')

document.getElementById('login-form').addEventListener('submit', handleLogin);

function handleLogin(e) {
    e.preventDefault()

    // fetch username details and render stuff
    document.querySelector('h1').style.color = 'red';
    document.getElementById('login-form').style.display = "none"
    // or alert invalid username? 

    e.target.username.value = "";
}

// END OF LOGIN

































