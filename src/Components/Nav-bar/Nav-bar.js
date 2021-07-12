import {
    Link, 
  } from "react-router-dom";

import "./Navbar.css"
import {connect} from "react-redux"
import {search,searchfield} from "../../actions"

let mapToDispatchToProp = (dispatch)=>({
    search:(event)=>dispatch(search(event)),
    searchfield:(event)=>dispatch(searchfield(event))
})

function Navbar({search}){
   
    return (
        
        <nav>
        
            <div className="container">
             
               
                    <h1 className="left-items" >
                    <Link to="/">

                    DAILY JOURNAL
                    </Link>
                    </h1>
               
                <div className="right-items" >

                    <h2>
                        <Link to="/">HOME</Link>
                    </h2>
                    <h2>
                    <Link to="/about">ABOUT US</Link>
                    </h2>
                    <h2>
                    
                    <Link to="/Contact">CONTACT US</Link> 
                    
                    </h2>
                </div>
                    <input type="txt" onChange={search}
                    className="seach-box" placeholder="Seach for Post..." />
      
            </div>
        </nav>
      
      )
}

export default connect(null,mapToDispatchToProp)(Navbar);
