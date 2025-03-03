import { Text, StyleSheet } from "react-native";
import PageWrapper from "@/components/pageWrapper";
import { stylesVariables } from "@/styles/variable";
import SectionTitle from "@/components/sectionTitle";
import { Card, CardContent } from "@/components/ui/card";
import NutritionAdd from "@/components/nutritionAdd";

export default function Index() {
	return (
		<PageWrapper style={styles.container}>
			<Text style={styles.welcome}>Hi &#123;USER&#125;</Text>
			<Text style={styles.welcomeMessage}>
				Today is an amazing day to track your calories
			</Text>
			<SectionTitle>Nutrition</SectionTitle>
			<Card style={{ height: 500 }}>
				<CardContent>
					{/* kcal and maxKcal need to be dynamic */}
					<NutritionAdd title="Breakfast" kcal={250} maxKcal={300}>
						☕️
					</NutritionAdd>
					<NutritionAdd title="Launch" kcal={850} maxKcal={1000}>
						🍱
					</NutritionAdd>
					<NutritionAdd title="Dinner" kcal={900} maxKcal={1000}>
						🥗
					</NutritionAdd>
					<NutritionAdd title="Snaks" kcal={80} maxKcal={300}>
						🍎
					</NutritionAdd>
				</CardContent>
			</Card>
		</PageWrapper>
	);
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: stylesVariables.colors.cloud.light,
	},
	welcome: {
		fontSize: 48,
		fontWeight: 700,
		marginTop: 100,
		fontFamily: "LibreBaskervilleBold",
	},
	welcomeMessage: {
		fontSize: 16,
		marginTop: 5,
		width: 252,
	},
});
