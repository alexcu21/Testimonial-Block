/**
 * SAVE: alexcuadra Custom Blocks
 */
import { RichText, MediaUpload, URLInputButton,  BlockControls, AlignmentToolbar } from '@wordpress/block-editor';
import { IconButton, PanelBody } from '@wordpress/components';

const Save = ( props ) => {
	// extract the contents from props
	const { attributes: { testimonialText, testimonialName, testimonialImage, testimonialColor }  } = props;

	return(
		<div className="testimonial-block" style={{ borderColor : testimonialColor }}>
			<blockquote>
				<RichText.Content value={testimonialText} />
			</blockquote>
			<div className="testimonial-info">
				<img src={testimonialImage} />
				<p style={{ color: testimonialColor }}>
					<RichText.Content value={testimonialName} />
				</p>
			</div>
		</div>
	)
};

export default Save;
