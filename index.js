
let tbody = document.getElementById("tbody")



//fetch post data
fetch("http://localhost:3000/post")
.then(res => res.json())
.then(json => {
    json.map(data => {
        console.log(data.title);
        tbody.append(td_fun(data.title, data.story));
    })
})


// create post
function td_fun(title, story) {
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
                        <a href="#"><b>${title}</b></a>
                        made a post.
                    </div>
                    <h6 class="text-muted time">Posted: 1 minute ago</h6>
                </div>
            </div> 
            <div class="post-description"> 
                <p>${story}</p>
                <div class="stats">
                    <a href="#" class="btn btn-default stat-item">
                        <i class="fa fa-thumbs-up icon"></i>2
                    </a>
                    <a href="#" class="btn btn-default stat-item">
                        <i class="fa fa-thumbs-down icon"></i>12
                    </a>
                    <a href="#" class="btn btn-default stat-item">
                        <i class="fa fa-heart icon"></i>3
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
                        <a class="pull-left" href="#">
                            <img class="avatar" src="https://bootdey.com/img/Content/user_1.jpg" alt="avatar">
                        </a>
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
