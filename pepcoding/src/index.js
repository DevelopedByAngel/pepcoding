import React from "react"; //importing react ,react-dom
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App"; //import App component from App.js
import reportWebVitals from "./reportWebVitals";

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );
// const Appp = () => {//must always be capital letter start
// 	return <h1>Hello</h1>; //must return JSX atleast empty tag <div></div>
// };
// const Appp=()=> {
// 	return React.createElement('h1',{},'helloWorld');//create element parameters=> tag, props(here empty), children(inside tag)
// }
const Child = () => {
	return (
		<div>
			<h3>ooo</h3>
			<h2>ok</h2>
		</div>
	); //all elements inside root element and return only single element
	//close all elements
	// use camel case for attribute
};
const Child2 = (props) => {
	return (
		<div style={{ color: "red", backgroundColor: "yellow" }}>
			<h1>{props.a}</h1>
			<h1>{props.b}</h1>
		</div>
	); //retiriving props from component
};
const Child3 = (props) => {
	return (
		<div style={{ color: "green", backgroundColor: "blue" }}>
			{props.children}
			<span>{props.a}</span>
		</div>
	);
};
// const Appp = () => {
// 	return React.createElement("h1", {}, <Child />); //create element parameters=> here child is another element
// };
const Appp = () => {
	return (
		<div>
			<span>hello</span>
			<Child />
			<Child2 a="2" b="3" />
			<Child2 a="abc" b="def" />
			<Child3 a="hello">
			<p> childrem</p>
			</Child3>
		</div>
	); //nesting components and sending props
};
ReactDOM.render(<Appp />, document.getElementById("root"));
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
