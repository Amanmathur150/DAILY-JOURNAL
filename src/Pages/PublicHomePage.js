import {useEffect} from "react"
import {connect} from "react-redux"
import Navbar from "../Components/Nav-bar/Nav-bar";
import Header from "../Components/Header/Header";

import "../index.css";
import PublicPost from "../Components/Post/PublicPost"

import ConfirmMessage from "../Components/ConfirmMessage/ConfirmMessage"

import { CHANGE_POST,CHANGE_ALL_POST,CHANGE_AUTH_STATUS } from "../Constant";
import {colorchnage,changepostlist } from "../actions"

const mapToDispatchtoProps = (dispatch) =>(
    {
        colorchnage : ()=>colorchnage(),
        changepostlist : ()=>dispatch(changepostlist())
    }
    )

function PublicHomePage({store,colorchnage}){

    useEffect(()=>{
        fetch("http://localhost:5000").then(res=>res.json().then(data5=>{
            store.dispatch({ type: CHANGE_POST , payload: data5 })
            store.dispatch({ type: CHANGE_ALL_POST , payload: data5 })
               colorchnage()
            }))},[colorchnage,store])

    useEffect(()=>{
        let auth = JSON.parse(localStorage.getItem("auth"))
                
                store.dispatch({type:CHANGE_AUTH_STATUS , payload:auth})
    },[store])

    return (
        <div>
            <ConfirmMessage />
            <Navbar />
            <Header />
            <PublicPost />
        </div>  

    )
}

export default connect(null,mapToDispatchtoProps)(PublicHomePage);
