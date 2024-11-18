import { Link } from "expo-router";
import React, { useState, useEffect } from "react";
import { Dimensions, FlatList, Text, ScrollView, StyleSheet, View } from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";

import ACTOR_DATA from "@/data/actors.json";
import MovieCard from "@/components/MovieCard";

export default function MoviesIndex() {
	const { item: movies } = ACTOR_DATA.rss.channel;

	const windowDimensions = Dimensions.get("window");

	const [dimensions, setDimensions] = useState({
		window: windowDimensions,
	});

	useEffect(() => {
		const subscription = Dimensions.addEventListener("change", ({ window }) => {
			setDimensions({ window });
		});
		return () => subscription?.remove();
	});

	let flatListColumns = 1;
	let isSingleColumn = true;

	switch (true) {
		case dimensions.window.width < 625:
			flatListColumns = 1;
			isSingleColumn = true;
			break;
		case dimensions.window.width >= 625 && dimensions.window.width < 1000:
			flatListColumns = 2;
			isSingleColumn = false;
			break;
		case dimensions.window.width >= 1000 && dimensions.window.width < 1375:
			flatListColumns = 3;
			isSingleColumn = false;
			break;
		default:
			flatListColumns = 4;
			isSingleColumn = false;
			break;
	}

	const flatListProps = {
		data: movies,
		numColumns: flatListColumns,
		key: flatListColumns,
		columnWrapperStyle: !isSingleColumn ? { gap: 16 } : undefined,
	};

	return (
		<SafeAreaProvider>
			<SafeAreaView style={{ flex: 1 }}>
				<ScrollView
					contentContainerStyle={{
						flexGrow: 1,
						alignItems: "center",
						justifyContent: "center",
					}}
				>
					<Text style={style.title}>Actors</Text>
					<FlatList
						{...flatListProps}
						renderItem={({ item: movie }) => (
							<View>
								<Link
									href={{
										pathname: "/actors/[id]",
										params: {
											id: movie.post_name.__cdata,
										},
									}}
								>
									<MovieCard
										data={{
											title: movie.title,
											postmeta: movie.postmeta,
										}}
									/>
								</Link>
							</View>
						)}
					/>
				</ScrollView>
			</SafeAreaView>
		</SafeAreaProvider>
	);
}

const style = StyleSheet.create({
	title: {
		fontSize: 32,
		fontWeight: "bold",
	}
});
