import { CHANGE_CONFIRM_DELETE ,
    CHANGE_POST , 
    CHNAGE_ID ,
    CHANGE_HEADING,
    CHANGE_POST_CONTENT,
    CHANGE_PHOTO,
    CHANGE_IS_CLICK_MORE,
    CHANGE_ONE_POST,
    CHANGE_SEARCHFIELD,

    CHANGE_ERR_MESSAGE,
    CHANGE_SIGNUP_EMAIL,
    CHANGE_SIGNUP_NAME,
    CHANGE_SIGNUP_PASSWORD,
    CHANGE_SIGNUP_ERR,

    CHANGE_SIGNIN_EMAIL,
    CHANGE_SIGNIN_ERR,
    CHANGE_AUTH_STATUS,
    CHANGE_SIGNIN_PASSWORD,
    CHANGE_MESSAGE_NAME,
    CHANGE_MESSAGE_EMAIL,
    CHANGE_MESSAGE_PHONE,
    CHANGE_MESSAGE_SUBJECT,
    CHANGE_MESSAGE_MESSAGE,

    CHANGE_ALL_MESSAGES,

    PREVIOUS_MESSAGE_READ,
    CHANGE_UNREAD_MESSAGES_COUNT,
    CHANGE_SHOW_MESSAGE,
} from "./Constant"


// ************* changing color of all post randomly*****

export let colorchnage = () =>{
        let colorlist = ["#84ffdb","#9084ff","#ff84ec","#ffcc84","#ffaa84","#84b7ff" , "#c7f5ff","#4e805d"]
            
               let container = document.getElementsByClassName("container-post")
               
               for (let x of container){
                    let randomnumber = Math.floor(Math.random() * colorlist.length)
                    x.style.backgroundColor = colorlist[randomnumber]
                }
    }

//  Displaying Post on Home page

export let changepostlist = () => (dispatch)=>{
    fetch("http://localhost:5000/").then(res=>res.json()).then(data5=>{
    
        dispatch({type : CHANGE_POST , payload:data5})
           colorchnage()
        }
)}

// Showing Single Post For share

export let Change_One_Post = (id) => (dispatch,getstate)=>{
    
   
    fetch(`http://localhost:5000/post/${id}`
    ).then(res =>res.json()).then(postOne=>{
        dispatch({type:CHANGE_ONE_POST , payload : postOne})
        
        colorchnage()
     
})}

// Delete Selected Post 

export const confimtrue = () =>(dispatch,getstate)=>{
    dispatch({type:CHANGE_CONFIRM_DELETE,payload:true})
    if (getstate().changeConfirmDelete.confirmDelete === true){
        fetch("http://localhost:5000/delete",{
            method : "post",
            headers: {"Content-Type" : "application/json"},
            body : JSON.stringify({
                id: getstate().change_id.id
            })
        }).then(res =>res.json()).then(data=>{
            dispatch({type:CHANGE_POST , payload : data})
            colorchnage()
        })
        
        const act = document.getElementsByClassName("pop-up")[0]
        act.classList.remove("activation")
    }
}

// Cancel Deleteing Selected Post

export const confirmfalse = () =>(dispatch) =>{
    dispatch({type:CHANGE_CONFIRM_DELETE,payload:false})
        const act = document.getElementsByClassName("pop-up")[0]
        act.classList.remove("activation")
}


// Poping Up Confirm Message


export let deleteitem = (event) =>(dispatch) =>{
    dispatch({type:CHNAGE_ID , payload:event.target.value})
    // setid(events.target.value)
    const act = document.getElementsByClassName("pop-up")[0]
    act.classList.add("activation")
}

// Sign_Up Form 

export let signUp_nameInput = (event) =>(
    {
        type:CHANGE_SIGNUP_NAME,
        payload : event.target.value
    }
)

export let signUp_passwordInput = (event) =>(
    {
        type:CHANGE_SIGNUP_PASSWORD,
        payload : event.target.value
    }
)
export let signUp_emailInput = (event) =>(
    {
        type:CHANGE_SIGNUP_EMAIL,
        payload : event.target.value
    }
)

// Sign In Form

export let signIn_passwordInput = (event) =>(
    {
        type:CHANGE_SIGNIN_PASSWORD,
        payload : event.target.value
    }
)
export let signIn_emailInput = (event) =>(
    {
        type:CHANGE_SIGNIN_EMAIL,
        payload : event.target.value
    }
)

// Contact Us Form

