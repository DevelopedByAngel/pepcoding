import React, { useState, useEffect } from "react";
const MultipleReturn = () => {
	const [load, setLoad] = useState(true);
	const [error, setError] = useState(false);
	const [user, setUser] = useState("default");
	useEffect(() => {
		setLoad(true);
		fetch("https://api.github.com/users/m")
			.then((r) => {
				if (r.status != 200) throw new Error(r.statusText);
				else return r.json();
			})
			.then((r) => {
				console.log(r);
				setUser(r);
				setLoad(false);
			})
			.catch((err) => {
				setError(true);
				setLoad(false);
			});
	}, []);
	if (load) {
		return <h2>Loading........{load.toString()}</h2>;
	} else if (error) {
		return <h2>Error........{error.toString()}</h2>;
	} else {
		return (
			<div>
				<h6>{!error && <h1>No error</h1>}</h6>
				<h2>{user.name}</h2>
			</div>
		);
	}
};
export default MultipleReturn;
