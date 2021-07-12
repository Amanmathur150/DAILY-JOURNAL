import "./ConfirmMessage.css"
import {confimtrue,confirmfalse} from "../../actions" 
import { connect } from "react-redux"

// const mapToStatetoProps = (state) =>{
//     return {
//         username: state.loadUsers_plz.name,
//         userface: state.loadUsers_plz.face,
//         userRank: state.loadUsers_plz.rank
//     }
// }
const mapToDispatchtoProps = (dispatch) =>{
    return {
        confimtrue:()=>dispatch(confimtrue()),
        confirmfalse: ()=>dispatch(confirmfalse()),
        
    }
}


function ConfirmMessage({confimtrue,confirmfalse}){  
    return (
        <div className="pop-up">

        
            <div className="message">
                <div className="confirm">
                Confirm Message
                </div>
                <div className="message-text">Do You Really Want to delete this Post</div>
                
                <div className="button-position">
                    <div className="button" onClick={confimtrue}>
                        Confim
                    </div>
                    <div className="button" onClick={confirmfalse}>
                        Cencel
                    </div>
                </div>
            </div>
        </div>
    )

}


export default connect(null,mapToDispatchtoProps)(ConfirmMessage);