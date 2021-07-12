import "./Message.css";
import { connect } from "react-redux";
import {Link} from "react-router-dom"

import {readMessage,fetching_message} from "../../actions"
import { useEffect } from "react";

let mapToStatetoProps = (state) =>{
    return {
        all_message: state.all_message.messages,
        
    }
}
let mapToDispatchtoProps = (dispatch) =>{
    return {
        readMessage: (event)=>readMessage(event),
        fetching_message:()=>dispatch(fetching_message()),
      
    }
}

let Message = ({readMessage,fetching_message,all_message}) =>{

    useEffect(()=>{
        fetching_message()
    },[fetching_message])

   

    return (
        <div className="large-message-container">

        
        <div className="message-container">
            <div className="message-heading">MESSAGES</div>
        <div className="container-heading-wrapper">
            <div className="message-time-heading">
                Date & Time
            </div>
            
            <div className="message-subject-heading">
                Subject
            </div>
            </div>
            
            {all_message.map((item)=>{
                if(item.isClick===false){
                    return (<div className="container-wrapper-new">
                                <div className="date-time">
                                    {item.Date},{item.Time}
                                </div>
                                <Link to={`/admin/message/${item._id}`} onClick={readMessage} >
                                    <div className="message-subject" value={item._id}>
                                    <span className="new">New </span>{item.Subject}
                                    </div>
                                
                                </Link>
                            </div>)
                }else{
                    return (<div className="container-wrapper-read">
                        <div className="date-time">
                        {item.Date},{item.Time}
                        </div>
                        <Link to={`/admin/message/${item._id}`} onClick={readMessage} >
                            <div className="message-subject" value={item._id}>
                            {item.Subject}
                            </div>
                        
                        </Link>
                    </div>)
                }
            })}
            
            
        </div>
        </div>
    )
} 

export default connect(mapToStatetoProps,mapToDispatchtoProps)(Message);