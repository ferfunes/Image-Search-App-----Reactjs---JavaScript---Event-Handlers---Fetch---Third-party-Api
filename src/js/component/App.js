import React from "react";
import axios from "axios";
import SearchBar from "./SearchBar.js";

export class App extends React.Component {
	onSearchSubmit(term) {
		console.log(term);
		axios.get("https://api.unsplash.com/search/photos", {
			params: { query: term },
			headers: {
				Authorization:
					"Client-ID 37c1b5f95b274fc99c33886894e628fca53d68f7a82f537a7f6ba33d0d750b0a"
			}
		});
	}

	render() {
		return (
			<div className="container text-center mt-5">
				<SearchBar onSubmit={this.onSearchSubmit} />
			</div>
		);
	}
}
