const postsURL = "http://localhost:3000/posts"
const forum = document.getElementById('forum')

// max characters for a new post 
const maxChars = parseInt(content.getAttribute('maxlength'));
chars.innerText = `${maxChars} characters remaining`
let posts;

function fetchPosts() {
    fetch(postsURL)
        .then(res => res.json())
        .then(json => {
            posts = json
            renderPosts()
        })
}


function renderPosts() {
    forum.innerHTML = ""
    posts.forEach(post => renderPost(post))
}

function renderPost(post) {
    const postDiv = document.createElement('div');
    const postP = document.createElement('p');

    const likeDiv = document.createElement('div')
    const like = document.createElement('button');
    likeDiv.appendChild(like)
    like.innerText = post.votes
    like.classList.add('like-button');

    like.addEventListener('click', e => {
        post.votes += 1
        like.innerText = post.votes
    })

    if (post.user) {
        postP.innerText = `${post.user.username}`
    } else {
        postP.innerText = `${sessionStorage.getItem("username")}`
    }
    postP.innerText += `: "${post.content}"`;

    postDiv.appendChild(postP)
    postDiv.appendChild(likeDiv)
    forum.prepend(postDiv)
    postDiv.classList.add('post-container')
}


document.getElementById('content').addEventListener('keyup', handleChange)

function handleChange(e) {
    chars.innerText = `${maxChars - e.target.value.length} characters remaining`
}


document.getElementById('addPost').addEventListener('submit', (e) => {
    const text = document.getElementById('content');
    e.preventDefault()
    console.log(text.value);
    addNewPost(e);
    text.value = '';
});

function addNewPost(e) {
    e.preventDefault()

    const content = e.target.content.value.trim();
    renderPost({ content })
    if (content.match(/[a-zA-Z0-9]/) && content.length > 0) {
        fetch(postsURL, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                user_id: parseInt(window.sessionStorage.getItem("user_id")),
                content
            })
        })
            .then(res => res.json())
            .then(json => posts.push(json))
    }
}




fetchPosts();