import React from 'react';
import PropTypes from 'prop-types';
const SwatchSection = ({children}) => (
  <li style={{
        display: 'inline-block',
        width: 270,
        margin: 10,
    }} >
    { children }
  </li>
)
const InfoSection = ({children}) => (
  <div style={{
        display: 'inline-block',
        width: 200,
        transform: 'translateY(-22%)', 
    }} >
    { children }
  </div>
)
const DescriptionSection = ({children}) => (
  <div style={{fontSize: 16,}} >
    { children }
  </div>
)
const ColorSection = ({children}) => (
  <div style={{fontSize: 12,}} >
    { children }
  </div>
)
/**
 * A color swatch for easy reference.
 */
const ColorSwatch = (props) => {
    const circleStyle = {
        backgroundColor: props.colorHex,
        display: 'inline-block',
        width: 40,
        height: 40,
        borderRadius: 20,
        marginRight: 10,
    };
    return (
        <SwatchSection>
            <div style={circleStyle} ></div>
            <InfoSection>
                <DescriptionSection>{props.description}</DescriptionSection>
                <ColorSection>{props.colorHex}</ColorSection>
            </InfoSection>
        </SwatchSection>
    );
};
ColorSwatch.propTypes = {
	/**
	 * Hex value of the color.
	 */
	colorHex: PropTypes.string,
	/**
	 * Description of the color.
	 */
	description: PropTypes.string,
};
ColorSwatch.defaultProps = {
	colorHex: '#888',
	description: 'Gray',
};

export default ColorSwatch;