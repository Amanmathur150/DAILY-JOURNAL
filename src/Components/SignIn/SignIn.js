
import "./SignIn.css";

import { connect } from "react-redux"
import {signIn_emailInput,signIn_passwordInput,adminSignIn} from "../../actions" ;
import { useHistory,Link } from "react-router-dom";

const mapToStatetoProps = (state)=>({
    errlogin : state.sign_In.err,
    
})

const mapToDispatchtoProps = (dispatch)=>({
    adminSignIn:(cb)=>dispatch(adminSignIn(cb)),
   
    emailInput:(event)=>dispatch(signIn_emailInput(event)),
    passwordInput:(event)=>dispatch(signIn_passwordInput(event)),
    
})




function SignIn({emailInput,passwordInput,adminSignIn,errlogin}){
    let history = useHistory()
    return (
        <div className="cartoon-signin">

            <div className="Signin">
                <h1>Sign In</h1>
                <h3>Email</h3>
                <input type="Email" onChange={emailInput} placeholder="Email" required
                 />
                <h3>Password:</h3>
                <input type="password" id="" onChange={passwordInput} placeholder="Password" />
        
                <h3 className="errmessage"> {errlogin}</h3>
             
                <div className="button-position">
                <button type="submit" className="centeron" onClick={()=>adminSignIn(()=>
                    

                    history.push("/admin") 
                    
                )} >Sign In</button>
                <Link to="/admin/signup">

                <button  className="centeron">Sign Up</button>
                </Link>
                </div>

                
                

            </div>

        </div>
    )
}

export default connect(mapToStatetoProps,mapToDispatchtoProps)(SignIn);