import "./SignUp.css";

import { connect } from "react-redux"
import {signUp_emailInput,signUp_passwordInput,signUp_nameInput,adminSignUp} from "../../actions" ;
import { useHistory , Link } from "react-router-dom";

const mapToStatetoProps = (state)=>({
    errlogin : state.sign_up.err
})

const mapToDispatchtoProps = (dispatch)=>({
    
    adminSignUp:(cb)=>dispatch(adminSignUp(cb)),
    emailInput:(event)=>dispatch(signUp_emailInput(event)),
    passwordInput:(event)=>dispatch(signUp_passwordInput(event)),
    nameInput:(event)=>dispatch(signUp_nameInput(event)),
})




function SignUp({emailInput,passwordInput,nameInput,errlogin,adminSignUp}){
    let history = useHistory()
    return (
        <div className="cartoon-signup">

            <div className="SignUp">
                <h1>Sign Up</h1>
                <h3>Email</h3>
                <input type="Email" onChange={emailInput} placeholder="Email" required
                 />
                <h3>Name</h3>

                <input type="txt" onChange={nameInput} placeholder="Name" />


                <h3>Password:</h3>
                <input type="password" id="" onChange={passwordInput} placeholder="Password" />
                
                
                <h3 className="errmessage"> {errlogin}</h3>
                
                  
                <div className="button-position">
                <button type="submit" className="centeron" onClick={()=>adminSignUp(()=>{
                    history.push("/admin")
                })}>Sign Up</button>

                <Link to="/admin/signin">
                <button  className="centeron">Sign In</button>
                </Link>
                </div>

                
                

            </div>

        </div>
    )
}

export default connect(mapToStatetoProps,mapToDispatchtoProps)(SignUp);