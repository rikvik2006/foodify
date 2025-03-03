import {
	View,
	Text,
	Pressable,
	PressableProps,
	StyleSheet,
	StyleProp,
	ViewStyle,
} from "react-native";
import { stylesVariables } from "@/styles/variable";

interface ButtonProps extends PressableProps {
	children: React.ReactNode;
	variant?:
		| "primary"
		| "primarySubtle"
		| "secondary"
		| "destructive"
		| "destructiveSubtle"
		| "white";
	size?: "default" | "sm" | "lg" | "icon";
}

function Button({
	children,
	variant = "primary",
	size = "default",
	style,
	...props
}: ButtonProps) {
	const getButtonStyles = () => {
		switch (variant) {
			case "primary":
				return styles.primary;
			case "primarySubtle":
				return styles.primarySubtle;
			case "secondary":
				return styles.secondary;
			case "destructive":
				return styles.destructive;
			case "destructiveSubtle":
				return styles.destructiveSubtle;
			case "white":
				return styles.white;
			default:
				return styles.primary;
		}
	};

	const getTextStyles = () => {
		switch (variant) {
			case "primary":
			case "destructive":
				return styles.lightText;
			case "secondary":
			case "white":
				return styles.darkText;
			case "primarySubtle":
				return styles.greenText;
			case "destructiveSubtle":
				return styles.redText;
			default:
				return styles.lightText;
		}
	};

	const getPressedStyles = () => {
		switch (variant) {
			case "primary":
				return styles.primaryPressed;
			case "primarySubtle":
				return styles.primarySubtlePressed;
			case "secondary":
				return styles.secondaryPressed;
			case "destructive":
				return styles.destructivePressed;
			case "destructiveSubtle":
				return styles.destructiveSubtlePressed;
			case "white":
				return styles.whitePressed;
			default:
				return styles.primaryPressed;
		}
	};

	const getButtonSize = () => {
		switch (size) {
			case "sm":
				return {
					height: 32,
					borderRadius: 6,
					paddingHorizontal: 12,
					fontSize: 12,
				} as ViewStyle;
			case "lg":
				return {
					height: 40,
					borderRadius: 6,
					paddingHorizontal: 32,
				} as ViewStyle;
			case "icon":
				return {
					height: 36,
					width: 36,
				} as ViewStyle;
			default:
				return {
					height: 36,
					paddingVertical: 8,
					paddingHorizontal: 16,
				} as ViewStyle;
		}
	};

	return (
		<Pressable
			style={({ pressed }) => {
				const combinedStyles = [
					styles.button,
					getButtonStyles(),
					getButtonSize(),
					pressed && getPressedStyles(),
					style,
				];
				return combinedStyles.filter(Boolean) as StyleProp<ViewStyle>;
			}}
			{...props}
		>
			{typeof children === "string" ? (
				<Text style={[styles.text, getTextStyles()]}>{children}</Text>
			) : (
				children
			)}
		</Pressable>
	);
}

const styles = StyleSheet.create({
	button: {
		borderRadius: 6,
		justifyContent: "center",
		alignItems: "center",
	},
	text: {
		fontSize: 16,
		fontWeight: "600",
	},
	lightText: {
		color: stylesVariables.colors.white,
	},
	darkText: {
		color: stylesVariables.colors.ink.dark,
	},
	greenText: {
		color: stylesVariables.colors.primary.normal,
	},
	redText: {
		color: stylesVariables.colors.error.normal,
	},
	primary: {
		backgroundColor: stylesVariables.colors.primary.normal,
	},
	primaryPressed: {
		backgroundColor: stylesVariables.colors.primary.active.normal,
	},
	primarySubtle: {
		backgroundColor: stylesVariables.colors.primary.light,
	},
	primarySubtlePressed: {
		backgroundColor: stylesVariables.colors.primary.active.light,
	},
	secondary: {
		backgroundColor: stylesVariables.colors.cloud.normal,
	},
	secondaryPressed: {
		backgroundColor: stylesVariables.colors.cloud.active.normal,
	},
	destructive: {
		backgroundColor: stylesVariables.colors.error.normal,
	},
	destructivePressed: {
		backgroundColor: stylesVariables.colors.error.active.normal,
	},
	destructiveSubtle: {
		backgroundColor: stylesVariables.colors.error.light,
	},
	destructiveSubtlePressed: {
		backgroundColor: stylesVariables.colors.error.active.light,
	},
	white: {
		backgroundColor: stylesVariables.colors.white,
	},
	whitePressed: {
		backgroundColor: stylesVariables.colors.whiteActive,
	},
});

export { Button };
