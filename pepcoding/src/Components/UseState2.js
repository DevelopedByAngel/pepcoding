import React, { useState } from "react";//useState is function of React... React.useState()
const UseState2 = () => {
	// let title = "hhh";
	const [title,setTitle]=useState("hello");// title and settitle are userdefined names
	const click = () => {
		setTitle("okay");
	};
	return (
		<div className="UseState">
			<h2>{title}</h2>
			<button className="btn" onClick={() => click()}>
				button
			</button>
		</div>
	);
};
export default UseState2;
