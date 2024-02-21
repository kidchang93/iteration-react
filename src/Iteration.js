import React from "react";

const Iteration = () => {
	const names = ["javaScript", "jQuery", "React"];
	// const namesList = names.map((name) => <li>{name}</li>); //키가 없어서 키를 넣어줘야된다. warning 뜸
	const namesList = names.map((name, index) => <li key={index}>{name}</li>);
	// key에 index만 주지말고 index 에 고유값을 주는게 리랜더링이 효율적이다.
	console.log(namesList);
	return (
		<div>
			<ul>{namesList}</ul>
		</div>
	);
};

export default Iteration;
