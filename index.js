
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
    <td class="px-6 py-4 whitespace-nowrap">
                        
    <!-- post header -->
    <div class="flex items-center">
        <div class="flex-shrink- 0 h-10 w-10"> 
            <img class="h-10 w-10 rounded-full" src="assets/img/trebleClef.jpg" alt="avatarTrbleClef">
        </div>
        <div class="ml-4">
            <div class="text-sm font-medium text-gray-900">
                ${title}
            </div>
        </div>                            
    </div>

    <!-- post body -->                    
    <div class="py-4 flex items-center">
        <div class="ml-4">
             <div class="text-sm text-gray-500">
                ${story}
            </div>
        </div>                            
    </div>

    <!-- post footer -->
    <div class="flex items-center">
        <div class="ml-4">
            <div class="text-sm font-medium text-gray-900">
                Post icons
            </div>
            <div class="text-sm font-medium text-gray-900">
                Post add comment section
            </div>
        </div>                            
    </div>

    <!-- post's list of comments section, uses the above template -->


</td>
    `;
    return td;
}
