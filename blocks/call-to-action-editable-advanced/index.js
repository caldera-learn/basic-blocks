import { createElement } from "@wordpress/element";
import { __ } from "@wordpress/i18n";
import { registerBlockType } from "@wordpress/blocks";
import { TextControl, Button } from "@wordpress/components";
import { RichText, MediaUpload } from "@wordpress/editor";

registerBlockType(
	"caldera-learn-basic-blocks/call-to-action-editable-advanced",
	{
		title: __("Call To Action Editable Advanced"),
		category: "widgets",
		supports: {
			html: false
		},
		attributes: {
			title: {
				type: "string",
				source: "text",
				selector: ".entry-title",
				default: "Block Title"
			},
			message: {
				source: "html",
				selector: ".my-text",
				default: "Thanks For Reading!"
			},
			imgURL: {
				type: "string",
				source: "attribute",
				attribute: "src",
				selector: "img"
			},
			imgID: {
				type: "number"
			},
			imgAlt: {
				type: "string",
				source: "attribute",
				attribute: "alt",
				selector: "img"
			}
		},

		edit({ attributes, setAttributes, isSelected, className }) {
			const { title, message, imgID, imgURL, imgAlt } = attributes;
			const onSelectImage = img => {
				setAttributes({
					imgID: img.id,
					imgURL: img.url,
					imgAlt: img.alt
				});
			};
			const onRemoveImage = () => {
				setAttributes({
					imgID: null,
					imgURL: null,
					imgAlt: null
				});
			};
			return (
				<div className={className}>
					{isSelected ? (
						<h3 className="entry-title">
							<TextControl
								label={"Title"}
								value={title}
								onChange={title => setAttributes({ title })}
							/>
						</h3>
					) : (
						<h3>{title}</h3>
					)}
					{!imgID ? (
						<MediaUpload
							onSelect={onSelectImage}
							type="image"
							value={imgID}
							render={({ open }) => (
								<Button
									isPrimary
									className={"button button-large"}
									onClick={open}
								>
									{__(" Upload Image")}
								</Button>
							)}
						/>
					) : (
						<p class="image-wrapper">
							<img src={imgURL} alt={imgAlt} />
							{isSelected && (
								<Button
									isPrimary
									className="remove-image"
									onClick={onRemoveImage}
								>
									{__("Remove Image")}
								</Button>
							)}
						</p>
					)}
					<RichText
						multiline
						className="my-text"
						placeholder="Write message here.."
						onChange={message => setAttributes({ message })}
						value={message}
					/>
				</div>
			);
		},

		save({ attributes }) {
			const { title, message, imgID, imgURL, imgAlt } = attributes;
			return (
				<div>
					<h3 className="entry-title">{title}</h3>
					<img src={imgURL} alt={imgAlt} />
					<div className="my-text">
						<RichText.Content value={message} />
					</div>
				</div>
			);
		}
	}
);
