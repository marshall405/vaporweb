const postsURL = "http://localhost:3000/posts"
const forum = document.getElementById('forum')

// max characters for a new post 
const maxChars = parseInt(content.getAttribute('maxlength'));
chars.innerText = `${maxChars} characters remaining`
let allPosts;

function fetchPosts() {
    fetch(postsURL)
        .then(res => res.json())
        .then(json => {
            allPosts = json
            renderPosts(allPosts)
        })
}


function renderPosts(posts) {
    forum.innerHTML = ""
    if (posts.length > 0) {
        posts.forEach(post => renderPost(post))
    } else {
        forum.innerHTML = `
            <h2 class="posts-header"> NO POSTS YET!</h2>
        `
    }
}

function renderPost(post) {
    const postDiv = document.createElement('div');
    const postP = document.createElement('p');

    const likeDiv = document.createElement('div')
    const like = document.createElement('button');
    likeDiv.appendChild(like)
    like.innerText = `${10 - post.votes} to delete`
    like.classList.add('like-button');

    like.addEventListener('click', e => {
        post.votes += 1
        like.innerText = `${10 - post.votes} to delete`

        if (post.votes > 9) {
            allPosts.splice(allPosts.indexOf(post), 1)
            forum.removeChild(postDiv)
        }
        fetch(postsURL + `/${post.id}`)
            .then(res => res.json())
            .then(json => console.log(json))
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
    addNewPost(e);
    text.value = '';
});

function addNewPost(e) {
    e.preventDefault()

    const content = e.target.content.value.trim();
    renderPost({ content, votes: 0 })
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
            .then(json => {
                allPosts.push(json)
                renderPosts(allPosts)
            })
    }
}

// show all or show user posts

showAllPosts.addEventListener('click', () => renderPosts(allPosts))
showUserPosts.addEventListener('click', () => {
    const userPosts = allPosts.filter(post => post.user_id == sessionStorage.getItem('user_id'))
    renderPosts(userPosts)
})

fetchPosts();