
import "./ContactUsForm.css";

import { connect } from "react-redux"
import {close,message_nameInput,message_emailInput,message_phoneInput,message_subjectInput,message_messageInput,send_query} from "../../actions" ;
import { useHistory } from "react-router-dom";

const mapToStatetoProps = (state)=>({
    errmessage : state.err.errmessage
})

const mapToDispatchtoProps = (dispatch)=>({
    name:(event)=>dispatch(message_nameInput(event)),
    email:(event)=>dispatch(message_emailInput(event)),
    phone:(event)=>dispatch(message_phoneInput(event)),
    subject:(event)=>dispatch(message_subjectInput(event)),
    message:(event)=>dispatch(message_messageInput(event)),
    send_query:(cb)=>dispatch(send_query(cb)),
})




function ContactUsForm({errmessage,name,email,phone,subject,message,send_query}){
    let history = useHistory()
    return (
        <div className="cartoon">

            <div className="contactUs">
                <h1>Contact Us</h1>
                <h3>Name</h3>
                <input type="text"  placeholder="Name" onChange={name} required
                maxLength="72" />
                <h3>Email</h3>
                <input type="email"  placeholder="Email" onChange={email} required
                maxLength="72" />
                <h3>Phone</h3>
                <input type="tell"  placeholder="Phone No." onChange={phone} required
                 />
                <h3>Subject</h3>
                <input type="text"  placeholder="Subject" onChange={subject} required
                minLength="4" maxLength="72" />
               


                <h3>Write Your Qurry Here</h3>
                <textarea id="" onChange={message} rows="6" cols="50" placeholder="Write Your Story Here">
                
                </textarea> 
                <h3 className="errmessage"> {errmessage}</h3>
                
                  
                <div className="button-position">
                <button type="submit" onClick={()=>send_query(()=>{
                    history.push("/thankyou")
                })} className="centeron">POST</button>
                <button onClick={close} className="centeron">Cencel</button>
                </div>

                
                

            </div>

        </div>
    )
}

export default connect(mapToStatetoProps,mapToDispatchtoProps)(ContactUsForm);