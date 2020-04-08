import React from 'react';
import './index.css'


export default class Bottom extends React.Component {

    render() {
        return (
            <div className="footer-box">
                <div className="footer-line"></div>
                <div className="footer-friend">
                    <div className="footer-friend-title">友情链接：</div>
                    <ul className="footer-friend-title-list clearfix">
                        <li>
                            <a href="#">河北省文化博物馆</a>
                        </li>
                        <li>
                            <a href="#">河北省教育网</a>
                        </li>
                        <li>
                            <a href="#">中国非物质文化遗产网</a>
                        </li>
                        <li>
                            <a href="#">雕刻网站微信公众号</a>
                        </li>
                        <li>
                            <a href="#">河北教育厅</a>
                        </li>
                        <li>
                            <a href="#">北京博物馆</a>
                        </li>
                        <li>
                            <a href="#">考古网站</a>
                        </li>
                        <li>
                            <a href="#">红色之旅</a>
                        </li>
                    </ul>
                    <a href="#" className="footer-friend-more">更多 >></a>
                </div>
                <div className="footer-copyright">
                    <p>© 2019-2020 王玉瑶毕业设计作品&nbsp;&nbsp;展示网站&nbsp;</p>
                    <p>
                        信息管理与信息系统专业&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <span>
                            津公网安备 00046899999xxxx号
                        </span>
                    </p>
                </div>
            </div>
        )
    }

}


