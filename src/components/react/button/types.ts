import React from 'react';
import type { IconType } from '../../../types';

export type SizeType = '200' | '300' | '400' | '500' | '600';
export type VariantType = 'primary' | 'ghost' | 'addition' | 'secondary' | 'tertiary' | 'contrast';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	label?: string,
	size?: SizeType,
	variant?: VariantType,
	iconStart?: IconType,
	iconEnd?: IconType,
	className?:string,
}
