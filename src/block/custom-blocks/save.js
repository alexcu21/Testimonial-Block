/**
 * SAVE: alexcuadra Custom Blocks
 */
import { RichText, MediaUpload, URLInputButton,  BlockControls, AlignmentToolbar } from '@wordpress/block-editor';
import { Button, PanelBody } from '@wordpress/components';

const Save = ( props ) => {
	// extract the contents from props
	const { attributes: { testimonialText, testimonialName, mediaID, mediaURL, testimonialColor }  } = props;

	return(
		<div className="testimonial-block" style={{ borderColor : testimonialColor }}>
			<blockquote>
				<RichText.Content value={testimonialText} />
			</blockquote>
			<div className="testimonial-info">
				<img src={mediaURL} />
				<p style={{ color: testimonialColor }}>
					<RichText.Content value={testimonialName} />
				</p>
			</div>
		</div>
	)
};

export default Save;
