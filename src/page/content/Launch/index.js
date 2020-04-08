import React from 'react';
import Index  from '../../../service/index-service'
import './index.css';

const _Index = new Index()





class Launch extends React.Component{
    constructor(){
        super();
        this.state = {
            imgs:[],   // 图片数组
            showIndex: 0, //显示第几个图片
            timer: null,  // 定时器
            show: false   // 前后按钮显示
        }
    }



    render(){
        return(
            <div className="content-page">
                 <div className="contain"
                     onMouseEnter={()=>{this.stop()}} //鼠标进入停止自动播放
                     onMouseLeave={()=>{this.start()}}  //鼠标退出自动播放
                >
                    <ul className="ul">
                        {
                            this.state.imgs.map((value, index) => {
                                return (
                                    <li className={index === this.state.showIndex ? 'show' : ''}
                                        key={index} >
                                        <img src={value} alt="轮播图" />
                                    </li>
                                )
                            })
                        }
                    </ul>
                    <ul className="dots" style={{width: this.state.imgs.length * 20 + 'px'}}>
                        {
                            this.state.imgs.map((value, index) => {
                                return (
                                    <li key={index}
                                        className={index === this.state.showIndex ? 'active' : ''}
                                        onClick={()=>{this.change(index)}}>
                                    </li>)
                            })
                        }

                    </ul>
                </div>
            </div>
        )
    }

    loadIndexList(){
        _Index.get_launch().then(res => {
            this.setState({'imgs':res});
            // console.log(res)
            // console.log(this.state.imgs)
        },errMsg => {
            alert("图片还在加载中。。。。。。。")
        });
    }
    componentDidMount(){ //一开始自动播放
        this.loadIndexList();
    }
    componentWillUnmount() { //销毁前清除定时器
        this.stop();
    }
    stop = () => { //暂停
        let {timer} = this.state;
        clearInterval(timer);
    }
    start = () => { //开始
        let {timer} = this.state;
        timer = setInterval(() => {
            this.next();
        }, 3000);
        this.setState({
            timer
        })
    }
    change = (index) => { //点击下面的按钮切换当前显示的图片
        let {showIndex} = this.state;
        showIndex = index;
        this.setState({
            showIndex
        })
    }
    previous = (e) => { //上一张
        let ev = e || window.event;
        let {showIndex, imgs} = this.state;
        if(showIndex <= 0){
            showIndex = imgs.length - 1;
        }else{
            showIndex --;
        }
        this.setState({
            showIndex
        })
    }
    next = (e) => { //下一张
        let ev = e || window.event;
        let {showIndex, imgs} = this.state;
        if(showIndex >= imgs.length - 1){
            showIndex = 0;
        }else{
            showIndex ++;
        }
        this.setState({
            showIndex
        })
    }

}
export default Launch;