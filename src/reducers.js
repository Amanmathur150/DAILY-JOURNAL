import { CHANGE_CONFIRM_DELETE ,
        CHANGE_POST , 
        CHNAGE_ID ,
        CHANGE_HEADING,
        CHANGE_POST_CONTENT,
        CHANGE_PHOTO,
        CHANGE_IS_CLICK_MORE,
        CHANGE_ONE_POST,
        CHANGE_SEARCHFIELD,
        CHANGE_ALL_POST,
        CHANGE_ERR_MESSAGE,
        CHANGE_SIGNUP_PASSWORD,
        CHANGE_SIGNUP_NAME,
        CHANGE_SIGNUP_EMAIL,
        CHANGE_SIGNUP_ERR,
        CHANGE_SIGNIN_PASSWORD,

        CHANGE_MESSAGE_NAME,
        CHANGE_MESSAGE_EMAIL,
        CHANGE_MESSAGE_PHONE,
        CHANGE_MESSAGE_SUBJECT,
        CHANGE_MESSAGE_MESSAGE,
        
        CHANGE_SIGNIN_EMAIL,
        CHANGE_SIGNIN_ERR,
        CHANGE_AUTH_STATUS,
        CHANGE_ALL_MESSAGES,

        PREVIOUS_MESSAGE_READ,

        CHANGE_UNREAD_MESSAGES_COUNT,
        
        CHANGE_SHOW_MESSAGE
    } from "./Constant"




export const intialConfirm ={
    confirmDelete : Boolean 
}

export const changeConfirmDelete = (state = intialConfirm, action={})=>{
    switch(action.type){
        case CHANGE_CONFIRM_DELETE:
            return Object.assign({},state,{confirmDelete:action.payload})
        default:
            return state
    }

}
export const intialPost ={
    Post : []
}

export const posts = (state = intialPost, action={})=>{
    
    switch(action.type){
        case CHANGE_POST:
            return Object.assign({},state,{Post:action.payload})
        default:
            return state
    }

}
export const intialALLPost ={
    AllPost : []
}

export const allposts = (state = intialALLPost, action={})=>{
    
    switch(action.type){
        case CHANGE_ALL_POST:
            return Object.assign({},state,{AllPost:action.payload})
        default:
            return state
    }

}
export const intialOnePost ={
    singlePost : []
}

export const onePost = (state = intialOnePost, action={})=>{
    
    switch(action.type){
        case CHANGE_ONE_POST:
            return Object.assign({},state,{singlePost:action.payload})
        default:
            return state
    }

}
export const intialerrmessage ={
    errmessage : []
}

export const err = (state = intialerrmessage, action={})=>{
    
    switch(action.type){
        case CHANGE_ERR_MESSAGE:
            return Object.assign({},state,{errmessage:action.payload})
        default:
            return state
    }

}
export const initial_SignUp ={
    name : "",
    email : "",
    password : "",
    err:""
}

export const sign_up = (state = initial_SignUp, action={})=>{
    
    switch(action.type){
        case CHANGE_SIGNUP_PASSWORD:
            return Object.assign({},state,{password:action.payload})
        case CHANGE_SIGNUP_NAME:
            return Object.assign({},state,{name:action.payload})
        case CHANGE_SIGNUP_EMAIL:
            return Object.assign({},state,{email:action.payload})
        case CHANGE_SIGNUP_ERR:
            return Object.assign({},state,{err:action.payload})
        default:
            return state
    }

}
export const initial_SignIn ={
  
    email : "",
    password : "",
    err:""
}

export const sign_In = (state = initial_SignIn, action={})=>{
    
    switch(action.type){
        case CHANGE_SIGNIN_PASSWORD:
            return Object.assign({},state,{password:action.payload})
     
        case CHANGE_SIGNIN_EMAIL:
            return Object.assign({},state,{email:action.payload})
        case CHANGE_SIGNIN_ERR:
            return Object.assign({},state,{err:action.payload})
        default:
            return state
    }

}
export const intial_Id ={
    id : ""
}

export const change_id = (state = intial_Id, action={})=>{
    switch(action.type){
        case CHNAGE_ID:
            return Object.assign({},state,{id:action.payload})
        default:
            return state
    }

}
export const intial_auth ={
    auth : Boolean
}

export const auth = (state = intial_auth, action={})=>{
    switch(action.type){
        case CHANGE_AUTH_STATUS:
            return Object.assign({},state,{auth:action.payload})
        default:
            return state
    }

}
export const intial_post ={
    heading : "",
    post:"",
    file:""
}

export const compose_post = (state = intial_post, action={})=>{
    switch(action.type){
        case CHANGE_HEADING:
            return Object.assign({},state,{heading:action.payload})
        case CHANGE_POST_CONTENT:
            return Object.assign({},state,{post:action.payload})
        case CHANGE_PHOTO:
            return Object.assign({},state,{file:action.payload})
        default:
            return state
    }

}
export const intial_message ={
    Name : "",
    Email:"",
    Phone:"",
    
    Subject:"",
    Message:"",
}

export const message = (state = intial_message, action={})=>{
    switch(action.type){
        case CHANGE_MESSAGE_NAME:
            return Object.assign({},state,{Name:action.payload})
        case CHANGE_MESSAGE_EMAIL:
            return Object.assign({},state,{Email:action.payload})
        case CHANGE_MESSAGE_PHONE:
            return Object.assign({},state,{Phone:action.payload})
        case CHANGE_MESSAGE_SUBJECT:
            return Object.assign({},state,{Subject:action.payload})
        case CHANGE_MESSAGE_MESSAGE:
            return Object.assign({},state,{Message:action.payload})
        
        default:
            return state
    }

}
export const intial_ismore ={
    ismore: true
}

export const ismoreclick = (state = intial_ismore, action={})=>{
    switch(action.type){
        case CHANGE_IS_CLICK_MORE:
            return Object.assign({},state,{ismore:action.payload})
        
        default:
            return state
    }

}
export const intial_messages ={
    messages: []
}

export const all_message = (state = intial_messages, action={})=>{
    switch(action.type){
        case CHANGE_ALL_MESSAGES:
            return Object.assign({},state,{messages:action.payload})
        
        default:
            return state
    }

}
export const intial_readed_message ={
    previous_message: 0
}

export const readed_messages = (state = intial_readed_message, action={})=>{
    switch(action.type){
        case PREVIOUS_MESSAGE_READ:
            return Object.assign({},state,{previous_message:action.payload})
        
        default:
            return state
    }

}
export const intial_unread_message ={
    unread_message: 0
}

export const unread_messages = (state = intial_unread_message, action={})=>{
    switch(action.type){
        case CHANGE_UNREAD_MESSAGES_COUNT:
            return Object.assign({},state,{unread_message:action.payload})
        
        default:
            return state
    }

}
export const intial_seachfield ={
    searchfield: ""
}

export const searchfield = (state = intial_seachfield, action={})=>{
    switch(action.type){
        case CHANGE_SEARCHFIELD:
            return Object.assign({},state,{searchfield:action.payload})
        
        default:
            return state
    }

}
export const intial_ShowMessage ={
    showMessage: []
}

export const showMessage = (state = intial_ShowMessage, action={})=>{
    switch(action.type){
        case CHANGE_SHOW_MESSAGE:
            return Object.assign({},state,{showMessage:action.payload})
        
        default:
            return state
    }

}