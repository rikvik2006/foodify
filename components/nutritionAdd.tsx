import { View, Text, StyleSheet } from "react-native";
import { stylesVariables } from "@/styles/variable";
import Svg, { Circle } from "react-native-svg";
import { Button } from "./ui/button";

interface NutritionAddProps {
	children: React.ReactNode;
	title: string;
	kcal: number;
	maxKcal: number;
}

export default function NutritionAdd({
	children,
	title,
	kcal,
	maxKcal,
}: NutritionAddProps) {
	const calculatePercentage = (kcal: number, maxKcal: number): number => {
		// Cap percentage at 100%
		const calculatedPercentage = (kcal / maxKcal) * 100;
		return parseFloat(Math.min(100, calculatedPercentage).toFixed(1));
	};

	const percentage = calculatePercentage(kcal, maxKcal);

	// Circle configuration
	const size = 50;
	const strokeWidth = 6;
	const radius = (size - strokeWidth) / 2;
	const circumference = 2 * Math.PI * radius;
	const strokeDashoffset = circumference - (circumference * percentage) / 100;

	return (
		<View style={styles.container}>
			<View style={styles.emojiTitle}>
				<View style={styles.circleContainer}>
					<Svg width={size} height={size}>
						{/* Background circle (grey) */}
						<Circle
							cx={size / 2}
							cy={size / 2}
							r={radius}
							strokeWidth={strokeWidth}
							stroke={stylesVariables.colors.cloud.normal}
							fill="transparent"
						/>
						{/* Progress circle (always primary color) */}
						<Circle
							cx={size / 2}
							cy={size / 2}
							r={radius}
							strokeWidth={strokeWidth}
							stroke={stylesVariables.colors.primary.normal}
							fill="transparent"
							strokeDasharray={circumference}
							strokeDashoffset={strokeDashoffset}
							strokeLinecap="round"
							transform={`rotate(-90, ${size / 2}, ${size / 2})`}
						/>
					</Svg>
					<Text style={styles.emoji}>{children}</Text>
				</View>
				<View>
					<Text style={styles.title}>{title}</Text>
					<Text style={styles.kcal}>
						{kcal} / {maxKcal} kcal
					</Text>
				</View>
			</View>
			<Button size="icon">+</Button>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		display: "flex",
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
	},
	emojiTitle: {
		display: "flex",
		gap: 12,
		flexDirection: "row",
		alignItems: "center",
	},
	title: {
		fontSize: 16,
		fontWeight: "600",
	},
	kcal: {
		fontSize: 10,
		fontWeight: "400",
	},
	emoji: {
		fontSize: 28,
		position: "absolute",
	},
	circleContainer: {
		width: 50,
		height: 50,
		justifyContent: "center",
		alignItems: "center",
	},
});
