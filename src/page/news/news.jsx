import React from 'react';
import './index.css'
import Launch from '../content/Launch/index'
import Index from '../../service/index-service'
import "./index.css"
const _Index = new Index()



class News_detail extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            id: this.props.match.params.id,
            name:"",
            title:"",
            msg:"",
        }
    }
    componentWillMount() {
        let dataId=this.state.id;

        _Index.index_newsdetail(dataId).then(res => {
            this.setState(res)
        }, errMsg => {
            alert("内容跑到火星去了。。。")
        });
    }

    render() {
        return (
            <div className="content-pag">
                <Launch></Launch>
                  <h1 className="new_title">{this.state.name}</h1>
               <div className="new_title_txt" dangerouslySetInnerHTML={{__html: this.state.detail}}>
               </div>
            </div>
        )
    }
}
export default News_detail;