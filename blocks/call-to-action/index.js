import {createElement} from '@wordpress/element';
import {__} from '@wordpress/i18n';
import {registerBlockType} from '@wordpress/blocks';


/**
 * One function to generate the same content in edit/save
 *
 * @return {*}
 */
function content() {
	return(
		<div>
			<p>Thanks For Reading My Post About Gutenberg</p>
			<a href={'https://JoshPress.net/Gutenberg'}>Learn More About Gutenberg Here</a>
		</div>
	);
}


registerBlockType('caldera-learn-basic-blocks/call-to-action', {

	title: __('Call To Action'),


	category: 'widgets',

	supports: {
		html: false,
	},


	edit: function (props) {
		return content();
	},

	save: function () {
		return content();
	}
});
