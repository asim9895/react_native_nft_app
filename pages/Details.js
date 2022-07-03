import {
	SafeAreaView,
	StyleSheet,
	Text,
	View,
	Image,
	TouchableOpacity,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { COLORS, SHADOWS, SIZES, assets } from "../constants/constants/index";
import DetailsHeader from "../components/DetailsHeader";
import { FlatList } from "react-native-gesture-handler";
import BidsCard from "../components/BidsCard";

const Details = ({ route, navigation }) => {
	const { nft_data } = route.params;
	return (
		<SafeAreaView
			style={{
				flex: 1,
				marginTop: 30,
				backgroundColor: "white",
			}}
		>
			{/* Sticky place a bid button */}
			<View
				style={{
					position: "absolute",
					bottom: 20,
					backgroundColor: "black",
					width: 150,
					height: 50,
					zIndex: 1,
					borderRadius: 30,
					alignItems: "center",
					alignSelf: "center",
					justifyContent: "center",
				}}
			>
				<Text
					style={{ color: "white", fontSize: 15, fontFamily: "InterSemiBold" }}
				>
					Place a bid
				</Text>
			</View>

			<FlatList
				data={nft_data.bids}
				renderItem={({ item }) => (
					<SafeAreaView>
						<BidsCard item={item} />
					</SafeAreaView>
				)}
				keyExtractor={(item) => item.id}
				showsVerticalScrollIndicator={false}
				ListHeaderComponent={
					<DetailsHeader nft_data={nft_data} navigation={navigation} />
				}
				ListFooterComponent={<View style={{ marginTop: 100 }}></View>}
			/>
		</SafeAreaView>
	);
};

export default Details;

const styles = StyleSheet.create({});
