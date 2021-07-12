import {
    BrowserRouter as Router,
    Switch,
    Route,
    
    Redirect
    
  } from "react-router-dom";

import { store } from "./index" ;

import { connect } from "react-redux";

import AdminHomePage from "./Pages/AdminHomePage";
import ThankYouPage from "./Pages/ThankYouPage";
import PublicHomePage from "./Pages/PublicHomePage";
import ShowMessagePage from "./Pages/ShowMessagePage";
import Aboutus from "./Pages/Aboutus.js" ;
import Contact from "./Pages/Contact.js";
import MessagesPage from "./Pages/MessagesPage.js";
import PostPage from "./Pages/PostPage.js"
import ComposePostPage from "./Pages/ComposePostPage";
import SignUp from "./Components/SignUp/SignUp";
import SignIn from "./Components/SignIn/SignIn";


const mapToStatetoProps = state => ({
  isAuth : state.auth.auth
})


let App = ({isAuth})=>{
    
    return (
        <Router>
          <Switch>
          
         
              <Route exact path="/">
                      <PublicHomePage store={store} />
              </Route> 

              <Route path="/about">
                <Aboutus />
              </Route>

              <Route path="/Contact">
                <Contact />
              </Route>

              <Route exact path="/post/:id">
                <PostPage />
              </Route>
              
              <Route path="/admin/signup">
                <SignUp />
              </Route>

              <Route path="/admin/signin">
                <SignIn />
              </Route>

              <Route path="/thankyou">
                <ThankYouPage />
              </Route>

              { isAuth ? 
              
              <div>
                <Route exact path="/admin">
                  <AdminHomePage store={store} />
                </Route> 
                <Route path="/admin/composepost">
                  <ComposePostPage />
                </Route>
                <Route path="/admin/messages">
                  <MessagesPage />
                </Route>
                <Route  path="/admin/message/:id">
                  <ShowMessagePage />
                </Route>
              </div> 
              : 
              <Redirect exact to="/" />
              }
      </Switch>
    </Router>
    )
}

export default connect(mapToStatetoProps,null)(App);