import {tv} from 'tailwind-variants';
import tvConfig from '../../../tv-configs/button.json';
import { cn } from '../../../helpers/tailwind';

const tvButton = tv(tvConfig);

const {
	base : slotBase ,
	label : slotLabel,
	iconWrapper : slotIconWrapper,
	iconWrapperStart : slotIconWrapperStart,
	iconWrapperEnd : slotIconWrapperEnd,
	icon : slotIcon,
} = tvButton();

const defProps = {
	label : '',
	variant : 'primary',
	size : '500',
	iconStart : false,
	iconEnd : false,
	class : '',
}

export function makeButton( props: any ): string {
	props = {...defProps, ...props};

	const slotsProps = {
		variant : props.variant,
		size : props.size,
		onlyIcon : !props.label || props.label == ''
	}

	return `
		<button
			class="${ cn( slotBase( slotsProps ), props.class ) }"
		>
			${
				props.iconStart &&
				`
					<span class="${ cn( slotIconWrapper( slotsProps ), slotIconWrapperStart( slotsProps ) ) }">
						<Icon className={ cn( slotIcon( slotsProps ) ) } name={iconStart} size={ 24 } />
					</span>
				`
			}

			${
				props.label && `<span className=${ cn( slotLabel( slotsProps ) ) }>${ props.label }</span>`
			}

			${
				props.iconEnd &&
				`<span className=${ cn( slotIconWrapper( slotsProps ), slotIconWrapperEnd( slotsProps )  ) }>
					<Icon className=${ cn( slotIcon( slotsProps ) ) } name="${ props.iconEnd }" size="24" />
				</span>`
			}
		</button>
	`;
}