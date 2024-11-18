import { LinearGradient } from "expo-linear-gradient";
import { Image } from "expo-image";

import { StyleSheet, Text, View } from "react-native";
import imageData from "@/data/media.json";

type Movie = {
	postmeta: {
		meta_key: {
			__prefix: string;
			__cdata: string;
		};
		meta_value: {
			__prefix: string;
			__cdata: string;
		};
	}[];
	title: string;
};

type Props = {
	data: Movie;
}

export default function MovieCard({ data } : Props ) {

	const imageId: string | undefined = data.postmeta.find(
		(meta) => meta.meta_key.__cdata === "_thumbnail_id"
	)?.meta_value.__cdata;

	if (!imageId) {
		return null;
	}

	const images = imageData.rss.channel.item;
	const movieImage = images.find((image) => image.post_id.__text === imageId);


	if (!movieImage) {
		return null;
	}

	return (
		<View>
			<Image
				style={style.image}
				source={movieImage?.attachment_url.__text}
				contentFit="cover"
				transition={0}
			/>
			<LinearGradient colors={["transparent", "rgba(0,0,0,0.8)"]} style={style.title}>
				<Text style={style.titleText}>{data.title}</Text>
			</LinearGradient>
		</View>
	);
}

const style = StyleSheet.create({
	image: {
		aspectRatio: 2 / 3,
		flex: 1,
		width: 300,
	},
	title: {
		fontWeight: "bold",
		position: "absolute",
		bottom: 0,
		left: 0,
		right: 0,
		top: "70%",
	},
	titleText: {
		bottom: 0,
		color: "#fff",
		fontSize: 18,
		fontStyle: "italic",
		fontWeight: "bold",
		padding: 10,
		position: "absolute",
	},
});
