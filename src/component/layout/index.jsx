
import React from 'react';
import Header from '../headerNav/index.jsx';
import Bottom from '../bottom/index.jsx';

import './index.css';
// 组件容器
class Layout extends React.Component{
	constructor(props){
		super(props);
	}
	render(){
		return (
				<div id="wrapper">
					{/**头部模板**/}
					<Header/>
					{/**子组件**/}
					{this.props.children}
					{/**尾部 */}
					<Bottom/>
				</div>
			)
	}
}

export default Layout;