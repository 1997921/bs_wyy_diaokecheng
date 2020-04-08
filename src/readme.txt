import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter as Router, Route, Redirect, Link, Switch } from 'react-router-dom';
import './index.css';




import Login from "../src/page/login"
import Layout from "./component/layout"
import Content from "./page/content"
// import Content from "./page/content"



class App extends React.Component {
	render() {
		let LayoutRouter = (
			<Layout>
				<Switch>
					{/**Redirect 限制如跳转连接不存在 则指定跳转地址**/}
					<Route exact path='/' component={Content} />
				</Switch>
			</Layout>
		)
		return (
			<Router>
				<div>
					<Switch>
						<Route path='/login' component={Login} />
						<Route path='/' render={props => LayoutRouter} />
					</Switch>
				</div>
			</Router>
		);
	}
}

ReactDom.render(
	<App />,
	document.getElementById('root')
)
