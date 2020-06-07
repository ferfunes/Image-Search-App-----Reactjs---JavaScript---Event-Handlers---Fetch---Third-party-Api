import React from "react";
import PropTypes from "prop-types";

class ImageCard extends React.Component {
	constructor(Props) {
		super(Props);
		this.state = {
			spans: 0
		};

		this.imageRef = React.createRef();
	}

	componentDidMount() {
		this.imageRef.current.addEventListener("load", this.setSpans);
	}

	setSpans = () => {
		const height = this.imageRef.current.clientHeight;

		const spans = Math.ceil(height / 10);

		this.setState({ spans: spans });
	};

	render() {
		const { description, urls, height } = this.props.item;

		return (
			<div style={{ gridRowEnd: `span ${this.state.spans}` }}>
				<img ref={this.imageRef} alt={description} src={urls.regular} />
			</div>
		);
	}
}

ImageCard.propTypes = {
	item: PropTypes.object,
	description: PropTypes.string,
	urls: PropTypes.string,
	regular: PropTypes.string
};

export default ImageCard;
