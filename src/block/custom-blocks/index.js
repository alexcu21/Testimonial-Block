/**
 * REGISTER: alexcuadra Custom Blocks.
 */
import edit from './edit';
import save from './save';

import { __ } from '@wordpress/i18n';
import { registerBlockType } from '@wordpress/blocks';

registerBlockType( 'alexcuadra/custom-blocks', {
	title: __( 'alexcuadra Custom Blocks', 'custom-blocks' ),
	icon: 'edit',
	category: 'common',
	keywords: [
		__( 'alexcuadra', 'custom-blocks' ),
		__( 'custom-blocks', 'custom-blocks' ),
	],
	attributes: {
		content: {
			type: 'array',
			source: 'children',
			selector: 'p',
		},
	},
	edit,
	save,
} );
