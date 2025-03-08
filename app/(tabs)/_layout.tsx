import { Tabs } from "expo-router";
import { Home, ChefHat } from "lucide-react-native";

export default function TabLayout() {
	return (
		<Tabs screenOptions={{ headerShown: false }}>
			<Tabs.Screen
				name="index"
				options={{
					title: "Home",
					tabBarIcon: ({ color }) => <Home size={24} color={color} />,
				}}
			/>
			<Tabs.Screen
				name="addFood"
				options={{
					title: "Foods",
					tabBarIcon: ({ color }) => (
						<ChefHat size={24} color={color} />
					),
				}}
			/>
		</Tabs>
	);
}
