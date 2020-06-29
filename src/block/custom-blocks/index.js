/**
 * REGISTER: alexcuadra Custom Blocks.
 */
import edit from './edit';
import save from './save';

import { __ } from '@wordpress/i18n';
import { registerBlockType } from '@wordpress/blocks';

registerBlockType( 'alexcuadra/custom-blocks', {
	title: __( 'Testimonial Block', 'custom-blocks' ),
	icon: 'edit',
	category: 'common',
	keywords: [
		__( 'alexcuadra', 'custom-blocks' ),
		__( 'custom-blocks', 'custom-blocks' ),
	],
	attributes: {
		testimonialText: {
            type: 'string', 
            source: 'html', 
            selector: '.testimonial-block blockquote'
        }, 
        testimonialName: {
            type: 'string', 
            source: 'html',
            selector: '.testimonial-info p'
        }, 
        testimonialImage: {
            type: 'string', 
            source: 'attribute',
            attribute: 'src',
            selector: '.testimonial-info img'
        }, 
        testimonialColor: {
            type: 'string', 
            default: '#000000'
        },
	},
	edit,
	save,
} );
