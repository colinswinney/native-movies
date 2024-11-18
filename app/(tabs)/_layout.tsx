import { Tabs } from "expo-router";
import React from "react";

// You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/

import Ionicons from '@expo/vector-icons/Ionicons';

export default function TabLayout() {

	return (
		<Tabs
			screenOptions={{
				headerShown: false,
			}}
		>
			<Tabs.Screen
				name="movies/index"
				options={{
					title: "Movies",
					tabBarIcon: ({ color, focused, size }) => (
						<Ionicons
							color={color}
							name={focused ? "videocam" : "videocam-outline"}
							size={size}
						/>
					),
				}}
			/>
			<Tabs.Screen
				name="actors/index"
				options={{
					title: "Actors",
					tabBarIcon: ({ color, focused, size }) => (
						<Ionicons
							name={focused ? "people" : "people-outline"}
							color={color}
							size={size}
						/>
					),
				}}
			/>
			<Tabs.Screen
				name="movies/[id]"
				options={{
					href: null,
				}}
			/>
			<Tabs.Screen
				name="actors/[id]"
				options={{
					href: null,
				}}
			/>
		</Tabs>
	);
}
