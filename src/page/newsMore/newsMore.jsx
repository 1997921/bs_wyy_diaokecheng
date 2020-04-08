import React from 'react';
import './index.css'
import { BrowserRouter as Router, Route, Redirect, Link, Switch } from 'react-router-dom';
import Index from '../../service/index-service'

const _Index = new Index()



class NewsMore extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            list: []
        }
        // console.log(this.state.id)
    }
    componentWillMount() {
        _Index.get_newsmoreList().then(res => {
            this.setState(res)
            console.log(res)
        }, errMsg => {
            alert("图片加载失败，请重新尝试")
        });
    }

    render() {
        return (
            <div className="content-pag">
               <h1 className="new_title">新闻列表</h1>
               {
                    this.state.list.map((product,index)=>{
                    return(
               <Link to={`/news/${product.id}`} key={index}>
               <p className="newmore_list">
                    <i>>></i><span> {product.subtitle}</span><span className="newsData">2020-3-20</span>
               </p>
               </Link>
                        )
                    })
                }
            </div>
        )
    }
}
export default NewsMore;