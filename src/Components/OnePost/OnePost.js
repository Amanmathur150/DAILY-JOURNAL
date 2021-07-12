import {connect } from "react-redux"
import { ParallaxProvider, Parallax } from "react-skrollr";

import {deleteitem,posttothepost ,moreForOnePost,Change_One_Post,colorchnage} from "../../actions"
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import "../Post/Post.css"
  



const mapToStatetoProps = state =>({
    one_Post: state.onePost.singlePost
  
})


const mapToDispatchtoProps = dispatch =>({
  deleteitem : (event)=> dispatch(deleteitem(event)),
  posttothepost : (postThepost)=> posttothepost(postThepost),
  moreForOnePost : (event)=> dispatch(moreForOnePost(event)),
  colorchnage : ()=>colorchnage(),
  Change_One_Post : (id)=> dispatch(Change_One_Post(id))
})  

const data = {
     
     "data-center-center": "opacity: 1;",
     "data-bottom-top": "opacity: 0;"
   };

  
   
  //  const data2 = {
  //    "data-top": "opacity:1;background-color:rgb(255,0,0);;",
  //    "data-center-center": "opacity: 1;",
  //    "data-bottom": "opacity: 0;background-color:rgb(0,0,255);"
  //  }
   
  //  const data3 = {
  //    "data-100-bottom": "left:200px;opacity: 0;",
  //    "data-center-center": "opacity: 1;",
  //    "data--100-bottom": "opacity: 0;left:200px;"
  //  }

   function OnePost({one_Post,deleteitem,posttothepost,moreForOnePost,Change_One_Post,togglemore,uploadedimg}){
    
    let {id} = useParams()
    
    

    
useEffect(()=>{

    Change_One_Post(id)
},[Change_One_Post,id])
   
      
    

    return (
     <ParallaxProvider
    init={{
      smoothScrollingDuration: 1000,
      smoothScrolling: true,
      forceHeight: false
    }}
    getScrollTop={scrollTop => console.log("scrollTop", scrollTop)}>
        <div>
        
          {one_Post.map(singlePost=>{

          if (!singlePost.ImgURL.length){

          
            return (<Parallax data={data}>
              <div className="container-post">
                <div className="box-nav">
                  <h3>{singlePost.heading}</h3>
                  
                </div>
                <hr style={{
                  border: "1px solid black",
                  width: "100%"
                }} />
                
                <div className="zarasideho">
                  <h4 className="posttopost">
                    {posttothepost(singlePost.Post)}
                  </h4>
                  <button type="submit" className="moreandmore" value={singlePost._id} onClick={moreForOnePost}>
                    More
                  </button>
                </div>
              </div>
            </Parallax>)
          }else{
          return(
             <Parallax data={data}>
              <div className="container-post">
                <div className="box-nav">
                  <h3>{singlePost.heading}</h3>
                  
                </div>
                <hr style={{
                  border: "1px solid black",
                  width: "100%"
                }} />
                  <img src={singlePost.ImgURL} style={{}} alt="post" />
                
                <div className="zarasideho">
                  <h4 className="posttopost">
                    {posttothepost(singlePost.Post)}
                  </h4>
                  <button type="submit" className="moreandmore" value={singlePost._id} onClick={moreForOnePost}>
                    More
                  </button>
                </div>
              </div>
            </Parallax>)
          }

          })}
          </div>
       </ParallaxProvider>
    )
}

export default connect(mapToStatetoProps,mapToDispatchtoProps)(OnePost);