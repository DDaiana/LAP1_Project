
let rootHeader = document.getElementById("rootHeader");
let rootBody = document.getElementById("rootBody");
let rootFooter = document.getElementById("rootFooter");


//fetch post data
fetch("http://localhost:3000/posts")
  .then((res) => res.json())
  .then((json) => {
    
    json.map((data) => {

        for (let i=0; i < Object.keys( data.heading ).length; i++){
            rootHeader.append(header_fun(data.heading[i].title))
        }
    })
    json.map((data) => {
        // console.log(data.body)
        for (let i=0; i < Object.keys( data.body ).length; i++){
            rootBody.append(body_fun(data.body[i].story))
        }
    })
    json.map((data) => {
        // console.log(data.footer)
        for (let i=0; i < Object.keys( data.footer ).length; i++){
            // console.log(data.footer[i].comment)
            for(let j=0; j< Object.keys( data.footer[i].comment ).length; j++){
                console.log(data.footer[i].comments[j])
                // rootFooter.append(footer_fun(data.footer[i].heading[j].title))
            }
            // for(let k=0; k< Object.keys( data.footer[i].heading ).length; k++){
            //     console.log(data.footer[i].body[k].story)
            // }
        }
    })
  });
  

// create post header
function header_fun(title) {
  let postHeader = document.createElement("div");
  postHeader.className = "post-heading";
  postHeader.innerHTML = `    
                <div class="pull-left image">
                    <img src="./assets/img/trebleClef.jpg" class="img-circle avatar" alt="user profile image">
                </div>
                <div class="pull-left meta">
                    <div class="title h5">
                        <b>${title}</b>
                    </div>
                    <h6 class="text-muted time">Posted: 1 minute ago</h6>
                </div>
    `;
  return postHeader;
}

//create post body
function body_fun(story) {
    let postBody = document.createElement("div");
    postBody.className = "post-description";
    postBody.innerHTML = `    
    
    <p>${story}</p>
    <div class="reactions" id="reactions">
        <a href="#" class="btn btn-default reaction-item">
            <i class="fa fa-thumbs-up icon"></i>2
        </a>
        <a href="#" class="btn btn-default reaction-item">
            <i class="fa fa-thumbs-down icon"></i>12
        </a>
        <a href="#" class="btn btn-default reaction-item">
            <i class="fa fa-heart icon"></i>3
        </a>
    </div>

      `;
    return postBody;
  }


// create comments list
function footer_fun(title) {
    let ul = document.createElement(`ul`); 
    ul.className = "comments-list";
    ul.innerHTML = `              
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
    return ul;
  }
  
//   console.log(li_fun())
//   footer.appendChild(li_fun())
 


 