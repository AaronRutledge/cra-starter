import React from 'react';
import ColorSwatch from './ColorPaletteComponents/ColorSwatch.js';
import PropTypes from 'prop-types';
/**
 * A color palette to show multiple swatches.
 */
const ColorPalette = (props) => {
    const nameStyle = {
        fontSize: 18,
		color: '#00a',
    };
    const descriptionStyle = {
        fontSize: 14,
		color: '#999',
    };
    const swatches = props.colors.map((swatch) => <ColorSwatch 
		key={swatch.colorHex} 
		colorHex={swatch.colorHex} 
		description={swatch.description} 
	/>);
    return (
        <div>
            <div style={descriptionStyle} >{props.name}</div>
            <div style={descriptionStyle} >{props.description}</div>
            
            {swatches}
        </div>
    );
};
ColorPalette.propTypes = {
	/**
	 * Name of the palette.
	 */
	name: PropTypes.string,
	/**
	 * Description of the palette.
	 */
	description: PropTypes.string,
	/**
	 * Array of colors in the palette.
	 */
	colors: PropTypes.array,
};
ColorPalette.defaultProps = {
    name: "default",
	description: 'Text goes here',
	colors: {},
};

export default ColorPalette;