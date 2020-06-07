import React from "react";
import PropTypes from "prop-types";

const ImageList = props => {
	let images = props.images;

	let imagesList = images.map((item, index) => {
		return <img key={index} src={item.urls.regular} />;
	});

	return (
		<div>
			<div>Image List</div>

			<div>{imagesList}</div>
		</div>
	);
};

ImageList.propTypes = {
	images: PropTypes.array
};

export default ImageList;
