import React, { useState, useReducer} from "react";
import Modal from "./Modal";
import people from "../Data/people";
const UseReducer1 = () => {
	const [data,setData]=useState(people);
	const [showModal,setShowModal] = useState(false);
	const [name,setName] =useState('');
	const submit=(e)=>
	{
		e.preventDefault();
		if(name)
		{
			setShowModal(true);
			setData([...data,{name:name}]);
			setName('');
		}
		else
		{
			setShowModal(true);
		}
	}
		return (
			<div>
				{showModal && <Modal/>}
				<form onSubmit={(e)=>submit(e)}>
					<input type="text" name="name" onChange={(e)=>setName(e.target.value)}/>
					<input type="submit"/>
				</form>
				{data.map((d)=>
					{
						return <h3>{d.name}</h3>
						})}
			</div>
		);
};
export default UseReducer1;
