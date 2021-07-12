import "./ComposePost.css";

import { connect } from "react-redux"
import {close,sumbitpost,headinginput,postinput,fileupload} from "../../actions" ;
import { useHistory } from "react-router-dom";

const mapToStatetoProps = (state)=>({
    errmessage : state.err.errmessage
})

const mapToDispatchtoProps = (dispatch)=>({
    close:()=>dispatch(close()),
    sumbitpost:(cb)=>dispatch(sumbitpost(cb)),
    headinginput:(event)=>dispatch(headinginput(event)),
    postinput:(event)=>dispatch(postinput(event)),
    fileupload:(event)=>dispatch(fileupload(event)),
})




function ComposePost({close,sumbitpost,headinginput,postinput,fileupload,errmessage}){
    let history = useHistory()
    return (
        <div className="cartoon">

            <div className="compose">
                <h1>Compose</h1>
                <h3>Tittle</h3>
                <input type="text" onChange={headinginput} placeholder="Tittle" required
                minLength="4" maxLength="72" />
                <h3>upload Photo</h3>

                <input type="file" onChange={fileupload} />


                <h3>Post</h3>
                <textarea id="" onChange={postinput} rows="6" cols="50" placeholder="Write Your Story Here">
                
                </textarea> 
                <h3 className="errmessage"> {errmessage}</h3>
                
                  
                <div className="button-position">
                <button type="submit" onClick={()=>sumbitpost(()=>{
                    history.push("/admin")
                })} className="centeron">POST</button>
                <button onClick={close} className="centeron">Cencel</button>
                </div>

                
                

            </div>

        </div>
    )
}

export default connect(mapToStatetoProps,mapToDispatchtoProps)(ComposePost);