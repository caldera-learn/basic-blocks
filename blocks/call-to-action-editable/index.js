import {createElement} from '@wordpress/element';
import {__} from '@wordpress/i18n';
import {registerBlockType} from '@wordpress/blocks';
import {TextControl} from '@wordpress/components';
import {InspectorControls} from '@wordpress/editor';


/**
 * One function to generate the same content in edit/save
 *
 * @return {*}
 */
function Content({attributes}) {
	const {text,linkText,link} = attributes;
	return(
		<div>
			<p>{text}</p>
			<a href={link}>{linkText}</a>
		</div>
	);
}


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
		}
	},

	edit ({attributes,setAttributes,isSelected}) {
		const {text,linkText,link} = attributes;

		if (isSelected) {

			const onChangeText = (text) => setAttributes({text});
			const onChangeLinkText = (linkText) => setAttributes({linkText});
			const onChangeLink = (link) => setAttributes({link});

			return(
				<div>
					<InspectorControls>
						<TextControl
							label={'Link Text' }
							value={linkText}
							onChange={onChangeLinkText}
						/>
						<TextControl
							label={'Link Url' }
							value={link}
							onChange={onChangeLink}
						/>
					</InspectorControls>
					<TextControl
						label={'Call To Action Text' }
						value={text}
						onChange={onChangeText}
					/>
				</div>
			)

		}
		return <Content
			attributes={attributes}
		/>
	},

	save ({attributes}) {
		return <Content
			attributes={attributes}
		/>
	}
});

