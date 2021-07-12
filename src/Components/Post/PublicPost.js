import "./Post.css"
import {connect } from "react-redux"
import { ParallaxProvider, Parallax } from "react-skrollr";
import {deleteitem,posttothepost ,more,search} from "../../actions"
import { Link } from "react-router-dom";




const mapToStatetoProps = state =>({
  post: state.posts.Post
  
})

const mapToDispatchtoProps = dispatch =>({
  deleteitem : (event)=> dispatch(deleteitem(event)),
  posttothepost : (postThepost)=> posttothepost(postThepost),
  more : (event)=> dispatch(more(event)),
  search : ()=> dispatch(search())
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

   function PublicPost({post,posttothepost,more}){
    
    
    

    return (
     <ParallaxProvider
    init={{
      smoothScrollingDuration: 1000,
      smoothScrolling: true,
      forceHeight: false
    }}
    getScrollTop={scrollTop => console.log("scrollTop", scrollTop)}>
        <div>
        {post.map(postitems=>{
          
          if(!postitems.ImgURL.length){
            return (<Parallax data={data} key={postitems._id}>
              <div className="container-post">
                <div className="box-nav">
                <Link to = {`/post/${postitems._id}`}>                  
                <h3>{postitems.heading}</h3>
                </Link>

                 
                </div>
                <hr style={{
                  border: "1px solid black",
                  width: "100%"
                }} />
                
                <div className="zarasideho">
                  <h4 className="posttopost">
                    {posttothepost(postitems.Post)}
                  </h4>
                  <button type="submit" className="moreandmore" value={postitems._id} onClick={more}>
                    More
                  </button>
                </div>
              </div>
            </Parallax>)
          }else{
          return (
            <Parallax data={data} key={postitems._id}>
              <div className="container-post">
                <div className="box-nav">
                <Link to = {`/post/${postitems._id}`}>                  
                <h3>{postitems.heading}</h3>
                </Link>
                  
                </div>
                <hr style={{
                  border: "1px solid black",
                  width: "100%"
                }} />
                <img src={postitems.ImgURL} style={{}} alt="post" />
                <div className="zarasideho">
                  <h4 className="posttopost">
                    {posttothepost(postitems.Post)}
                  </h4>
                  <button type="submit" className="moreandmore" value={postitems._id} onClick={more}>
                    More
                  </button>
                </div>
              </div>
            </Parallax>
        );}
        })
        }
          </div>
       </ParallaxProvider>
    )
}

export default connect(mapToStatetoProps,mapToDispatchtoProps)(PublicPost);