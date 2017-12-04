import React, { PropTypes } from 'react';
import logo from './ihs-logo.svg';
import styled from 'styled-components';

const Logo = styled.img`
  width: 8.5em;
  marginRight: 1.5em;
`;

export function LogoRenderer({ classes, children }) {
	return (
		<div>
			<Logo src={logo} />
			{children}
		</div>
	);
}


export default LogoRenderer;
