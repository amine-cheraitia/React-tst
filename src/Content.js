import React from "react";
import "./App.css";

/* function Content(props) {
	return (
		<div>
			{" "}
			<h5>this is content et ceci est une pros : {props.msg}</h5>{" "}
			<button onClick={props.func}>Tochield</button>
		</div>
	);
} */
function Content({ msg, func }) {
	function declanche() {
		func("randomTest");
	}

	return (
		<div>
			<h5>le pros : {msg}</h5>{" "}
			<button className="red" onClick={declanche}>
				Tochield
			</button>
		</div>
	);
}
export default Content;
