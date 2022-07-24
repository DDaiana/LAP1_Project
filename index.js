
let tbody = document.getElementById("tbody");
// let footer = document.getElementsByClassName("post-footer");
let footer = document.getElementById("postFooter");


//fetch post data
fetch("http://localhost:3000/post")
  .then((res) => res.json())
  .then((json) => {
    
    json.map((data) => {

        tbody.append(td_fun(data.title, data.story, data.reactions[0], data.reactions[1], data.reactions[2]));
        // footer.appendChild(li_fun())
        // for (let i=0; i < Object.keys( data.comments ).length; i++){
        //     console.log("i for comments is here: ", i);
        //     console.log( Object.keys( data.comments ).length )
        //    console.log(li_fun(data.comments[i].title))
        //    footer.append(li_fun(data.comments[i].title))
        // }

            console.log("posts id: ", data.id);
            console.log("posts comments: ",  Object.keys( data.comments ).length);
             
        // tbody.append(td_fun(data.title, data.story, data.reactions[0], data.reactions[1], data.reactions[2]));
    });
  });
  

//fetch comment data
// fetch("http://localhost:3000/comments")
//   .then((res) => res.json())
//   .then((json) => {
//     json.map((data) => {
//     console.log("data for comments: ", data)
//     if (data.postID === 1){
//         console.log("comments for postID: ", data.postID)
//         console.log("data for comments: ", data)
// }
//       footer.append(li_fun());
// });
//   });


// create post
function td_fun(title, story, thumbsUp, thumbsDown, heart, li_fun) {
  let td = document.createElement("tr");
  td.innerHTML = `                    
<td>
  <div class="container bootstrap snippets bootdey">
    <div class="col-sm-8">
        <div class="panel panel-white post panel-shadow">
            <div class="post-heading">
                <div class="pull-left image">
                    <img src="./assets/img/trebleClef.jpg" class="img-circle avatar" alt="user profile image">
                </div>
                <div class="pull-left meta">
                    <div class="title h5">
                        <b>${title}</b>
                    </div>
                    <h6 class="text-muted time">Posted: 1 minute ago</h6>
                </div>
            </div> 
            <div class="post-description"> 
                <p>${story}</p>
                <div class="stats">
                    <a href="#" class="btn btn-default stat-item">
                        <i class="fa fa-thumbs-up icon"></i>${thumbsUp.hits}
                    </a>
                    <a href="#" class="btn btn-default stat-item">
                        <i class="fa fa-thumbs-down icon"></i>${thumbsDown.hits}
                    </a>
                    <a href="#" class="btn btn-default stat-item">
                        <i class="fa fa-heart icon"></i>${heart.hits}
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
</td>
    `;
  return td;
}


// create comments list
function li_fun() {
    let li = document.createElement(`ul`); 
    li.innerHTML = `              
<li class="comment">
<div class="post-heading">
<div class="pull-left image">
    <img src="https://bootdey.com/img/Content/user_1.jpg" class="img-circle avatar" alt="user profile image">
</div>
<div class="comment-body">
    <div class="comment-heading">
    <h4 class="user">Comment title</h4>
        <h5 class="time">Posted: 5 minutes ago</h5>
    </div>
    <p>Comment body</p>
</div>  
</div>   
</li>
      `;   
    return li;
  }
  
//   console.log(li_fun())
  footer.appendChild(li_fun())
 


 