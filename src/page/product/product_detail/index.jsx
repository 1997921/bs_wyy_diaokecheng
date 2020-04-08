import React from 'react';
import Index from '../../../service/index-service'
import "./index.css"
const _Index = new Index()




class ProDetail extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            id: this.props.match.params.id,
            route:this.props.match.params.router,
            title:"",
            msg:"",
        }
        // console.log(this.state.route)
    }
    componentWillMount() {
        let data={
            id:this.state.id,
            route:this.state.route
        }

        _Index.get_showdetail(data).then(res => {
            this.setState(res)
        }, errMsg => {
            alert("内容跑到火星去了。。。")
        });
    }
    render() {
       console.log(this.state.title);
       let msg_show=this.state.msg
        return (
            <div className="content-pag">
                <h1 className="new_title">{this.state.title}</h1>
                <div className="container-f">
                <img className="container-f-img" src={this.state.mainImage}/>
               <div dangerouslySetInnerHTML={{__html: msg_show}}></div>
                </div>
            </div>
        )
    }
}
export default ProDetail;