<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Forum</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <!-- Core theme CSS (includes Bootstrap)-->
    <link href="./css/forum.css" rel="stylesheet" />
    <link rel="stylesheet" type="text/css" href="//netdna.bootstrapcdn.com/font-awesome/4.1.0/css/font-awesome.min.css">
</head>
<body>
    <div class="container mx-auto">
        <h1 class="text-center text-4xl text-indigo-400 py-12">MUSE Forum</h1>
        <table  class="min-w-full divide-y divide-gray-200">
            <thead class="bg-gray-50">
                <tr>
                    <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase track">Add new post section to come</th>
                </tr>
            </thead>

            <tbody class="bg-white devide-y divide-gray-200" id="tbody">
                <tr>
                    <!-- <td class="px-6 py-4 whitespace-nowrap">
                        
                        post header
                        <div class="flex items-center">
                            <div class="flex-shrink- 0 h-10 w-10"> 
                                <img class="h-10 w-10 rounded-full" src="assets/img/trebleClef.jpg" alt="avatarTrbleClef">
                            </div>
                            <div class="ml-4">
                                <div class="text-sm font-medium text-gray-900">
                                    Post Title
                                </div>
                            </div>                            
                        </div>

                        post body                    
                        <div class="py-4 flex items-center">
                            <div class="ml-4">
                                 <div class="text-sm text-gray-500">
                                    Post body
                                </div>
                            </div>                            
                        </div>

                        post footer
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

                        post's list of comments section, uses the above template


                    </td> -->
                    
                    <div class="container bootstrap snippets bootdey">
                        <div class="col-sm-8">
                            <div class="panel panel-white post panel-shadow">
                                <div class="post-heading">
                                    <div class="pull-left image">
                                        <img src="https://bootdey.com/img/Content/user_1.jpg" class="img-circle avatar" alt="user profile image">
                                    </div>
                                    <div class="pull-left meta">
                                        <div class="title h5">
                                            <a href="#"><b>Ryan Haywood</b></a>
                                            made a post.
                                        </div>
                                        <h6 class="text-muted time">1 minute ago</h6>
                                    </div>
                                </div> 
                                <div class="post-description"> 
                                    <p>Bootdey is a gallery of free snippets resources templates and utilities for bootstrap css hmtl js framework. Codes for developers and web designers</p>
                                    <div class="stats">
                                        <a href="#" class="btn btn-default stat-item">
                                            <i class="fa fa-thumbs-up icon"></i>2
                                        </a>
                                        <a href="#" class="btn btn-default stat-item">
                                            <i class="fa fa-share icon"></i>12
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
                                    <ul class="comments-list">
                                        <li class="comment">
                                            <a class="pull-left" href="#">
                                                <img class="avatar" src="https://bootdey.com/img/Content/user_1.jpg" alt="avatar">
                                            </a>
                                            <div class="comment-body">
                                                <div class="comment-heading">
                                                    <h4 class="user">Gavino Free</h4>
                                                    <h5 class="time">5 minutes ago</h5>
                                                </div>
                                                <p>Sure, oooooooooooooooohhhhhhhhhhhhhhhh</p>
                                            </div>

                                            <!------------------- 2nd layer comments ends ----------------->
                                            <!-- <ul class="comments-list">
                                                <li class="comment">
                                                    <a class="pull-left" href="#">
                                                        <img class="avatar" src="https://bootdey.com/img/Content/user_3.jpg" alt="avatar">
                                                    </a>
                                                    <div class="comment-body">
                                                        <div class="comment-heading">
                                                            <h4 class="user">Ryan Haywood</h4>
                                                            <h5 class="time">3 minutes ago</h5>
                                                        </div>
                                                        <p>Relax my friend</p>
                                                    </div>
                                                </li> 
                                                <li class="comment">
                                                    <a class="pull-left" href="#">
                                                        <img class="avatar" src="https://bootdey.com/img/Content/user_2.jpg" alt="avatar">
                                                    </a>
                                                    <div class="comment-body">
                                                        <div class="comment-heading">
                                                            <h4 class="user">Gavino Free</h4>
                                                            <h5 class="time">3 minutes ago</h5>
                                                        </div>
                                                        <p>Ok, cool.</p>
                                                    </div>
                                                </li> 
                                            </ul> -->

                                            <!------------------- 2nd layer comments ends ----------------->
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                </tr>
            </tbody>


        </table>
    </div>


    

<script src="../index.js"></script>

</body>
</html>


//comments root 
"comments": [
    {
      "id": 1,
      "postID": 1,
      "avatar": "../assets/img/trebleClef.jpg",
      "title": "commentTestTitle1",
      "story": "commentTestStory1",
      "reactions": [
          { 
              "id": 1,
              "name": "thumbs-up",
              "hits": 12 
          },
          { 
              "id": 2,
              "name": "thumbs-down",
              "hits": 8 
          },
          { 
              "id": 3,
              "name": "heart",
              "hits": 2 
          }
      ]  
  },
  {
      "id": 2,
      "postID": 1,
      "avatar": "../assets/img/trebleClef.jpg",
      "title": "commentTestTitle1",
      "story": "commentTestStory1",
      "reactions": [
          { 
              "id": 1,
              "name": "thumbs-up",
              "hits": 12 
          },
          { 
              "id": 2,
              "name": "thumbs-down",
              "hits": 8 
          },
          { 
              "id": 3,
              "name": "heart",
              "hits": 2 
          }
      ]  
  }
  ]