// Build a blog post object from the form inputs
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

// Adding am event listener for form submission
document.getElementById('revelationForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Validate form inputs, if empty then it alerts
    if (!document.getElementById('user').value || !document.getElementById('title').value || !document.getElementById('content').value) {
        alert('Please fill out all fields.');
        return;
    }

    const post = buildPost();
    
    // Retrieve or initialize blogPosts array from localStorage
    let blogPosts = localStorage.getItem('blogPosts');
    if (blogPosts) {
        blogPosts = JSON.parse(blogPosts);
    } else {
        blogPosts = [];
    }

    // Adds new post to blogPosts array and saves to the localStorage
    blogPosts.push(post);
    localStorage.setItem('blogPosts', JSON.stringify(blogPosts));
    window.location.href = 'blog.html';
});