
let rootHeader = document.getElementById("rootHeader");
let rootBody = document.getElementById("rootBody");
let rootComments = document.getElementById("rootComments");


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
        // console.log(" data.body ", data.body)
        for (let i=0; i < Object.keys( data.body ).length; i++){
            rootBody.append(body_fun(data.body[i].story, 
                 data.body[i].reactions[0].hits,
                 data.body[i].reactions[1].hits,
                 data.body[i].reactions[2].hits   
                ))
            // console.log(" data.body ", data.body[i].reactions[0].hits)
        }
    })
    json.map((data) => {
        // console.log(data.footer)
        for (let i=0; i < Object.keys( data.footer ).length; i++){
            // console.log(data.footer[i].comments)
            for(let j=0; j< Object.keys( data.footer[i].comments ).length; j++){
                // console.log(data.footer[i].comments[j])
                rootComments.append(comments_fun(data.footer[i].comments[j].title, data.footer[i].comments[j].story))
            }
            
        }
    })
  }).catch(err => console.log(err)) ;
  

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
function body_fun(story, thumbsUp, thumbsDown, heart) {
    let postBody = document.createElement("div");
    postBody.className = "post-description";
    postBody.innerHTML = `    
    
    <p>${story}</p>
    <div class="reactions" id="reactions">
        <a href="#" class="btn btn-default reaction-item">
            <i id="thumbsUp"class="fa fa-thumbs-up icon" value=></i>${thumbsUp}
        </a>
        <a  href="#" class="btn btn-default reaction-item">
            <i id="thumbsDown" class="fa fa-thumbs-down icon"></i> ${thumbsDown}
        </a>
        <a  href="#" class="btn btn-default reaction-item">
            <i  id="heart" class="fa fa-heart icon"></i>${heart}
        </a>
    </div>
    <div class="post-footer">
    <div class="input-group"> 
        <input id="form-control" class="form-control" placeholder="Add a comment" type="text">
        <span class="input-group-addon">
            <a href="#"><i class="fa fa-edit"></i></a>  
        </span>
    </div>
    </div>   


      `;
    return postBody;
  }


// create comments list
function comments_fun(title, story) {
    let li = document.createElement(`ul`); 
    li.innerHTML = `   
           
<li class="comment">
<div class="post-heading">
<div class="pull-left image">
    <img src="https://bootdey.com/img/Content/user_1.jpg" class="img-circle avatar" alt="user profile image">
</div>
<div class="comment-body">
    <div class="comment-heading">
    <h4 class="user">${title}</h4>
        <h5 class="time">Posted: 5 minutes ago</h5>
    </div>
    <p>${story}</p>
   
</div>  
</div>   
</li>
      `;   
    return li;
  }
  
 
// ---------------------- adding events listener -----------------

//   console.log("inner html for rootHeader: ", rootHeader.firstChild.parentNode);


document.body.addEventListener("click", event => {
    // console.log("getting the section in which the action happens", event.target.parentNode.childNodes[1].lastElementChild.id) 
    console.log("getting the section in which the action happens", event.target.parentNode.childNodes[3].lastElementChild.id) 
    // console.log("getting the section in which the action happens", event.target.parentNode.childNodes[5].lastElementChild.id) 
    // console.log("html:  ", html)
    

    // switch (html) {
    //     case "reactions":
    //         console.log("case when user clicked reactions:  ", html)
    //         if(event.target.parentNode.childNodes[5].lastElementChild.id == "heart"){
    //             console.log("case when user clicked reactions - heart  ")
    //         } else if(event.target.parentNode.childNodes[3].lastElementChild.id == "thumbsDown"){
    //             console.log("case when user clicked reactions - thumbsDown  ")
    //         } 

            

    //         break;
    //     case "input-group":
    //         console.log("case when user clicked input-group:  ", html)
    //         break;
    //     default:
    //         console.log("case when user clicked other elements, html:  ", html)
    //         break;
    // }

    // let thumbsU = document.getElementById("thumbsUp");
    // console.log("getting the element with id thumbsU: ", thumbsU)

    if( event.target.parentNode.childNodes[1].lastElementChild.id ) {
        let thumbsU = document.getElementById("thumbsUp");
        console.log("getting the element with id thumbsU count: ", thumbsU)
        thumbsU.innerHTML= "tU";
    } else if( event.target.parentNode.childNodes[3].lastElementChild.id == 'thumbsDown' ) {
        let thumbsD = document.getElementById("thumbsDown");
        console.log("getting the element with id thumbsU count: ", thumbsD)
        thumbsD.innerHTML= "tD";
    }

    
    // let thumbsU = document.getElementById("thumbsUp");
    // console.log("getting the element with id thumbsU count: ", thumbsU)
    // let heart = document.getElementById("heart");
    // console.log("getting the element with id thumbsU count: ", heart)
    // thumbsD.style.color ="red"
    // thumbsD.innerHTML= "tD"
    // thumbsU.innerHTML= "tU"
    // heart.innerHTML= "h"

    // if (event.target.nodeName == "rootHBody") {
    //   console.log("Clicked", event.target.textContent);
    // }
  });