import { StyleSheet, Text, View, SafeAreaView, FlatList } from "react-native";
import React, { useState, useEffect } from "react";
import { NFTData, COLORS } from "../constants/constants/index";
import HomeHeader from "../components/HomeHeader";
import NftCard from "../components/NftCard";

const Home = () => {
	const [data, setdata] = useState(NFTData);

	const [search_value, setsearch_value] = useState("");

	const onChange = (value) => {
		setsearch_value(value);
		setdata(
			data.filter((d) => {
				return d.name.toLowerCase().includes(value.toLowerCase());
			})
		);
	};

	useEffect(() => {
		if (search_value === "") {
			setdata(NFTData);
		}
	}, [search_value]);

	return (
		<SafeAreaView style={{ flex: 1 }}>
			<View style={{ flex: 1 }}>
				<View style={{ zIndex: 0 }}>
					{/* Static black container for styling  */}
					<View
						style={{
							position: "absolute",
							top: 0,
							bottom: 0,
							left: 0,
							right: 0,
							zIndex: -1,
							backgroundColor: COLORS.primary,
							height: 300,
						}}
					></View>

					{/* List to render nft data on screen */}
					<FlatList
						data={data}
						renderItem={({ item }) => <NftCard nft_data={item} />}
						keyExtractor={(item) => item.id}
						showsVerticalScrollIndicator={false}
						ListHeaderComponent={
							<HomeHeader
								search_value={search_value}
								setsearch_value={setsearch_value}
								onSearchChange={onChange}
							/>
						}
					/>
				</View>
			</View>
		</SafeAreaView>
	);
};

export default Home;

const styles = StyleSheet.create({});
