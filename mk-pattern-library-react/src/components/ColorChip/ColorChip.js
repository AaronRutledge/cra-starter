import React from 'react';
import PropTypes from 'prop-types';
const ChipSection = (props) => {
  return (
    <li style={props.style} >
      {props.children}
    </li>
  );
};

const DescriptionSection = (props) =>{ 
  let style = {
    display: 'inline-block', 
    verticalAlign:'middle',
    whiteSpace : 'nowrap',
    overflow:'hidden',
    textOverflow : 'ellipsis',
    width:'calc(100% - 24px)'
  }
 return (
  <div style={style} >
    {props.children}
  </div>
)}
/**
 * A color chip for easy reference.
 */
const ColorChip = (props) => {
  const { size, description, colorHex, opacity, fullChip } = props;
  const chipStyle = {
    backgroundColor: colorHex,
    opacity: opacity,
    display: 'inline-block',
    width: size,
    height: size,
    marginRight: 10,
    verticalAlign:'middle'
  };
  return (
    <ChipSection style={props.style}>
      <div style={chipStyle} ></div>
      <DescriptionSection fullChip={fullChip} chipWidth={size}>{description}</DescriptionSection>
    </ChipSection>
  );
};
ColorChip.propTypes = {
	/**
	 * Hex value of the color.
	 */
  colorHex: PropTypes.string,
	/**
	 * Description of the color.
	 */
  description: PropTypes.string,
};
ColorChip.defaultProps = {
  size: 14,
  colorHex: '#888',
  description: 'Gray',
  opacity: 1.0,
};

export default ColorChip;