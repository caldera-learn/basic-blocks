import { createElement } from "@wordpress/element";
import { __ } from "@wordpress/i18n";
import { registerBlockType } from "@wordpress/blocks";
import { TextControl, Button, BaseControl } from "@wordpress/components";
import {
	RichText,
	InspectorControls,
	AlignmentToolbar,
	ColorPalette
} from "@wordpress/editor";

/**
 * Create style prop for content
 * @param styleProps
 * @return {{textAlign: string}}
 */
const createStyle = styleProps => {
	return {
		textAlign: styleProps.hasOwnProperty("align")
			? styleProps.align
			: "left",
		backgroundColor: styleProps.hasOwnProperty("backgroundColor")
			? styleProps.backgroundColor
			: ""
	};
};

/**
 * One function to generate the same content in edit/save
 *
 * @return {*}
 */
function Content({ attributes }) {
	const {
		text,
		buttonText,
		link,
		align,
		linkColor,
		textColor,
		backgroundColor
	} = attributes;
	return (
		<div
			style={createStyle({
				align,
				backgroundColor
			})}
		>
			<p
				style={{
					color: textColor
				}}
			>
				{text}
			</p>
			<a
				href={link}
				style={{
					color: linkColor
				}}
			>
				{buttonText}
			</a>
		</div>
	);
}

const colors = [
	{ name: "Green", color: "#a3bf61" },
	{ name: "Orange", color: "#ff7e30" },
	{ name: "Dark Grey", color: "#3a3a3c" },
	{ name: "White", color: "#ffffff;" },
	{ name: "Black", color: "#000000;" }
];

const ColorControl = props => (
	<BaseControl label={props.label}>
		<ColorPalette
			colors={colors}
			value={props.value}
			onChange={props.onChange}
		/>
	</BaseControl>
);

registerBlockType(
	"caldera-learn-basic-blocks/call-to-action-editable-advanced",
	{
		title: __("Call To Action Editable Advanced"),

		category: "widgets",

		supports: {
			html: false
		},

		attributes: {
			message: {
				source: "html",
				selector: ".my-text",
				default: "Thanks For Reading!"
			},
			buttonText: {
				type: "string",
				source: "text",
				selector: "button",
				default: "Edit Me!"
			},
			link: {
				type: "string",
				source: "attribute",
				selector: "a",
				attribute: "href",
				default: "https://joshpress.net"
			},
			align: {
				type: "string",
				default: "left"
			},
			textColor: {
				type: "string"
			},
			backgroundColor: {
				type: "string"
			},
			linkColor: {
				type: "string"
			}
		},

		edit({ attributes, setAttributes, isSelected, className }) {
			const {
				message,
				buttonText,
				link,
				align,
				textColor,
				backgroundColor,
				linkColor
			} = attributes;

			const onChangeAlign = align => setAttributes({ align });
			const onChangeTextColor = textColor => setAttributes({ textColor });
			const onChangeBackgroundColor = backgroundColor =>
				setAttributes({ backgroundColor });
			const onChangeLinkColor = linkColor => setAttributes({ linkColor });

			// if (isSelected) {
			// 	return (
			// 		<div>
			// 			<InspectorControls>
			// 				<TextControl
			// 					label={"Link Text"}
			// 					value={buttonText}
			// 					onChange={onChangebuttonText}
			// 				/>
			// 				<TextControl
			// 					label={"Link Url"}
			// 					value={link}
			// 					onChange={onChangeLink}
			// 				/>
			// 				<ColorControl
			// 					label={"Text Color"}
			// 					onChange={onChangeTextColor}
			// 					value={textColor}
			// 				/>
			// 				<ColorControl
			// 					label={"Link Color"}
			// 					onChange={onChangeLinkColor}
			// 					value={linkColor}
			// 				/>
			// 				<ColorControl
			// 					label={"Background Color"}
			// 					onChange={onChangeBackgroundColor}
			// 					value={backgroundColor}
			// 				/>
			// 			</InspectorControls>
			// 			<AlignmentToolbar
			// 				value={align}
			// 				onChange={onChangeAlign}
			// 			/>
			// 			<TextControl
			// 				label={"Call To Action Text"}
			// 				value={text}
			// 				onChange={onChangeText}
			// 				style={createStyle({ align })}
			// 			/>
			// 		</div>
			// 	);
			// }

			return (
				<div className={className}>
					<InspectorControls>
						<TextControl
							label={"Link Text"}
							value={buttonText}
							onChange={buttonText =>
								setAttributes({ buttonText })
							}
						/>
						<TextControl
							label={"Link Url"}
							value={link}
							onChange={link => setAttributes({ link })}
						/>
					</InspectorControls>
					<RichText
						multiline={true}
						className="my-text"
						onChange={message => setAttributes({ message })}
						value={message}
					/>
					<Button isDefault>{attributes.buttonText}</Button>
				</div>
			);
		},

		save({ attributes }) {
			return (
				<div>
					<div className="my-text">
						<RichText.Content value={attributes.message} />
					</div>
					<a href={attributes.link}>
						<button>{attributes.buttonText}</button>
					</a>
				</div>
			);
		}
	}
);
