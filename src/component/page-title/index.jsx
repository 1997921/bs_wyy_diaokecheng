/*
* @Author: Rensen
* @Date:   2019-11-24 22:22:44
* @Last Modified by:   Rensen
* @Last Modified time: 2019-11-24 23:00:13
*/

import React from 'react';

// 组件容器
class PageTitle extends React.Component{
	constructor(props){
		super(props);
	}
	componentWillMount(){
		document.title = this.props.title + ' - 曲阳雕刻 ';
	}
	render(){
		return (
				
				<div className="row">
					<div className="col-md-12">
						<h1 className = "page-header">{this.props.title}</h1>
						{this.props.children}
					</div>
				</div>
				
			)
	}
}

export default PageTitle;