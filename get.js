let tbody = document.getElementById("tbody");
let td = document.getElementById("td");



const renderPosts = async () => {
  let url = "http://localhost:3000/posts";

  const res = await fetch(url);
  const posts = await res.json();

  // console.log(posts);

  let postHeading = "";
  posts.forEach((posts) => {
    postHeading += `                    

  <div class="container bootstrap snippets bootdey">
    <div class="col-sm-8">
        <div class="panel panel-white post panel-shadow">
            <div class="post-heading">
                <div class="pull-left image">
                    <img src="./assets/img/trebleClef.jpg" class="img-circle avatar" alt="user profile image">
                </div>
                <div class="pull-left meta">
                    <div class="title h5">
                        <b>${posts.title}</b>
                    </div>
                    <h6 class="text-muted time">Posted: 1 minute ago</h6>
                </div>
            </div> 
            <div class="post-description"> 
                <p>${posts.story}</p>
                
            </div>
            
        </div>
    </div>

    `;
  });

  td.innerHTML = postHeading;

  let reactions = ' ';
//   posts.map((post) =>
//     console.log(post.id)
//     console.log(post.comments)    
//   );

  posts.forEach( (post) => {
    console.log(post.comments)
  })
  
};

window.addEventListener("DOMContentLoaded", () => renderPosts());
