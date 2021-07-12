
import "./admin.css";
import { Link, useHistory } from "react-router-dom";
import {removeLocalStorage,fetching_message} from "../../actions" 
import { connect } from "react-redux"

const mapToStatetoProps = (state)=>{
    return {
        unread_message_count : state.unread_messages.unread_message,
        
    }
}

const mapToDispatchtoProps = (dispatch)=>({
    removeLocalStorage:(cb)=> dispatch(removeLocalStorage(cb)),
    
    fetching_message:()=>dispatch(fetching_message())
})

function Adminbar({unread_message_count,fetching_message}){

    let history = useHistory()

    

    // fetching_message()


    return (
    <div className="admin-bar">
        <Link to="/admin/composepost">
            <button >COMPOSE POST</button>
        </Link>
        <Link to="/admin/messages">
            <button >MESSAGES<span id="new-message">{unread_message_count}</span></button>
        </Link>
            <button onClick={()=>
            removeLocalStorage(()=>
            history.push("/")
            )
            } 
            >LOGOUT</button>
    </div>   
    )
}

export default connect(mapToStatetoProps,mapToDispatchtoProps)(Adminbar);