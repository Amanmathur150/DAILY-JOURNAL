import React from 'react';
import ReactDOM from 'react-dom';

import "./index.css"
import App from "./App"

import { Provider } from 'react-redux';
import {createStore ,combineReducers ,applyMiddleware} from "redux" ;
import thunkMiddleware from "redux-thunk"
import {createLogger} from "redux-logger";

import {changeConfirmDelete , posts,change_id,auth,compose_post,ismoreclick,onePost,allposts,searchfield,err,sign_up,sign_In,message,all_message,readed_messages,unread_messages,showMessage} from "./reducers"

const rootReducer = combineReducers({changeConfirmDelete,posts,
                                        change_id,
                                        compose_post,
                                        ismoreclick,
                                        onePost,
                                        allposts,
                                        searchfield,
                                        err,
                                        sign_up,
                                        sign_In,
                                        auth,
                                        message,
                                        all_message,
                                        readed_messages,
                                        unread_messages,
                                        showMessage})

// const logger = createLogger()

export const store = createStore(rootReducer,applyMiddleware(thunkMiddleware))                                        



ReactDOM.render(

  <Provider store={store}>
   <App />
  </Provider>
  ,
  document.getElementById('root')
);