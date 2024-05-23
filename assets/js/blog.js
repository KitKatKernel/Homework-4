function displayPosts() {
    let postsString = localStorage.getItem('blogPosts');
    if (postsString) {
        let posts = JSON.parse(postsString);
        let blogContent = document.getElementById('blogContent');

        posts.forEach(function(post) {
            let postElement = document.createElement('div');
            postElement.className = 'post';

            let titleElement = document.createElement('h2');
            titleElement.textContent = post.title;

            let contentElement = document.createElement('p');
            contentElement.textContent = post.content;

            let authorElement = document.createElement('p');
            authorElement.textContent = 'by ' + post.username;

            postElement.appendChild(titleElement);
            postElement.appendChild(contentElement);
            postElement.appendChild(authorElement);

            blogContent.appendChild(postElement);
        });
    }
}

document.addEventListener('DOMContentLoaded', displayPosts);
