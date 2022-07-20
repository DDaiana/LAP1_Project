
let tbody = document.getElementById("tbody")



//fetch post data
fetch("http://localhost:3000/post")
.then(res => res.json())
.then(json => {
    json.map(data => {
        // for(let i = 0; i < data.id; i++){
        //     console.log('executing', i);
        // }
        console.log(data.comments[0]);
        tbody.append(td_fun(data.title, data.story, data.reactions[0], data.reactions[1],  data.reactions[2]));
    })
})


// create post
function td_fun(title, story, thumbsUp, thumbsDown, heart) {
    let td = document.createElement('tr');
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
            <div class="post-footer">
                <div class="input-group"> 
                    <input class="form-control" placeholder="Add a comment" type="text">
                    <span class="input-group-addon">
                        <a href="#"><i class="fa fa-edit"></i></a>  
                    </span>
                </div>

                <!----------------------------- commets list starts --------------------------->
                <ul class="comments-list">
                    <li class="comment">
                            <img class="avatar pull-left" src="./assets/img/trebleClef.jpg" alt="avatar">
                        <div class="comment-body">
                            <div class="comment-heading">
                                <h4 class="user">Commet title</h4>
                                <h5 class="time">Posted: 5 minutes ago</h5>
                            </div>
                            <p>Commet body</p>
                        </div>                        
                    </li>
                </ul>
                <!----------------------------- commets list ends ---------------------------->
            </div>
        </div>
    </div>
</div>
</td>
    `;
    return td;
}
