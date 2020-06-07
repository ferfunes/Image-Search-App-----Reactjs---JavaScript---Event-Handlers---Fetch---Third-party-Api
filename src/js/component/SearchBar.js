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
							Image Search App
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
			</div>
		);
	}
}

SearchBar.propTypes = {
	onSubmit: PropTypes.func
};

export default SearchBar;
