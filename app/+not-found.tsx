import { Link, Stack } from "expo-router";
import { StyleSheet, Text } from "react-native";

export default function NotFoundScreen() {
	return (
		<>
			<Stack.Screen options={{ title: "Oops!" }} />
			<Text>This screen doesn't exist.</Text>
			<Link href="/movies" style={styles.link}>Go to movies!
			</Link>
		</>
	);
}

const styles = StyleSheet.create({
	link: {
		marginTop: 15,
		paddingVertical: 15,
	},
});
