import React from "react";
import PropTypes from "prop-types";

const ImageList = props => {
	let images = props.images[0];
	console.log(images);
	return <h1>h</h1>;
};

ImageList.propTypes = {
	images: PropTypes.array
};

export default ImageList;
