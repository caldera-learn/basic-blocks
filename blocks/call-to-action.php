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

add_action( 'init', function() {
    // Skip block registration if Gutenberg is not enabled/merged.
    if ( ! function_exists( 'register_block_type' ) ) {
        return;
    }
    $dir = dirname( __FILE__ );

    $index_js = 'call-to-action/index.js';
    wp_register_script(
        'call-to-action-block-editor',
        plugins_url( $index_js, __FILE__ ),
        array(
            'wp-blocks',
            'wp-i18n',
            'wp-element',
        ),
        filemtime( "$dir/$index_js" )
    );

    $editor_css = 'call-to-action/editor.css';
    wp_register_style(
        'call-to-action-block-editor',
        plugins_url( $editor_css, __FILE__ ),
        array(),
        filemtime( "$dir/$editor_css" )
    );

    $style_css = 'call-to-action/style.css';
    wp_register_style(
        'call-to-action-block',
        plugins_url( $style_css, __FILE__ ),
        array(),
        filemtime( "$dir/$style_css" )
    );

    register_block_type( 'caldera-learn-basic-blocks/call-to-action', array(
        'editor_script' => 'call-to-action-block-editor',
        'editor_style'  => 'call-to-action-block-editor',
        'style'         => 'call-to-action-block',
    ) );
} );
