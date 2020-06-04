import React from "react";
import SearchBar from "./SearchBar.js";
import regeneratorRuntime from "regenerator-runtime";
import unsplash from "../api/unsplash";
import ImageList from "./ImagesList.js";

export class App extends React.Component {
	state = { images: [] };

	onSearchSubmit = async term => {
		const response = await unsplash.get("/search/photos", {
			params: { query: term }
		});
		this.setState({ images: response.data.results });
	};

	render() {
		return (
			<div className="container text-center mt-5">
				<SearchBar onSubmit={this.onSearchSubmit} />
				<ImageList images={this.state.images} />
			</div>
		);
	}
}
