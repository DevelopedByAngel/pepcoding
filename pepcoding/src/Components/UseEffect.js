import React, { useState, useEffect } from "react";
const UseEffect = () => {
	const [count,setCount]=useState(0);
	var [v,sv]=useState('a');
	var [o,so]=useState(100);

	useEffect(()=>
		{
			if(count>0)
			{
			console.log(count+" changed"+v);
			document.title="Notifications ("+count+") ";
		}
		},[count,v]);// only when count and v are changed. If no dependencies paramter is specified for all 
		//if empty [] paramter is specified then only when inital render
	return (
		<div>
			<h1>{count}</h1>
			<button onClick={()=>setCount(count+1)}>+</button>
			<button onClick={()=>sv(v+'!')}>{v}</button>
			<button onClick={()=>so(o-1)}>-</button>


		</div>
		);
};
export default UseEffect;
