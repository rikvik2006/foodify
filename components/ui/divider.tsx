import { View, type ViewStyle } from "react-native";

interface DividerProps {
	style?: ViewStyle;
	color?: string;
	oreintation?: "horizontal" | "vertical";
}

function Divider({ style, color, oreintation }: DividerProps) {
	return (
		<View
			style={[
				{
					borderBottomWidth: 1,
					borderBottomColor: color,
					width: "100%",
				},
				oreintation === "horizontal"
					? {
							borderBottomWidth: 1,
							borderBottomColor: color,
							width: "100%",
					  }
					: {
							borderRightWidth: 1,
							borderRightColor: color,
							height: "100%",
					  },
				style,
			]}
		/>
	);
}

export { Divider };
