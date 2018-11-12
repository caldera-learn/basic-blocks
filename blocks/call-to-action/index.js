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
	/**
	 * This is the display title for your block, which can be translated with `i18n` functions.
	 * The block inserter will show this name.
	 */
	title: __('Call To Action'),

	/**
	 * Blocks are grouped into categories to help users browse and discover them.
	 * The categories provided by core are `common`, `embed`, `formatting`, `layout` and `widgets`.
	 */
	category: 'widgets',

	/**
	 * Optional block extended support features.
	 */
	supports: {
		// Removes support for an HTML mode.
		html: false,
	},

	/**
	 * The edit function describes the structure of your block in the context of the editor.
	 * This represents what the editor will render when the block is used.
	 * @see https://wordpress.org/gutenberg/handbook/block-edit-save/#edit
	 *
	 * @param {Object} [props] Properties passed from the editor.
	 * @return {Element}       Element to render.
	 */
	edit: function (props) {
		return content();
	},

	/**
	 * The save function defines the way in which the different attributes should be combined
	 * into the final markup, which is then serialized by Gutenberg into `post_content`.
	 * @see https://wordpress.org/gutenberg/handbook/block-edit-save/#save
	 *
	 * @return {Element}       Element to render.
	 */
	save: function () {
		return content();
	}
});
