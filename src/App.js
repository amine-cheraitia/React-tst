import "./App.css";
import Content from "./Content";

function App() {
	function hello() {
		console.log("hello");
	}

	return (
		<div className="title">
			this is app
			<Content />
			<button onClick={hello}>Clique !!</button>
		</div>
	);
}

export default App;