export let message_nameInput = (event) =>(
    {
        type:CHANGE_MESSAGE_NAME,
        payload : event.target.value
    }
)
export let message_emailInput = (event) =>(
    {
        type:CHANGE_MESSAGE_EMAIL,
        payload : event.target.value
    }
)
export let message_phoneInput = (event) =>(
    {
        type:CHANGE_MESSAGE_PHONE,
        payload : event.target.value
    }
)
export let message_subjectInput = (event) =>(
    {
        type:CHANGE_MESSAGE_SUBJECT,
        payload : event.target.value
    }
)
export let message_messageInput = (event) =>(
    {
        type:CHANGE_MESSAGE_MESSAGE,
        payload : event.target.value
    }
)

// New Post Info


export let headinginput = (event) =>(
    {
        type:CHANGE_HEADING,
        payload : event.target.value
    }
)
export let fileupload = (event) =>(
    {
        type:CHANGE_PHOTO,
        payload : event.target.files[0]
    }
)
export let postinput = (event) =>(
    {
        type:CHANGE_POST_CONTENT,
        payload : event.target.value
    }
)

// click on close of post 

export const close = ()=>(dispatch)=>{
    dispatch({type:CHANGE_ERR_MESSAGE,payload:""})
    let remove = document.getElementsByClassName("cartoon")[0]
    remove.classList.remove("active")
    let input =  document.getElementsByTagName("input")[0]
        input.value = "";
    let textarea = document.getElementsByTagName("textarea")[0]
        textarea.value = "";
    }
    

// Submit Post to Display

export let sumbitpost =  (cb)=>(dispatch ,getstate)=>{
    
    
    
    let formdata =  new FormData()
    formdata.append("file", getstate().compose_post.file)
    formdata.append("heading", getstate().compose_post.heading)
    formdata.append("Post", getstate().compose_post.post)
  
  
    fetch("http://localhost:5000/",{
        method : "post",
       
        body :formdata
            
        
    }).then(res => res.json().then(data=>{
        
        if (data==="🙁:Please Enter atleast Heading and Post"){
            dispatch({type:CHANGE_ERR_MESSAGE,payload:data})
            
        }else{

            dispatch({type:CHANGE_POST,payload:data})
            colorchnage()
            cb()
            dispatch({type: CHANGE_PHOTO,payload:""})
            dispatch({type: CHANGE_POST_CONTENT,payload:""})
            dispatch({type: CHANGE_HEADING,payload:""})
        }

    })
    )
   
}

// display only 100 character on Post Content

export let posttothepost = (postThepost) =>{
   
    
    
    if(postThepost.length <= 100){
       
        return postThepost
    }else if (postThepost.length >= 100){
        
        
        return postThepost.slice(0,100)+"..."
        
        
        
    }
    
    
}

// more button action perform of ALL Post

export let more = (event)=>(dispatch,getstate) =>{

    let post = getstate().posts.Post
    let index = post.findIndex(x=>x._id=== event.target.value)
    
     let expend  = document.getElementsByClassName("posttopost")[index]
     
     let togglemore = document.getElementsByClassName("moreandmore")[index]
     
   
     if (getstate().ismoreclick.ismore ===true){
         togglemore.innerHTML = "Less"
         
         dispatch({type:CHANGE_IS_CLICK_MORE ,payload:false})
         expend.innerHTML = post[index].Post
         
         
        }else {
            if (getstate().posts.Post[index].Post.length <= 100){
                
                togglemore.innerHTML = "More"
                dispatch({type:CHANGE_IS_CLICK_MORE ,payload:true})
                expend.innerHTML = post[index].Post
                
            }else {
                
                togglemore.innerHTML = "More"
                dispatch({type:CHANGE_IS_CLICK_MORE ,payload:true})
                expend.innerHTML = post[index].Post.slice(0,100)+"..."

            }
    }



}

//  More button perfrom on Single Page Post component

export let moreForOnePost = (event)=>(dispatch,getstate) =>{

    let post = getstate().onePost.singlePost
    let index = post.findIndex(x=>x._id=== event.target.value)
    
     let expend  = document.getElementsByClassName("posttopost")[index]
     
     let togglemore = document.getElementsByClassName("moreandmore")[index]
     
    
     if (getstate().ismoreclick.ismore ===true){
         togglemore.innerHTML = "Less"
         
         dispatch({type:CHANGE_IS_CLICK_MORE ,payload:false})
         expend.innerHTML = post[index].Post
         
         
        }else {
            if (post[index].Post.length <= 100){
                
                togglemore.innerHTML = "More"
                dispatch({type:CHANGE_IS_CLICK_MORE ,payload:true})
                expend.innerHTML = post[index].Post
                
            }else {
                
                togglemore.innerHTML = "More"
                dispatch({type:CHANGE_IS_CLICK_MORE ,payload:true})
                expend.innerHTML = post[index].Post.slice(0,100)+"..."

            }
    }



}

