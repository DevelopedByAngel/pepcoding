import React,{Component} from 'react';
import {BrowserRouter as Rtr,Route,Switch,Link,useParams} from 'react-router-dom';
import Context from './Context';
import Input from './Input';
import UseRef from './UseRef';
import MultipleInput from './MultipleInput';
import Modal from './Modal';
class Router extends Component
{
	render()
	{
		return <Rtr>
			<div className="link">
				<Link to="/">Home</Link>
				<Link to="/context">Context</Link>
				<Link to="/input">Input</Link>
			</div>
			<Switch>
				<Route exact path="/">
					<h2>Home</h2>
				</Route>
				<Route exact path="/context"> 
					{/* given exact or else matches any path containg /ok/.... */}
					<Context/>
				</Route>
				<Route path="/input">
					<Input/>
				</Route>
				<Route exact path="/person/:id">
					<Modal/>
				</Route>
				<Route path="*">
					No page found
				</Route>
			</Switch>
		</Rtr>
	}
}
export default Router