
import {connect} from "react-redux"
import Navbar from "../Components/Nav-bar/Nav-bar";
import Header from "../Components/Header/Header";


import "../index.css";

import ComposePost from "../Components/ComposePost/ComposePost"
import ConfirmMessage from "../Components/ConfirmMessage/ConfirmMessage"
import Adminbar from "../Components/Adminbar/Adminbar"

import {colorchnage,changepostlist } from "../actions"

const mapToDispatchtoProps = (dispatch) =>(
    {
        colorchnage : ()=>colorchnage(),
        changepostlist : ()=>dispatch(changepostlist())
    }
    )

function ComposePostPage(){

    

    return (
        <div>
            <ConfirmMessage />
            <Navbar />
            <Header />
            <Adminbar />
            <ComposePost />
            
        </div>  

    )
}

export default connect(null,mapToDispatchtoProps)(ComposePostPage);
