import { View, StyleSheet, type ViewStyle } from "react-native";
import { stylesVariables } from "@/styles/variable";

interface CardProps {
	children: React.ReactNode;
	style?: ViewStyle;
}

interface CardContentProps {
	children: React.ReactNode;
	style?: ViewStyle;
}

function Card({ children, style }: CardProps) {
	return <View style={[styles.card, style]}>{children}</View>;
}

function CardContent({ children, style }: CardContentProps) {
	return <View style={[styles.cardContent, style]}>{children}</View>;
}

const styles = StyleSheet.create({
	card: {
		backgroundColor: stylesVariables.colors.white,
		borderRadius: stylesVariables.radiusXl,
		shadowColor: "#000000",
		shadowOffset: { width: 0, height: 4 },
		shadowOpacity: 0.25,
		shadowRadius: 4,
		elevation: 4,
	},
	cardContent: {
		padding: 16,
	},
});

export { Card, CardContent };
