const posts = [{title:'Post 1',body:'body of post 1'},
              {title:'Post 2',body:'body of post 2'}];


function getPost()
{
    setTimeout(function (){
        let output='';
        posts.forEach((post) =>{
            output+=`<li>${post.title}</li>`;
        })
        document.body.innerHTML=output;
    },1000)
}

function createPost(post)
{
    console.log("before creating post 3",new Date())
    return new Promise(function(resolve,reject){
        setTimeout(()=>{
            posts.push(post);
            //console.log("after creating post 3 ",new Date())
            resolve()
        },1000)

    })
}


function deletePost()
{
    console.log("before deleteing latest post ",new Date())
    return new Promise(function(resolve,reject){
        setTimeout(()=>{
            posts.pop();
            resolve()
        },1000)
    })
}


function updateLastUserActivityTime()
{
    return new Promise(function(resolve,reject){
        setTimeout(()=>{
            let t = new Date();
            //console.log(t);
            resolve(t);
        },2000)
    })
}

const post3 = {title:'Post 3',body:'body of post 3'}

Promise.all([createPost(post3).then(getPost), updateLastUserActivityTime().then((t)=>{console.log(t)})])
//createPost({title:'Post 3',body:'body of post 3'}).then(getPost)
setTimeout(()=>{
    Promise.all([deletePost().then(getPost),    updateLastUserActivityTime().then((t)=>{console.log(t)}   )])
},5000)
