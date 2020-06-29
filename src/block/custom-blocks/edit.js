/**
 * EDIT: alexcuadra Custom Blocks
 */
import { RichText, MediaUpload, InspectorControls, ColorPalette } from '@wordpress/block-editor';
import { IconButton, PanelBody } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

const Edit = ( props ) => {
	// console.log(props);

        // Extract the contents from attributes
        const { attributes: { testimonialText, testimonialName, testimonialImage, testimonialColor }, setAttributes } = props;

        // Reads the text from the testimonial
        const onChangeTestimonialText = newText => {
            setAttributes({ testimonialText: newText })
        }

        // Reads the name of the person
        const onChangeTestimonialName = personName => {
            setAttributes({ testimonialName : personName })
        }

        // Access the Selected image
        const onSelectImage = newImage => {
            setAttributes({ testimonialImage : newImage.sizes.medium.url });
        }

        // access the HEX value from the color pallete
        const onChangeTestimonialColor = newColor => {
            setAttributes({ testimonialColor : newColor })
        }

        return(
         <>
            <InspectorControls>
                <PanelBody title='Color Options'>
                    <div className="components-base-control">
                        <div className="components-base-control__field">
                            <label className="components-base-control__label">
                                Name person's Color and Line
                            </label>
                            <ColorPalette
                                onChange={onChangeTestimonialColor}
                            />
                        </div>
                    </div>
                </PanelBody>
            </InspectorControls>
            <div className="testimonial-block" style={{ borderColor : testimonialColor }}>
                <blockquote>
                    <RichText 
                        placeholder="Add the Text for the Testimonial"
                        onChange={onChangeTestimonialText}
                        value={testimonialText}
                    />
                </blockquote>
                <div className="testimonial-info">
                    <img src={testimonialImage} />
                    <MediaUpload
                        onSelect={onSelectImage}
                        type="image"
                        render={({open}) => (
                            <IconButton 
                                onClick={open}
                                icon="format-image"
                                showTooltip="true"
                                label="Add Image"
                            />
                        )}
                    />
                    <p>
                        <RichText
                            placeholder="Add the Name of the Person"
                            onChange={onChangeTestimonialName}
                            value={testimonialName}
                            style={{ color: testimonialColor }}
                        />
                    </p>
                </div>
            </div>
        </>
        )
};

export default Edit;
