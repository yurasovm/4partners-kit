import { tv } from 'tailwind-variants';
import tvConfig from '../../../tv-configs/button.json';
import Icon from '../icon/Icon';
import { cn } from '../../../helpers/tailwind';
import type { ButtonProps } from './types';

const tvButton = tv(tvConfig);

const {
  base: slotBase,
  label: slotLabel,
  iconWrapper: slotIconWrapper,
  iconWrapperStart: slotIconWrapperStart,
  iconWrapperEnd: slotIconWrapperEnd,
  icon: slotIcon
} = tvButton()

const Button = ({
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

export default Button;