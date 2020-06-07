import React from "react";
import PropTypes from "prop-types";

const ImageList = props => {
	let images = props.images;

	let imagesList = images.map((item, index) => {
		return (
			<img key={item.id} alt={item.description} src={item.urls.regular} />
		);
	});

	return <div className="image-list">{imagesList}</div>;
};

ImageList.propTypes = {
	images: PropTypes.array
};

export default ImageList;
