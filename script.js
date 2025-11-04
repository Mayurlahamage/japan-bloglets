document.addEventListener("DOMContentLoaded", function() {
  const container = document.getElementById('blog-posts-container');

  fetch('data.json')
      .then(response => response.json())
      .then(data => {
          data.blog_posts.forEach(post => {
              const postDiv = document.createElement('div');
              postDiv.classList.add('blog-post');

              const title = document.createElement('h2');
              title.textContent = post.title;

              const image = document.createElement('img');
              image.src = post.image;
              image.alt = post.title;

              const content = document.createElement('p');
              content.textContent = post.content;

              const link = document.createElement('a');
              link.textContent = 'Read more';
              link.href = post.link;
              link.target = '_blank';

              postDiv.appendChild(title);
              postDiv.appendChild(image);
              postDiv.appendChild(content);
              postDiv.appendChild(link);

              container.appendChild(postDiv);
          });
      })
      .catch(error => {
          console.error('Error fetching JSON:', error);
      });
});
