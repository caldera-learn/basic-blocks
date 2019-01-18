import {createElement} from '@wordpress/element';
import {__} from '@wordpress/i18n';
import {registerBlockType} from '@wordpress/blocks';
import {
	TextControl,
	BaseControl
} from '@wordpress/components';
import {
	InspectorControls,
	AlignmentToolbar,
	ColorPalette,
	ServerSideRender
} from '@wordpress/editor';

/**
 * Create style prop for content
 * @param styleProps
 * @return {{textAlign: string}}
 */
const createStyle = (styleProps) => {
	return {
		textAlign: styleProps.hasOwnProperty('align') ? styleProps.align : 'left',
		backgroundColor: styleProps.hasOwnProperty('backgroundColor') ? styleProps.backgroundColor : ''
	}
}

/**
 * One function to generate the same content in edit/save
 *
 * @return {*}
 */
function Content({attributes}) {
	const {
		text,
		linkText,
		link,
		align,
		linkColor,
		textColor,
		backgroundColor
	} = attributes;
	return (
		<div
			style={createStyle({
				align,
				backgroundColor
			})}>
			<p style={{
				color: textColor
			}}>
				{text}
			</p>
			<a
				href={link}
				style={{
					color: linkColor
				}}>
				{linkText}
			</a>
		</div>
	);
}


const colors = [
	{name: 'Green', color: '#a3bf61'},
	{name: 'Orange', color: '#ff7e30'},
	{name: 'Dark Grey', color: '#3a3a3c'},
	{name: 'White', color: '#ffffff;'},
	{name: 'Black', color: '#000000;'},
];

const ColorControl = (props) => (
	<BaseControl
		label={props.label}
	>
		<ColorPalette
			colors={colors}
			value={props.value}
			onChange={props.onChange}
		/>
	</BaseControl>
);


registerBlockType('caldera-learn-basic-blocks/call-to-action-editable', {

	title: __('Call To Action Editable'),

	category: 'widgets',

	supports: {
		html: false,
	},

	attributes: {
		text: {
			type: 'string',
			source: 'text',
			selector: 'p',
			default: 'Thanks For Reading!'
		},
		linkText: {
			type: 'string',
			source: 'text',
			selector: 'a',
			default: 'Learn More Here.'
		},
		link: {
			type: 'string',
			source: 'attribute',
			selector: 'a',
			attribute: 'href',
			default: 'https://joshpress.net'
		},
		align: {
			type: 'string',
			default: 'left'
		},
		textColor: {
			type: 'string'
		},
		backgroundColor: {
			type: 'string',
		},
		linkColor: {
			type: 'string',
		}
	},

	edit({attributes, setAttributes, isSelected}) {
		const {
			text,
			linkText,
			link,
			align,
			textColor,
			backgroundColor,
			linkColor
		} = attributes;


		const onChangeText = (text) => setAttributes({text});
		const onChangeLinkText = (linkText) => setAttributes({linkText});
		const onChangeLink = (link) => setAttributes({link});
		const onChangeAlign = (align) => setAttributes({align});
		const onChangeTextColor = (textColor) => setAttributes({textColor});
		const onChangeBackgroundColor = (backgroundColor) => setAttributes({backgroundColor});
		const onChangeLinkColor = (linkColor) => setAttributes({linkColor});


		if (isSelected) {
			return (
				<div>
					<InspectorControls>
						<TextControl
							label={'Link Text'}
							value={linkText}
							onChange={onChangeLinkText}
						/>
						<TextControl
							label={'Link Url'}
							value={link}
							onChange={onChangeLink}
						/>
						<ColorControl
							label={'Text Color'}
							onChange={onChangeTextColor}
							value={textColor}
						/>
						<ColorControl
							label={'Link Color'}
							onChange={onChangeLinkColor}
							value={linkColor}
						/>
						<ColorControl
							label={'Background Color'}
							onChange={onChangeBackgroundColor}
							value={backgroundColor}
						/>

					</InspectorControls>
					<AlignmentToolbar
						value={align}
						onChange={onChangeAlign}
					/>
					<TextControl
						label={'Call To Action Text'}
						value={text}
						onChange={onChangeText}
						style={createStyle({align})}
					/>

				</div>
			)
		}


		return  <ServerSideRender
			atttibues={attributes}
			block={'caldera-learn-basic-blocks/call-to-action-editable'}
		/>;


	},

	save({attributes}) {
		return null;
	}
});

