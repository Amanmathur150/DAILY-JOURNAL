import {useEffect} from "react"
import {connect} from "react-redux"
import Navbar from "../Components/Nav-bar/Nav-bar";
import Header from "../Components/Header/Header";


import "../index.css";
import AdminPost from "../Components/Post/AdminPost"

import ConfirmMessage from "../Components/ConfirmMessage/ConfirmMessage"
import Adminbar from "../Components/Adminbar/Adminbar"
import { CHANGE_POST,CHANGE_ALL_POST, CHANGE_AUTH_STATUS } from "../Constant";
import {colorchnage,changepostlist,fetching_message } from "../actions"

const mapToDispatchtoProps = (dispatch) =>(
    {
        colorchnage : ()=>colorchnage(),
        changepostlist : ()=>dispatch(changepostlist()),
        fetching_message : ()=>dispatch(fetching_message()),
        
    }
    )

function AdminHomePage({store,colorchnage,fetching_message}){

    useEffect(()=>{
        fetch("http://localhost:5000").then(res=>res.json().then(data5=>{
      
            store.dispatch({ type: CHANGE_POST , payload: data5 })
            store.dispatch({ type: CHANGE_ALL_POST , payload: data5 })

               colorchnage()
            }))},[colorchnage,store])

    useEffect(()=>{
        let auth = JSON.parse(localStorage.getItem("auth"))
        console.log(auth)
        store.dispatch({type:CHANGE_AUTH_STATUS , payload:auth})
    },[store])

    useEffect(()=>{
        fetching_message()
       
    },[fetching_message])

    
    

    return (
        <div>
            <ConfirmMessage />
            <Navbar />
            <Header />
            <Adminbar />
            <AdminPost />
        </div>  

    )
}

export default connect(null,mapToDispatchtoProps)(AdminHomePage);
