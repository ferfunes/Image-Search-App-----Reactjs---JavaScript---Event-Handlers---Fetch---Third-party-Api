import React from "react";
import PropTypes from "prop-types";
import ImageCard from "./ImageCard.js";

const ImageList = props => {
	let images = props.images;

	let imagesList = images.map((item, index) => {
		console.log(item.height);
		return <ImageCard key={item.id} item={item} height={item.height} />;
	});

	return <div className="image-list">{imagesList}</div>;
};

ImageList.propTypes = {
	images: PropTypes.array
};

export default ImageList;
