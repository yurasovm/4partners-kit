import {tv} from 'tailwind-variants';
import tvConfig from '../../../tv-configs/button.json';
import type { IconType } from '../../../../types';
import Icon from '../icon/Icon';
import { cn } from '../../../helpers/tailwind';
import React from 'react';

const tvButton = tv(tvConfig);

const {
	base : slotBase ,
	label : slotLabel,
	iconWrapper : slotIconWrapper,
	iconWrapperStart : slotIconWrapperStart,
	iconWrapperEnd : slotIconWrapperEnd,
	icon : slotIcon,
} = tvButton();

type SizeType = '200' | '300' | '400' | '500' | '600';
type VariantType = 'primary' | 'ghost' | 'addition' | 'secondary' | 'tertiary' | 'contrast';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	label?: string,
	size?: SizeType,
	variant?: VariantType,
	iconStart?: IconType,
	iconEnd?: IconType,
	className?:string,
}

export default ({
	label,
	variant = 'primary',
	size = '500',
	iconStart,
	iconEnd,
	className = '',
} : ButtonProps ) => {

	const slotsProps = {
		variant,
		size,
		onlyIcon : !label
	}

	return (
		<button
			className={ cn( slotBase( slotsProps ), className ) }
		>
			{
				iconStart &&
				<span className={ cn( slotIconWrapper( slotsProps ), slotIconWrapperStart( slotsProps ) ) }>
					<Icon className={ cn( slotIcon( slotsProps ) ) } name={iconStart} size={ 24 } />
				</span>
			}

			{
				label &&
				<span className={ cn( slotLabel( slotsProps ) ) }>{ label }</span>
			}

			{
				iconEnd &&
				<span className={ cn( slotIconWrapper( slotsProps ), slotIconWrapperEnd( slotsProps )  ) }>
					<Icon className={ cn( slotIcon( slotsProps ) ) } name={iconEnd} size={ 24 } />
				</span>
			}
		</button>
	)
}