import React, { useState } from "react"; //useState is function of React... React.useState()
import people from "../Data/people";
const UseState2 = () => {
	console.log(people);
	const [data, setData] = useState(people); //data is a array since people is array
	const changeName = (id, name) => {
		const newData = data.map((d) => {
			if (d.id == id) d.name = name;
			return d;
		});
		setData(newData);
	};
	const [obj, setObj] = useState({ id: 1, name: "angel", message: "messg" });
	const objChange = () => {
		const newObj = { ...obj, message: "hello" }; //spreading data(destructing and overwriting message)
		setObj(newObj);
	};
	const [count,setCount]=useState(0);
	const counter = () =>
	{	
		setTimeout(()=>
			{
				setCount((prev)=>{
					return prev+1;//using prev paramter to get previus data and add 1 and store in it for every click and not at 2000 seconds
			});
			},2000);//here even if clicked 3 times within 2seconds only increase by 1 
				// beacuse the counter function is working at only end of 2000 seconds and increase by 1 the current values
				// but actually it must be increased for each click  
	}
	return (
		<React.Fragment>
			<div className="peopleList">
				{data.map((d) => {
					return (
						<div key={d.id}>
							<p>{d.name}</p>
							<button
								onClick={() => changeName(d.id, d.name + "!")}
							>
								Change
							</button>
						</div>
					);
				})}
				<button onClick={() => setData([])}>clear</button>
			</div>
			<div className="object">
				<h2>{obj.id}</h2>
				<h3>{obj.name}</h3>
				<h3>{obj.message}</h3>
				<button onClick={() => objChange()}>objChange</button>
			</div>
			<div className="counter">
				{count}
				<button onClick={() =>counter()}>increase</button>
			</div>
		</React.Fragment>
	);
};
export default UseState2;
