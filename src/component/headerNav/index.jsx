import React from 'react';
import { BrowserRouter as Router,Route,Redirect,Link,Switch } from 'react-router-dom';
import './index.css';
import Login from  "../../page/login/index"
import userico from "../../img/01.png"
import ico from "../../img/05.png"

class HeaderNav extends React.Component{
    constructor(){
        super();
        this.state={
            username:"进入后台管理系统",

        }
        // console.log( this.state.userimg)
    }
    render(){
       
        return(
            <div className="headerNav">
                <div className="headerNav-content">
                    <div className="headerNav-content-ico">
                        <img src={ico}/>
                    </div>
                    <div className="headerNav-content-user" onClick={()=>{this.OnClickuserlogin()}} >
                        <div className="headerNav-content-username">{this.state.username}</div>
                        {/* <div className="headerNav-content-userimg">
                            <div className="dropdown">
                            <a className="avatar">
                            <img src={userico}/>
                            </a>
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>
        )
    }
    OnClickuserlogin(){
        window.location.href="/login"
    }




} 
export default HeaderNav; 