// poping Up Compose Post Component

export let Compose = ()=>{
        
    let active = document.getElementsByClassName("cartoon")[0]
    
    
    active.classList.add("active") 
    let animate = document.getElementsByClassName("compose")[0]
    animate.classList.add("animate__bounceIn")      
    
}

// Action On searching Field with No page change 

export let search = (text) => (dispatch,getState)=>{
    
    dispatch({type:CHANGE_SEARCHFIELD,payload:text.target.value})
    let allpostforsearch = getState().allposts.AllPost
    
    let resultofsearch = allpostforsearch.filter(post=>{
        
        return post.Post.toLowerCase().includes(text.target.value.toLowerCase()) || post.heading.toLowerCase().includes(text.target.value.toLowerCase()) 
    })
    
    dispatch({type:CHANGE_POST,payload:resultofsearch})
    
 
}



export let searchfield = (event) => ({type:CHANGE_SEARCHFIELD,payload:event.target.value})

// admin sign Up call to api

export let adminSignUp = (cb) =>(dispatch,getstate)=>{
    let {email,name,password } = getstate().sign_up
    fetch("http://localhost:5000/admin/signup",{
        method:"POST",
        headers : {
            "Content-Type" : "application/json", 
        },
        body: JSON.stringify({
            email:email,
            name:name,
            password:password
        })
    }).then((res)=>res.json()).then(data=>{
      
        if (data ==="Please Fill All Information"){
            dispatch({type:CHANGE_SIGNUP_ERR,payload:data})
        }else{
            localStorage.setItem("auth",true)
            dispatch({type:CHANGE_AUTH_STATUS,payload:true})
            cb()
        }
    }).catch(err=>{
        
    })
} 

// admin Sign In call to api


export let adminSignIn = (cb) =>(dispatch,getstate)=>{
    let {email,password } = getstate().sign_In
    fetch("http://localhost:5000/admin/signin",{
        method:"POST",
        headers : {
            "Content-Type" : "application/json", 
        },
        body: JSON.stringify({
            email:email,
            password:password
        })
    }).then((res)=>res.json()).then(data=>{
        if (data==="Email and Password is Not match"){
            dispatch({type:CHANGE_SIGNIN_ERR,payload:data})
        }else{
            localStorage.setItem("auth",true)
            dispatch({type:CHANGE_AUTH_STATUS,payload:true})
            cb()
        }
    }).catch(err=>{
        console.log(err)
    })
} 

// logging out From admins page 

export let removeLocalStorage = (cb) =>{
    localStorage.removeItem("auth")
    cb()
}

// sending contact us Page qurry 

export let send_query = (cb)=> (dispatch,getstate)=>{
    let {Name,Email,Phone,Subject,Message} = getstate().message
    
    fetch("http://localhost:5000/admin/message",{
        method:"POST",
        headers : {
            "Content-Type" : "application/json", 
        },
        body: JSON.stringify({
            Name:Name,
            Email:Email,
            Phone:Phone,
            Subject:Subject,
            message:Message
        })
    }).then(res=>res.json()).then(data=>{
       
        if(data==="Please Enter All The Information"){
            dispatch({type:CHANGE_ERR_MESSAGE,payload:data})
        }else{
            cb()
        }
       
    }).catch(err=>{
       
    })
    
}

// read Message call to api For Change isClick To true

export let readMessage = (event)=>{
   
    fetch("http://localhost:5000/messagesclick",{
        method : "put",
        headers : {
            "Content-Type" : "application/json"
        },
        body : JSON.stringify({
            id : event.target.attributes.value.nodeValue
        })
    })
}

// fetching all message From Api

export let fetching_message = () =>(dispatch)=>{
    
    fetch("http://localhost:5000/messages").then(res=>res.json())
    .then(mess=>{

        dispatch({type:CHANGE_ALL_MESSAGES,payload:mess})

        dispatch({type:PREVIOUS_MESSAGE_READ,payload:mess.length})

        
    let unread_messages = mess.filter(items=>{
        return items.isClick===false
    })
    
    dispatch({type:CHANGE_UNREAD_MESSAGES_COUNT,payload:unread_messages.length})
    }
    )
}

// dispalying message on Message Box

export let showmessage = (id) =>(dispatch,getstate)=>{
    
    fetch(`http://localhost:5000/showmessage/${id}`).then(res =>res.json()).then(show_message=>{

        dispatch({type:CHANGE_SHOW_MESSAGE,payload:show_message})
    })
    
    
}