import React, { useState } from "react";

const Iteration2 = () => {
	const [names, setNames] = useState([
		{ id: 1, text: "javaScript" },
		{ id: 2, text: "jQuery" },
		{ id: 3, text: "React" },
	]);

	const [nextId, setNextId] = useState(names.length + 1);

	const namesList = names.map((name) => <li key={name.id}>{name.text}</li>);
	const onClick = () => {
		setNames(names.concat({ id: nextId, text: "Vue.js" }));
		setNextId(nextId + 1);
	};
	return (
		<div>
			<button onClick={onClick}>추가</button>
			<ul>{namesList}</ul>
		</div>
	);
};

export default Iteration2;
