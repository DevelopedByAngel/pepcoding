import React, { useState, useRef } from "react";
import PropTypes from "prop-types";
const CustomHooks = ({name,id}) => {
		return (
			<div>
				{name}-{id}
			</div>
		);
};
CustomHooks.propTypes = {name: PropTypes.string.isRequired, id: PropTypes.number.isRequired}
CustomHooks.defaultProps={id:0};
export default CustomHooks;
