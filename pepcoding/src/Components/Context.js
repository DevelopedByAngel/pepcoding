import React,{useContext} from 'react';
import people from "../Data/people";

const PersonContext=React.createContext();
const Context=()=>
{
	console.log(people);
	const remove=(i)=>
	{
		console.log("okay",i)
	};
	return(
		<PersonContext.Provider value={{hello:"hello!!",remove:remove}}>
			<h3>context api</h3>
			<List people={people}/>
		</PersonContext.Provider>
		);
}
const List=({people})=>
{
	return (<div>{
		people.map((p,i)=>
		{
			return(
				<Person name={p.name} i={i}/>
				);
		})
	}
	</div>)
}
const Person=({name,i})=>
{
	const {hello,remove}=useContext(PersonContext);
	return(
		<div>
			<h1>name</h1>
			<button onClick={()=>remove(i)}><h4>X</h4></button>
		</div>
		)
}
export default Context;