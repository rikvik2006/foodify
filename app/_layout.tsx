import { Stack } from "expo-router";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { useFonts } from "expo-font";
import { useEffect } from "react";
import * as SplashScreen from "expo-splash-screen";

export default function RootLayout() {
	const [fontsLoaded, error] = useFonts({
		LibreBaskervilleBold: require("@/assets/fonts/LibreBaskerville-Bold.ttf"),
		Geist: require("@/assets/fonts/Geist-VariableFont_wght.ttf"),
	});

	useEffect(() => {
		if (fontsLoaded || error) {
			SplashScreen.hideAsync();
		}
	}, [fontsLoaded]);

	if (!fontsLoaded && !error) {
		return null;
	}

	return (
		<GestureHandlerRootView>
			<Stack screenOptions={{ headerShown: false }}>
				<Stack.Screen name="(tabs)" />
			</Stack>
			<StatusBar style="auto" />
		</GestureHandlerRootView>
	);
}
