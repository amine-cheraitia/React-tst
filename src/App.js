import "./App.css";
import Content from "./Content";
import { useState } from "react";

function App() {
	let randomT = "teste";
	const [monState, setMonState] = useState("before ");
	console.log(monState, setMonState);

	function hello() {
		setMonState("after");
	}
	function toChild(param) {
		console.log("salut " + param);
	}

	return (
		<div className="title">
			this is app {randomT}
			<Content msg={monState} func={toChild} />
			<button onClick={hello}>Clique !! </button>
			{monState}
		</div>
	);
}

export default App;
