import React, { useState, useEffect} from 'react';
const Input=()=>
{
	const [id,setId]=useState('');
	const [name,setName]=useState('');
	const [users,setUsers]=useState([]);
	const submit=(e)=>
	{
		e.preventDefault();
		if(id && name)
		{
			const user={id:id,name:name};
			setUsers([...users,user]);
		}
		else
		{
			console.error("no empty field");
		}
		setId('');
		setName('');
	};
	return(
		<div>
			<form className="form" onSubmit={(e)=>submit(e)}>
				<input type="text" className="input1" id="input1" value={id} onChange={(e)=>setId(e.target.value)}/>
				<input type="text" className="input2" id="input2" value={name} onChange={(e)=>setName(e.target.value)}/>
				<button type="submit" className="submit">Submit</button>
			</form>
			<div className="userList">
			{
				users.map((user)=>
				{
					return (<div className="user" key={user.id}>
						<h2>id: {user.id+" | "} 
						Name: {user.name}</h2>
					</div>);
				})
			}
			</div>
		</div>
		)
}
export default Input;