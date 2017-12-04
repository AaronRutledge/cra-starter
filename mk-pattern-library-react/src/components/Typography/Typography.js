import React from 'react';
import PropTypes from 'prop-types';

const Typography = (props) => {
	const style = {
		color: props.color,
		fontSize: Typography.sizes[props.size],
		fontFamily: props.font,
	};

	return (
		<h2>{props.font}-{Typography.sizes[props.size]}: <div style={style}>{props.children}</div></h2>
	);
}

Typography.propTypes = {
	/**
	 * Button label.
	 */
	children: PropTypes.string.isRequired,
	color: PropTypes.string,
	size: PropTypes.oneOf(['xsmall', 'small', 'normal', 'large', 'xlarge', 'xxlarge', 'xxxlarge']),
	font: PropTypes.string,
};
Typography.defaultProps = {
	color: '#333',
	font: 'sans-serif',
	size: 'small',
};
Typography.sizes = {
	xsmall: '9px',
	small: '12px',
	normal: '14px',
	large: '18px',
	xlarge: '24px',
	xxlarge: '30px',
	xxxlarge: '36px',
};

export default Typography;