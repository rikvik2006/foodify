import { View, Text } from "react-native";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { Minus, Plus } from "lucide-react-native";
import { StyleSheet } from "react-native";
import { useState } from "react";

interface BodyMetricsCardProps {
	typeOfMetric:
		| "bodyWeight"
		| "bodyFat"
		| "blodPressure"
		| "blodSugar"
		| "restingHeartRate"
		| "muscleMass"
		| "waist"
		| "hips"
		| "chest"
		| "thighs"
		| "harms";
}

export default function BodyMetricsCard({
	typeOfMetric,
}: BodyMetricsCardProps) {
	const [mesuramentValue, setMesuramentValue] = useState<number>(100);

	const handlePlusPress = () => {
		setMesuramentValue((prev) => prev + 0.1);
	};

	const handleMinusPress = () => {
		setMesuramentValue((prev) => prev - 0.1);
	};

	const getMetricInfo = () => {
		switch (typeOfMetric) {
			case "bodyWeight":
				return { title: "Body Weight", unit: "kg" };
			case "bodyFat":
				return { title: "Body Fat", unit: "%" };
			case "blodPressure":
				return { title: "Blood Pressure", unit: "mmHg" };
			case "blodSugar":
				return { title: "Blood Sugar", unit: "mg/dL" };
			case "restingHeartRate":
				return { title: "Resting Heart Rate", unit: "BPM" };
			case "muscleMass":
				return { title: "Muscle Mass", unit: "kg" };
			case "waist":
				return { title: "Waist", unit: "cm" };
			case "hips":
				return { title: "Hips", unit: "cm" };
			case "chest":
				return { title: "Chest", unit: "cm" };
			case "thighs":
				return { title: "Thighs", unit: "cm" };
			case "harms":
				return { title: "Arms", unit: "cm" };
			default:
				return { title: null, unit: null };
		}
	};

	const { title, unit } = getMetricInfo();

	if (!title || !unit) {
		return null;
	}

	return (
		<Card>
			<CardContent style={styles.cardContent}>
				<Text style={styles.title}>{title}</Text>
				<Text style={styles.goal}>Goal: &#123;goal&#125; {unit}</Text>
				<View style={styles.controls}>
					<Button
						size="icon"
						onPress={handleMinusPress}
						style={styles.button}
					>
						<Minus color="white" size={28} strokeWidth={2.5} />
					</Button>
					<View style={styles.valueContainer}>
						<Text style={styles.value}>
							{mesuramentValue.toFixed(1)} kg
						</Text>
					</View>
					<Button
						size="icon"
						onPress={handlePlusPress}
						style={styles.button}
					>
						<Plus color="white" size={28} strokeWidth={2.5} />
					</Button>
				</View>
			</CardContent>
		</Card>
	);
}

const styles = StyleSheet.create({
	cardContent: {
		alignItems: "center", // This centers children horizontally
	},
	title: {
		fontSize: 16,
		fontWeight: "bold",
	},
	goal: {
		marginBottom: 12,
	},
	controls: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
	},
	valueContainer: {
		width: 175,
		alignItems: "center",
	},
	value: {
		// marginHorizontal: 32,
		fontSize: 36,
		fontWeight: "600",
	},
	button: {
		borderRadius: 50,
		height: 48,
		width: 48,
	},
});
