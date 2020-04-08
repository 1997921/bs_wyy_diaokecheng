import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'
import ico from "../../../img/01.png"
import { BrowserRouter as Router, Route, Redirect, Link, Switch } from 'react-router-dom';



class Showpic extends React.Component {
    
    constructor(props){
		super(props);
		this.state = {
            s_id:"s",
            y_id:"y",
            n_id:"n"
		}
	}

    render() {
        return (
            <div className="content-pag">
                <div className="footer-js"><span>雕刻 • 作品展</span></div>
                <div className="content-pag-lefttip">
                    <div className="tip-title-txt">
                        <p>作</p>
                        <p>品</p>
                        <p>展</p>
                        <p>览</p>
                    </div>
                </div>
                <div className="content-pag-right">
                        <Link to={`/pros/${this.state.s_id}`}>
                        <div className="box box-s">
                            <img src={ico} />
                            <div className="box-content">
                                <h3 className="title-txt">石雕</h3>
                                <span className="post">视觉盛宴</span>
                            </div>
                        </div>
                        </Link>
                        <Link to={`/pros/${this.state.y_id}`}>
                        <div className="box box-y">
                            <img src={ico} />
                            <div className="box-content">
                                <h3 className="title-txt">玉雕</h3>
                                <span className="post">指尖上的艺术</span>
                            </div>
                        </div>
                        </Link>
                        <Link to={`/pros/${this.state.n_id}`}>
                        <div className="box box-n">
                            <img src={ico} />
                            <div className="box-content">
                                <h3 className="title-txt">泥雕</h3>
                                <span className="post">生活中的写实</span>
                            </div>
                        </div>
                        </Link>
                    </div>
            </div>
        )
    }
}
export default Showpic;