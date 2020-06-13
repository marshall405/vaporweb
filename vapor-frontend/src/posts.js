const postsURL = "http://localhost:3000/posts"
const forum = document.getElementById('forum')

let posts;

fetch(postsURL)
    .then(res => res.json())
    .then(json => {
        posts = json
        renderPosts()
    })

function renderPosts() {
    posts.forEach(post => renderPost(post))
}

function renderPost(post) {
    const postDiv = document.createElement('div')
    postDiv.classList.add()
}


document.getElementById('addPost', addNewPost)

function addNewPost(e) {
    e.preventDefault()
    console.log(e.target.content, e.target.name)
    fetch("http://localhost:3000/posts")
        .then(res => res.json())
        .then(json => console.log(json))
}