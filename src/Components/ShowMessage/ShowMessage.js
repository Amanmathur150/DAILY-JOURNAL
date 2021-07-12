import { useEffect } from "react";
import { useParams } from "react-router-dom";
import "./ShowMessage.css"
import {connect} from "react-redux"
import {showmessage} from "../../actions"

let mapToStatetoProps = (state) =>{
    return {
        onemessage : state.showMessage.showMessage 
    }
}
let mapToDispatchtoProps = (dispatch) =>{
    return {
        showmessage : (id)=> dispatch(showmessage(id))
    }
}

function ShowMessage({onemessage,showmessage}){

    let {id}= useParams()
    useEffect(()=>{
        showmessage(id)
    },[showmessage,id])

    return (
        <div className="Show-messagebox">
            <div className="details">
            <div className="Show-message-heading">Message</div>
            {onemessage.map(message=>{
                return <div>
                <div className="info-div">
                <div className="info-tittle">From :</div>
                <div className="info-detail">{message.Email}</div>
            </div>
            <div className="info-div">
                <div className="info-tittle">Name:</div>
                <div className="info-detail">{message.Name}</div>
            </div>
            <div className="info-div">
                <div className="info-tittle">Phone:</div>
                <div className="info-detail">{message.Phone}</div>
            </div>
            <div className="info-div">
                <div className="info-tittle">Subject:</div>
                <div className="info-detail">{message.Subject}</div>
            </div>
            <div className="info-div">
                <div className="info-tittle">Message:</div>
                <div className="info-detail">{message.Message}</div>
            </div>
            </div>
            })}
             
        </div>

    </div>
    
    )
}

export default connect(mapToStatetoProps,mapToDispatchtoProps)(ShowMessage);