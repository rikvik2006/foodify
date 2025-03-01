import { View, Text, StyleSheet } from "react-native";
import { TextStyle } from "react-native/Libraries/StyleSheet/StyleSheetTypes";

interface SectioinTitleProps {
	children: string;
	style?: TextStyle;
}

export default function SectionTitle({ children, style }: SectioinTitleProps) {
	return (
		<View>
			<Text style={[styles.title, style]}>{children}</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	title: {
		fontSize: 16,
		fontWeight: "600",
		marginTop: 28,
		marginBottom: 8,
	},
});
