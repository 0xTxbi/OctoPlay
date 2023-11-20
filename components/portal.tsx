import React from "react";
import ReactDOM from "react-dom";

const Portal = ({ children }) => {
	return ReactDOM.createPortal(
		children,
		document.body // This is where the portal will be rendered
	);
};

export default Portal;
