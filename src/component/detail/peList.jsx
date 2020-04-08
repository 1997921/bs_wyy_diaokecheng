import React from 'react';
import './index.css'
import Index from '../../service/index-service'
const _Index = new Index()


class PeList extends React.Component {
    constructor(props){
        super(props);
        this.state={
            id: this.props.match.params.id,
            name:"",
            title:"",
            detail:""
        }
    }
    componentWillMount(){
        let  productId=this.state.id
        _Index.get_artdetail(productId).then(res => {
            console.log(res)
            this.setState(res)
        }, errMsg => {
            alert(errMsg+"内容跑到火星去了。。。")
        });
    }
    render() {
    
        return (
            <div className="content-pag">
               <h1 className="new_title">雕刻艺术家-{this.state.art_name}</h1>
              <div className="detail_pic">
                  <img src={this.state.art_pic} alt={this.state.art_name}/>
              </div>
              <div className="detail_txt" dangerouslySetInnerHTML={{__html: this.state.detail}}>
                 
              </div>
            </div>
        )
    }
}
export default PeList;