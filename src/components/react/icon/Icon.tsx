// import type { IconType } from '../../../types/icon';
import React from 'react';

interface IconProps {
  name: string;
  size: number;
  className?:string;
}

export default ({ name, size, className = '' }: IconProps) => {
	return (
		<svg
			className={ className }
			xmlns="http://www.w3.org/2000/svg"
			width={ size }
			height={ size }
			aria-hidden="true"
		>
			<use xlinkHref={`#${ name }-outline-sm`} />
		</svg>
	);
};
