const username = document.getElementById('#username');
const title = document.getElementById('#title');
const content = document.getElementById('#content');
const form = document.getElementById('#submit');

const postArray =JSON.parse(localStorage.getItem('blogPoss')) || [];

form.addEventListener('submit', function(event) {
    event.preventDefault();
})
    // Save related form data as an object
    const blogPost = {
        username: username.value,
        title: title.value,
        content: content.value.trim(),
    }; 
    postArray.push(blogPost);
     //Store and JSON.stringify
    localStorage.setItem('blogPost', JSON.stringify(postArray));
   
  window.location.href = "blog.html";


