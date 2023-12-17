// To create a post element
function createPost(postData) {
  const postElement = document.createElement('div');
  postElement.className = 'post';

  postElement.innerHTML = `
      <div class="img-container">
        <a href="${postData.url}">
          <img src="${postData.image}" alt="${postData.title} Image" />
        </a>
      </div>
      <div class="info-container">
        <a href="${postData.url}" class="post-category">${postData.category}</a>
        <h2 class="post-title">
          <a href="${postData.url}">${postData.title}</a>
        </h2>
        <p class="post-description">${postData.description}</p>
      </div>
    `;

  return postElement;
}

// To render posts
function renderPosts(posts) {
  const container = document.getElementById('post-container');

  // Loop through the JSON data and create posts
  for (const postId in posts) {
    const post = createPost(posts[postId]);
    container.appendChild(post);
  }
}

// To fetch JSON data from the local file
fetch('posts.json')
  .then(response => response.json())
  .then(data => renderPosts(data))
  .catch(error => console.error('Error fetching data:', error));
