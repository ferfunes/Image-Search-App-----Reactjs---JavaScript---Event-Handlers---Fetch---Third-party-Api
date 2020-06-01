import React from "react";
import axios from "axios";
import SearchBar from "./SearchBar.js";
import regeneratorRuntime from "regenerator-runtime";

export class App extends React.Component {
	async onSearchSubmit(term) {
		const response = await axios.get(
			"https://api.unsplash.com/search/photos",
			{
				params: { query: term },
				headers: {
					Authorization:
						"Client-ID 37c1b5f95b274fc99c33886894e628fca53d68f7a82f537a7f6ba33d0d750b0a"
				}
			}
		);
		console.log(response.data.results);
	}

	render() {
		return (
			<div className="container text-center mt-5">
				<SearchBar onSubmit={this.onSearchSubmit} />
                
			</div>
		);
	}
}
