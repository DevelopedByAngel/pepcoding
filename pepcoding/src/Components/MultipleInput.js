import React, { useState, useEffect} from 'react';
const MultipleInput=()=>
{
	const [person,setPerson]=useState({id:'',name:'',email:''});
	const [users,setUsers]=useState([]);
	const change=(e)=>
	{
		const name=e.target.name;
		const value=e.target.value;
		setPerson({ ...person,[name]:value});
	}
	const submit=(e)=>
	{
		e.preventDefault();
		if(person.name!=null && person.id!=null && person.email!=null )
		{
			setUsers([...users,person]);
		}
		setPerson({id:'',name:'',email:''});
	}
	return(
		<div>
			<form className="form" onSubmit={(e)=>submit(e)}>
				<input type="text" className="input1" id="input1" name="id" value={person.id} onChange={(e)=>change(e)}/>
				<input type="text" className="input2" id="input2" name="name" value={person.name} onChange={(e)=>change(e)}/>
				<input type="text" className="input3" id="input3" name="email" value={person.email} onChange={(e)=>change(e)}/>
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
export default MultipleInput;