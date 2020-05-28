import React from "react";
import SearchBar from "./SearchBar.js";

export class App extends React.Component {
	constructor() {
		super();
		this.state = {};
	}

	onSearchSubmit = term => {
		console.log(term);
	};

	render() {
		return (
			<div className="container text-center mt-5">
				<SearchBar onSubmit={this.onSearchSubmit} />
			</div>
		);
	}
}
