const path = require('path');
const loaders = require('loaders');

module.exports = {
	title: 'React Pattern Library',
	sections: [
		{
			name: 'Components',
			components: './src/components/**/[A-Z]*.js',
		},
		{
			name: 'Layouts',
			components: './src/layouts/**/[A-Z]*.js',
		}
	],	
	showSidebar: true,
	skipComponentsWithoutExample: true,
	theme: {
		baseBackground: '#fdfdfc',
		link: '#274e75',
		linkHover: '#90a7bf',
		border: '#e0d2de',
		font: ['Univers Next'],
	},
	styles: {
		Playground: {
			content:{
				maxWidth : '100%'
			},
			root: {
				borderRadius: 0,
				borderWidth: [[0, 0, 1, 0]],
				width:'100%'
			},
			preview: {
				paddingLeft: 0,
				paddingRight: 0,
				width:'100%'
			},
			codeToggle: {
				marginTop: 1,
				border: 0,
			},
			hideCode: {
				background: 'none',
			},
		},
		Markdown: {
			pre: {
				border: 0,
				background: 'none',
			},
			code: {
				fontSize: 14,
			},
		},
	},
	getComponentPathLine(componentPath) {
		const name = path.basename(componentPath, '.js');
		return `import { ${name} } from 'mk-pattern-library-react';`;
	},
};
