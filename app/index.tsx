import { Text, StyleSheet } from "react-native";
import PageWrapper from "@/components/pageWrapper";
import { stylesVariables } from "@/styles/variable";

export default function Index() {
	return (
		<PageWrapper style={styles.container}>
			<Text style={styles.welcome}>Hi &#123;USER&#125;</Text>
			<Text style={styles.welcomeMessage}>
				Today is an amazing day to track your calories
			</Text>
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
