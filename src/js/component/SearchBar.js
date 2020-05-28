import React from "react";
import PropTypes from "prop-types";

class SearchBar extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			term: ""
		};
	}

	onFormSubmit = e => {
		e.preventDefault();

		this.props.onSubmit(this.state.term);
	};

	render() {
		return (
			<div className="container">
				<form onSubmit={this.onFormSubmit}>
					<div className="form-group field">
						<label htmlFor="exampleFormControlInput1">
							Image Search
						</label>
						<input
							type="text"
							className="form-control"
							id="exampleFormControlInput1"
							value={this.state.term}
							onChange={e => {
								this.setState({
									term: e.target.value
								});
							}}
						/>
					</div>
				</form>
				<div className="showImageWord">{this.state.term}</div>
			</div>
		);
	}
}

SearchBar.propTypes = {
	// You can declare that a prop is a specific JS type. By default, these
	// are all optional.
	onSubmit: PropTypes.string
};

export default SearchBar;
