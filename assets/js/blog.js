 const username = localStorage.getItem("username");
 const title = localStorage.getItem("title");
 const content = localStorage.getItem("content");

document.getElementById("username").textContent = username;
document.getElementById("title").textContent = title;
document.getElementById("content").textContent = content;