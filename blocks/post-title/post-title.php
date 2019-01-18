<?php
function caldera_learn_basic_blocks_post_title_shortcode_handler($atts)
{
	$atts = shortcode_atts([
		'id' => 0,
		'heading' => 'h3',
	], $atts, 'cl_post_title');

	return caldera_learn_basic_blocks_post_title($atts[ 'id' ], $atts[ 'heading' ]);
}

add_shortcode('cl_post_title', 'caldera_learn_basic_blocks_post_title_shortcode_handler');

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
