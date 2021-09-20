import React, { useState, useRef } from "react";
const Useref = () => {
	const refContainer=useRef(null);
	const submit=(e)=>
	{
		e.preventDefault();
		console.log(refContainer.current.value);
	}
	
		return (
			<div>
				<form onSubmit={(e)=>submit(e)}>
					<input type="text" className="" ref={refContainer}/>
					<span>{refContainer.current.value}</span>
					<input type="submit" className=""/>
				</form>
			</div>
		);
};
export default Useref;
