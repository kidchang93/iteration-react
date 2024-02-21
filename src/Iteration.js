import React from "react";

const Iteration = () => {
	const names = ["javaScript", "jQuery", "React"];
	const namesList = names.map((name) => <li>{name}</li>);
	console.log(namesList);
	return (
		<div>
			<ul>{namesList}</ul>
		</div>
	);
};

export default Iteration;
