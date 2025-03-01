import { Stack } from "expo-router";
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

	return <Stack screenOptions={{ headerShown: false }} />;
}
