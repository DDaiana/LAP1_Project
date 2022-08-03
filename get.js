let tbody = document.getElementById("tbody");
let td = document.getElementById("td");
let postFooter = document.getElementById("postFooter");


const renderPosts = async () => {
  let url = "http://localhost:3000/posts";

  const res = await fetch(url);
  const posts = await res.json();

  // console.log(posts);

//   posts.map((post) =>
//     console.log(post.id)
//     console.log(post.comments)    
//   );
  let postRow = '';
  posts.forEach( (post) => {
    postRow += `
    <div class="container bootstrap snippets bootdey">
                        <div class="col-sm-8">
                            <div class="panel panel-white post panel-shadow">
                                <div class="post-heading" id="">
                                    <div class="pull-left image">
                                        <img src="./assets/img/trebleClef.jpg" class="img-circle avatar" alt="user profile image">
                                    </div>
                                    <div class="pull-left meta">
                                        <div class="title h5">
                                            <b>${post.title}</b>
                                        </div>
                                        <h6 class="text-muted time">Posted: 1 minute ago</h6>
                                    </div>
                                </div> 
                                <div class="post-description"> 
                                    <p>${post.story}</p>
                                    <div class="reactions" id="reactions">
                                        <a href="#" class="btn btn-default reaction-item">
                                            <i class="fa fa-thumbs-up icon"></i>${post.reactions[0].hits}
                                        </a>
                                        <a href="#" class="btn btn-default reaction-item">
                                            <i class="fa fa-thumbs-down icon"></i>${post.reactions[1].hits}
                                        </a>
                                        <a href="#" class="btn btn-default reaction-item">
                                            <i class="fa fa-heart icon"></i>${post.reactions[2].hits}
                                        </a>
                                    </div>
                                </div>
                                <div class="post-footer" id="postFooter">
                                    <div class="input-group"> 
                                        <input class="form-control" placeholder="Add a comment" type="text">
                                        <span class="input-group-addon">
                                            <a href="#"><i class="fa fa-edit"></i></a>  
                                        </span>
                                    </div>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
    `;
  })

  td.innerHTML = postRow;    

  posts.forEach( (post) => {
    for(let i=0; i<post.comments.length; i++){
        console.log(post.comments[i])
    }  
  })
};

window.addEventListener("DOMContentLoaded", () => renderPosts());
