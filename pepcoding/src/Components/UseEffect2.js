import React, { useState, useEffect } from "react";
import github from "../Data/github";
const UseEffect2 = () => {
	const [user,setUser] = useState([]);
	useEffect(() =>
		{
			setUser(github);
		},[]);
	console.log(github);
	return (
		<div>
			{user.map((u)=>
				{
					return(
						<div key={u.id}>
							<h2>{u.login}</h2>
							<h3>{u.img}</h3>
						</div>
						);
				})
			}
		</div>
		);
};
export default UseEffect2;

