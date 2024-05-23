// Retrieves and displays blog posts from localStorage
function displayPosts() {
    let postsString = localStorage.getItem('blogPosts');
    if (postsString) {
        let posts = JSON.parse(postsString);
        let blogContent = document.getElementById('blogContent');

        // Iterate through posts with .forEach and creates elements for each post
        posts.forEach(function(post) {
            let postElement = document.createElement('div');
            postElement.className = 'post';
            
            // Creates an h2 element for title and sets it with post.title
            let titleElement = document.createElement('h2');
            titleElement.textContent = post.title;

            // Create a p element for content and sets it with post.username
            let contentElement = document.createElement('p');
            contentElement.textContent = post.content;

            // Create an p element for author and sets it with "by" + post.username
            let authorElement = document.createElement('p');
            authorElement.textContent = 'by ' + post.username;
            authorElement.className = 'author';

            // Append elements to postElement and creates a horizontal rule element to separate the title, content and author.
            postElement.appendChild(titleElement);
            postElement.appendChild(document.createElement('hr'));
            postElement.appendChild(contentElement);
            postElement.appendChild(document.createElement('hr'));
            postElement.appendChild(authorElement);

            // Append our postElement to blogContent
            blogContent.appendChild(postElement);
        });
    }
}

// Execute displayPosts when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', displayPosts);