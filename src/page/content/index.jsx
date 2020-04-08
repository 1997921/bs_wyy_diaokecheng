import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Launch from "./Launch";
import ShowList from "./ShowList"
import Showpic from "./ShowPic"
import Usershow from "./usershow"



class content extends React.Component{

    render(){
        return(
            <div className="content">
                   <Launch/>
                   <ShowList/>
                   <Showpic/>
                   <Usershow/>
            </div>
        )
    }
}
export default content;