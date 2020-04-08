import React from 'react';
import './index.css'
import { Link } from 'react-router-dom';
import Index from '../../../service/index-service'

const _Index = new Index()




class ProS extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            id: this.props.match.params.id,
            productId: "",
            list: []
        }
        // console.log(this.state.id)
    }
    componentWillMount() {
        let dataId = this.state.id;

        _Index.get_showPic(dataId).then(res => {
            this.setState(res)
            console.log(res)
        }, errMsg => {
            alert("图片加载失败，请重新尝试")
        });
    }

    render() {
        return (
            <div className="content-pag">
                <h1 className="new_title">{this.state.id === "s" ? "艺术展品——石雕" : this.state.id === "y" ? "艺术展品——玉雕" : "艺术展品——泥雕"}</h1>
                <div className="container-f">
                    <div className="waterfall">
                        {
                            this.state.list.map((product, index) => {
                                let mainImage = [];
                                let img = product.mainImage.split(",");
                                mainImage.push(img[0])
                                // console.log(mainImage)
                                return (
                                    <Link to={`/detail/${this.state.id}/${product.id}`} key={index}  >
                                        <div className="item"  >
                                            <b>{product.name}</b>
                                            <img src={mainImage[0]} />
                                            <p>{product.title}</p>
                                        </div>
                                    </Link>
                                )
                            })
                        }

                    </div>
                </div>
            </div>
        )
    }
}
export default ProS;