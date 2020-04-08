
import Mutil from '../util/mm.jsx'
const _mm 	= new Mutil();
class Statistic {
	//首页数据统计
	get_launch(){
		return _mm.request({
            type:'get',
			url : '/manage/product/index.do',
		})
	}
    //新闻信息的查询
    get_newslist(){
        return _mm.request({
            type:'post',
            url : '/manage/product/index_newslist.do',
		})

    }
    //新闻详情的展示
    index_newsdetail(productId){
        console.log(productId)
        return _mm.request({
			type: 'post',
			url: '/manage/product/news_detail.do',
			data: {
				productId: productId || 0
			}
		})

    }
    //展品图片加载
     get_showPic(dataId){
        return _mm.request({
            type: 'post',
            url : '/manage/product/index_showPic.do',
            data:{
                dataId:dataId
            }
		})
    }
    //前端展品详情
    get_showdetail(data){
        return _mm.request({
            type: 'post',
            url : '/manage/product/index_showdetail.do',
            data:{
                id:data.id,
                route:data.route
            }
		})
    }
    //艺术家展示
    get_artlist(){
        return _mm.request({
            type: 'post',
            url : '/manage/product/index_artlist.do',
		})
    }
    //艺术家详情
    get_artdetail(productId){
        return _mm.request({
            type: 'post',
            url : '/manage/product/index_artdetail.do',
            data:{
                dataId:productId
            }
		})
    }
//新闻更多的展示
get_newsmoreList(){
    return _mm.request({
        type:'post',
        url : '/manage/product/news_list.do',
        data:{
            pageNum:1
        }
    })
}
	
}

export default Statistic;