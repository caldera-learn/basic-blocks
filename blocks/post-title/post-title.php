<?php
/**
 * Handler for [cl_post_title] shortcode
 *
 * @param $atts
 *
 * @return string
 */
function caldera_learn_basic_blocks_post_title_shortcode_handler($atts)
{
	$atts = shortcode_atts([
		'id' => 0,
		'heading' => 'h3',
	], $atts, 'cl_post_title');

	return caldera_learn_basic_blocks_post_title($atts[ 'id' ], $atts[ 'heading' ]);
}

/**
 * Register Shortcode
 */
add_shortcode('cl_post_title', 'caldera_learn_basic_blocks_post_title_shortcode_handler');

/**
 * Handler for post title block
 * @param $atts
 *
 * @return string
 */
function caldera_learn_basic_blocks_post_title_block_handler($atts)
{
	return caldera_learn_basic_blocks_post_title($atts[ 'id' ], $atts[ 'heading' ]);
}

/**
 * Output the post title wrapped in a heading
 *
 * @param int $post_id The post ID
 * @param string $heading Allows : h2,h3,h4 only
 *
 * @return string
 */
function caldera_learn_basic_blocks_post_title($post_id, $heading)
{
	if (!in_array($heading, ['h2', 'h3', 'h4'])) {
		$heading = 'h2';
	}
	$title = get_the_title(absint($post_id));
	return "<$heading>$title</$heading>";
}

/**
 * Register block
 */
add_action('init', function () {
	// Skip block registration if Gutenberg is not enabled/merged.
	if (!function_exists('register_block_type')) {
		return;
	}
	$dir = dirname(__FILE__);

	$index_js = 'index.js';
	wp_register_script(
		'caldera-learn-basic-blocks-post-title',
		plugins_url($index_js, __FILE__),
		array(
			'wp-blocks',
			'wp-i18n',
			'wp-element',
			'wp-components'
		),
		filemtime("$dir/$index_js")
	);

	register_block_type('caldera-learn-basic-blocks/post-title', array(
		'editor_script' => 'caldera-learn-basic-blocks-post-title',
		'render_callback' => 'caldera_learn_basic_blocks_post_title_block_handler',
		'attributes' => [
			'id' => [
				'default' => 1
			],
			'heading' => [
				'default' => 'h2'
			]

		]
	));
});

