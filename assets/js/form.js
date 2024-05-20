function buildPost() {
    const userName = document.getElementById('user').value;
    const title = document.getElementById('title').value;
    const content = document.getElementById('content').value;
    
    let blogPost = {
        username: userName,
        title: title,
        content: content
    };
    return blogPost;
}


document.getElementById('revelationForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const post = buildPost();
    console.log(post);
});

