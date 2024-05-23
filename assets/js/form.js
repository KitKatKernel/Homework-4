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
    
    if (!document.getElementById('user').value || !document.getElementById('title').value || !document.getElementById('content').value) {
        alert('Please fill out all fields.');
        return;
    }

    const post = buildPost();
    const postString = JSON.stringify(post);
    localStorage.setItem('blogPost', postString);

    const posts = JSON.parse(localStorage.getItem('blogPosts')) || [];
    posts.push(post);
    localStorage.setItem('blogPosts', JSON.stringify(posts));
    window.location.href = 'blog.html';
});