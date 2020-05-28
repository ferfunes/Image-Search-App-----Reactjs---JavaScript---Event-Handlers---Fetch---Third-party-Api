import React from "react";

class SearchBar extends React.Component {
	render() {
		return (
			<div className="container">
				<form>
					<div className="form-group field">
						<label htmlFor="exampleFormControlInput1">
							Image Search
						</label>
						<input
							type="text"
							className="form-control"
							id="exampleFormControlInput1"
						/>
					</div>
				</form>
			</div>
		);
	}
}

export default SearchBar;
