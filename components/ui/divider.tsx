import React from "react";

interface DividerProps {
	length?: string;
}

const Divider: React.FC<DividerProps> = ({ length = "full" }) => {
	return <div className={`border-b border-gray-700 w-${length} my-4`} />;
};

export default Divider;
