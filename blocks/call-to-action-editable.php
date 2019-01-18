<?php
/**
 * Functions to register client-side assets (scripts and stylesheets) for the
 * Gutenberg block.
 *
 * @package caldera-learn-basic-blocks
 */

/**
 * Registers all block assets so that they can be enqueued through Gutenberg in
 * the corresponding context.
 *
 * @see https://wordpress.org/gutenberg/handbook/blocks/writing-your-first-block-type/#enqueuing-block-scripts
 */
add_action('init', function () {
    // Skip block registration if Gutenberg is not enabled/merged.
    if (!function_exists('register_block_type')) {
        return;
    }
    $dir = dirname(__FILE__);

    $index_js = 'call-to-action-editable/build/index.js';
    wp_register_script(
        'call-to-action-editable-block-editor',
        plugins_url($index_js, __FILE__),
        array(
            'wp-blocks',
            'wp-i18n',
            'wp-element',
            'wp-components'
        ),
        filemtime("$dir/$index_js")
    );

    $editor_css = 'call-to-action-editable/editor.css';
    wp_register_style(
        'call-to-action-editable-block-editor',
        plugins_url($editor_css, __FILE__),
        array(),
        filemtime("$dir/$editor_css")
    );

    $style_css = 'call-to-action-editable/style.css';
    wp_register_style(
        'call-to-action-editable-block',
        plugins_url($style_css, __FILE__),
        array(),
        filemtime("$dir/$style_css")
    );

    register_block_type('caldera-learn-basic-blocks/call-to-action-editable', array(
        'editor_script' => 'call-to-action-editable-block-editor',
        'editor_style' => 'call-to-action-editable-block-editor',
        'style' => 'call-to-action-editable-block',
		'render_callback' => 'block_2_render',
		'attributes' => [
			'text' => [
				'type' => 'string',
				'default' => 'Server Side'
			],
			'link' => [
				'type' => 'string',
				'default' => 'https://joshpress.net'
			],
			'linkText' => [
				'type' => 'string',
				'default' => 'Click Here'
			]

		]
    ));
});


function block_2_render($atts){
	$category = ! empty($atts[ 'category']) ?  $atts[ 'text'] : '';
	$link = ! empty($atts[ 'link']) ?  $atts[ 'link'] : '';
	$linkText = ! empty($atts[ 'linkText']) ?  $atts[ 'linkText'] : '';

	$posts = new WP_Query( ['category' => $category ] );
	$x = "<div>
			Hi Roy
		</div>";
	return $x;
}