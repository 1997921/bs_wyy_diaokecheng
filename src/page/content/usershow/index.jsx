import React from 'react';
import './index.css'
import { BrowserRouter as Router, Route, Redirect, Link, Switch } from 'react-router-dom';
import Index from '../../../service/index-service'
const _Index = new Index()


class Usershow extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            list: []
        }
    }

    componentWillMount(){
        _Index.get_artlist().then(res => {
            console.log(res)
            this.setState(res)
        }, errMsg => {
            alert(errMsg+"内容跑到火星去了。。。")
        });
    }

    render() {
        console.log(this.state.list)
        return (
            <div className="footer-container">
                <div className="footer-js">
                    <span>雕刻 • 名家汇集</span>
                    {/* <div className="footer-js-txt">雕刻名家汇集</div> */}
                </div>
                <div className="footer-service clearfix">
                {
                    this.state.list.map((product, index) => {
                    return(
                    <Link to={`/introduce/${product.art_id}`} key={index}>
                    <div className="footer-service-item " >
                        <i><img src={product.art_pic} alt={product.name}/></i>
                        <span><b>{product.artname}</b>{product.art_title}</span>
                    </div>
                    </Link>
                    )
                    })
                }
                </div>
            </div>
        )
    }
}
export default Usershow;