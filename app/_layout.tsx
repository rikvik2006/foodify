import { Stack } from "expo-router";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { useFonts } from "expo-font";
import { useEffect } from "react";
import * as SplashScreen from "expo-splash-screen";
// Convex
import { ConvexProvider, ConvexReactClient } from "convex/react";

export default function RootLayout() {
	const [fontsLoaded, error] = useFonts({
		LibreBaskervilleBold: require("@/assets/fonts/LibreBaskerville-Bold.ttf"),
		Geist: require("@/assets/fonts/Geist-VariableFont_wght.ttf"),
	});

	const convex = new ConvexReactClient(process.env.EXPO_PUBLIC_CONVEX_URL!, {
		unsavedChangesWarning: false,
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
		<ConvexProvider client={convex}>
			<GestureHandlerRootView>
				<Stack screenOptions={{ headerShown: false }}>
					<Stack.Screen name="(tabs)" />
				</Stack>
				<StatusBar style="auto" />
			</GestureHandlerRootView>
		</ConvexProvider>
	);
}
