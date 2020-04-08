/*
* @Author: Rensen
* @Date:   2019-11-25 20:59:08
* @Last Modified by:   Rensen
* @Last Modified time: 2019-12-17 22:22:34
* 登录
*/

import React from 'react';
import './index.css';
import Mutil from '../../util/mm.jsx'
import User  from '../../service/user-service.jsx'


const _mm = new Mutil();
const _User = new User();


class Login extends React.Component {
	constructor(){
		super();
		this.state = {
			username: "",
			password:"",
			redirect: _mm.getUrlParam('redirect')||"/"
		}
	}
	componentWillMount(){
		document.title = '登录 - 曲阳雕刻';
	}
	render(){
		return (
				
			<div className="login-panel">
				<div className="panel">
					<h1>欢迎登陆雕刻网站</h1>
					<div className="panel-content">
					   <input type="text"  placeholder="用户名/手机号" name="username" onChange={e => this.onInputChange(e)}/>
					   <input type="password" placeholder="密码" name="password" onChange={e => this.onInputChange(e)}/>
					   <button className="panel-btn" onClick={e =>{this.onSubmit(e)}}>登录</button>
					</div>
				</div>
			</div>
				
			)
	}
	//用户名和密码发生变化时
	onInputChange(e){
		let inputvalue =e.target.value,
			 inputname = e.target.name;
		// console.log(e.target.value)
		this.setState({
			[inputname]:inputvalue
		})

	}
	//当用户点击登录时 取出相应的用户名和密码
	onSubmit(e){
		// _User.login({
		// 	username:this.state.username,
		// 	password:this.state.password

		// })
		// _mm.request({
		// 	type:'post',
		// 	url:"/manage/user/login.do",
		// 	data:{
		// 		username:this.state.username,
		// 		password:this.state.password
		// 	}
		// })
	// 	.then((res) => {
	// 		// console.log(this.state.redirect)
	// 		this.props.history.push(this.state.redirect)
	// 	},(err) => {
	// 		let errMsg=err;
	// 		_mm.errorTips(errMsg)
	// 	})
	// }
	let loginInfo = {
		username : this.state.username,
		password : this.state.password
	},
		checkResult = _User.checkLoginInfo( loginInfo );
		//验证通过
	if(checkResult.status){
		_User.login(loginInfo).then( (res) => {
			// _mm.setStorage('userInfo', res)
			// window.location.href="http://localhost:8086/"
			this.props.history.push( this.state.redirect );
		},(errMsg) => {
			_mm.errorTips(errMsg);
		})
	}else{
		_mm.errorTips(checkResult.msg);
	}

}
}

export default Login;