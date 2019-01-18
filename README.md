# Basic Blocks For Learning Gutenberg

## What Is This?
Example code from [Josh Pollock](https://JoshPress.net)'s talks and workshops about the new block-based "Gutenberg" editor for WordPress.

* [WordCamp Pittsburgh 2018](https://calderaforms.com/wordcamp-pittsburgh-2018/)
* [React Boston 2018](https://calderaforms.com/react-boston-2018/)
* [php[World] 2018](https://CalderaForms.com/phpworld-2018/) All day workshop with [Zac Gordon](https://javaScriptforwp.com?ref=636)

## Want To Learn More About Gutenberg?
* [Gutenberg Handbook](https://wordpress.org/gutenberg/handbook/)
* [Check out Zac’s Gutenberg development course](https://gutenberg.courses/development/?ref=636)
* [My big list of Gutenberg -related talks for developers](https://joshpress.net/a-list-of-developer-facing-talks-about-the-new-wordpress-gutenberg-block-editor/)
* [Gutenberg Block Basics - Video WordCamp Jacksonville 2018](https://wordpress.tv/2018/07/15/josh-pollock-gutenberg-block-basics/)

## How To Install/ Use/ Learn
This repo has three blocks:

 * "Call To Action" - A basic static block.
 * "Call To Action Editable" - A static block with editable options.
 * "Call To Action Editable Advanced" - A static block with editable options and even more controls and WordPress APIs.
 * "Post Title" - An example of block that replaces a shortcode.
 
 These blocks were made without JSX or any build tools first. Then they were converted to JSX, using webpack. The first commit in the conversion to JSX is [8b01eaffdea8222435d296dd85a3bfef74d5ccfd](https://github.com/caldera-learn/basic-blocks/commit/8b01eaffdea8222435d296dd85a3bfef74d5ccfd)
 
 * [Download basic version without JSX](https://github.com/caldera-learn/basic-blocks/archive/With-createElement.zip)
 
 ### Use JSX-version
 * Clone from Github
    * `git clone git@github.com:caldera-learn/basic-blocks.git` 
 * Switch to directory
    * `cd basic-blocks`  
 * Install
    * `npm install`
 * Start watcher to compile JS
    * `npm run dev`
