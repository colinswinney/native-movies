import { useLocalSearchParams } from "expo-router";
import { Text, View } from "react-native";
import movieData from "../../../data/movies.json";

export default function MoviesSingle() {

	const { id } = useLocalSearchParams();
	const { item: movies } = movieData.rss.channel;

	// Pluck out our movie.
	const movie = movies.find((movie) => movie.post_name.__cdata === id);

	if (!movie) {
		return (
			<View
				style={{
					flex: 1,
					justifyContent: "center",
					alignItems: "center",
				}}
			>
				<Text>Movie not found</Text>
			</View>
		);
	}

	return (
		<View
			style={{
				flex: 1,
				justifyContent: "center",
				alignItems: "center",
			}}
		>
			<Text>{movie.title}</Text>
		</View>
	);
}
