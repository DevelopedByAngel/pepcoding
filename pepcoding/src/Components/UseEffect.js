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


		const [width,setWidth]=useState(window.innerWidth);
		// window.addEventListener("resize",()=>setWidth(window.innerWidth));
		//not outside because code runs for every render and keeps adding number of listeners
		// useEffect(()=>
		// 	{
		// 		window.addEventListener("resize",()=>setWidth(window.innerWidth));
		// 		// console.log(width+"ls"); 
		// 	},[]);


		//OOOOOOOORRRRRRRRRRRRRRR

		useEffect(()=>
			{
				console.log("add");
				window.addEventListener("resize",()=>setWidth(window.innerWidth));
				return ()=>
				{
					console.log("remove");
					window.removeEventListener("resize",()=>setWidth(window.innerWidth));
				}
				// useEffect can return a cleanup function which will be run first in the next call
			},[width])
	return (
		<div>
			<h1>{count}</h1>
			<button onClick={()=>setCount(count+1)}>+</button>
			<button onClick={()=>sv(v+'!')}>{v}</button>
			<button onClick={()=>so(o-1)}>-</button>
			<h2>{width}</h2>

		</div>
		);
};
export default UseEffect;
