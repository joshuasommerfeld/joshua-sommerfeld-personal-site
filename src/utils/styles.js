import { css } from 'styled-components';

export const breakpoints = {
  sm: '768px',
  md: '992px',
  lg: '1200px'
};

export const breakpoint = Object.keys(breakpoints).reduce((accumulator, label) => {
  accumulator[label] = (...args) => css`
		@media (min-width: ${breakpoints[label]}) {
			${css(...args)};
		}
	`;
  return accumulator;
}, {});

export const spacing = {
  xxs: '2px',
  xs: '4px',
  sm: '8px',
  md: '16px',
  lg: '24px',
  xl: '48px',
}

export const pallete = {
  text: '#1b242f',
  inverse: '#f5f5f5',
  grey: '#BEBEBE',
  highlight: '#FF5733',
  background01: '#f5f5f5',
  background02: '#1b242f'
}
