import { View, StyleSheet, ViewStyle } from "react-native";

export default function PageWrapper({
	children,
	style,
}: {
	children: React.ReactNode;
	style?: ViewStyle;
}) {
	return <View style={[styles.container, style]}>{children}</View>;
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingLeft: 16,
		paddingRight: 16,
	},
});
