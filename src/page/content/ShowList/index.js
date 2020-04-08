import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter as Router, Route, Redirect, Link, Switch } from 'react-router-dom';
import Index from '../../../service/index-service'

const _Index = new Index()

class ShowList extends React.Component {
    constructor() {
        super();
        this.state = {

        }
    }


    render() {
        return (
            <div className="content-page">
                <div className="ShowList">
                    <News />
                    <Tribune />
                    {/* <Semina/> */}
                </div>
            </div>
        )
    }

}
//新闻
class News extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            list: []
        }
        // console.log(this.state.id)
    }
    componentWillMount() {
        _Index.get_newslist().then(res => {
            this.setState(res)
            console.log(res)
        }, errMsg => {
            alert("图片加载失败，请重新尝试")
        });
    }
    render() {
        return (
            <div className="news">
                <div className="title">
                    <Link to="/newslist" className="more">更多<i></i></Link>
                    <h1>
                        <span className="tit-span"><img src="https://img.dpm.org.cn/Public/static/themes/image/public-icon1.png" /></span>
                        <span className="s1">新闻资讯</span>
                        <span className="tit-span"><img src="https://img.dpm.org.cn/Public/static/themes/image/public-icon2.png" /></span>
                    </h1>
                </div>
                {/*可提取公共部分 */}
                <ul className="news-content">
                {
                    this.state.list.map((product,index)=>{
                    return(
                    <Link to={`/news/${product.id}`} key={index}>
                        <li>
                            <h3>{product.name}</h3>
                            <p>{product.subtitle}......
							</p>
                            <span className="link" >更多</span>
                        </li>
                    </Link>
                    )
                      })
                    }
                </ul>
            </div>
        )

    }

}
//论坛
class Tribune extends React.Component {
    render() {
        return (
            <div className="tribune">
                <div className="img">
                  
                        <img alt="" title="" className=" lazyloaded" src="https://img.dpm.org.cn/Uploads/Picture/2020/03/04/s5e5f0a83254d3.jpg" />
                
                </div>
                {/* <h3>论坛</h3>
                 <div className="news-content">
                     <p>11111111111111111111111111111111111</p>
                 </div> */}

            </div>
        )
    }

}
//专题
// class Semina extends React.Component{
//     render(){
//         return(
//             <div className="semina">
//                 <h3>相关专题</h3>
//                 <div className="news-content">
//                      <p>11111111111111111111111111111111111</p>
//                  </div>
//             </div>
//         )
//     }
// }
export default ShowList;