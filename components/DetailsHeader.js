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

const DetailsHeader = ({ nft_data, navigation }) => {
	return (
		<SafeAreaView>
			{/* Details Image and Different button to go back and make favourite*/}
			<View style={{ width: "100%", height: 300 }}>
				{/* Cover Image For Card */}
				<Image
					source={nft_data.image}
					resizeMode="cover"
					style={{
						width: "100%",
						height: "100%",
					}}
				/>

				{/* Back icon over the card */}
				<TouchableOpacity
					style={{
						width: 40,
						height: 40,
						backgroundColor: COLORS.white,
						position: "absolute",
						alignItems: "center",
						justifyContent: "center",
						borderRadius: SIZES.extraLarge,
						top: 10,
						left: 15,
						...SHADOWS.light,
					}}
					onPress={() => navigation.goBack()}
				>
					<Image
						source={assets.left}
						resizeMode="contain"
						style={{ width: 24, height: 24 }}
					/>
				</TouchableOpacity>

				{/* Heart icon over the card */}
				<TouchableOpacity
					style={{
						width: 40,
						height: 40,
						backgroundColor: COLORS.white,
						position: "absolute",
						alignItems: "center",
						justifyContent: "center",
						borderRadius: SIZES.extraLarge,
						top: 10,
						right: 15,
						...SHADOWS.light,
					}}
				>
					<Image
						source={assets.heart}
						resizeMode="contain"
						style={{ width: 24, height: 24 }}
					/>
				</TouchableOpacity>
			</View>

			{/* Ending time box  */}
			<View
				style={{
					width: 90,
					height: 50,
					backgroundColor: COLORS.white,
					marginHorizontal: 10,
					alignSelf: "flex-end",
					marginTop: -20,
				}}
			>
				<View
					style={{
						display: "flex",
						flexDirection: "column",
						justifyContent: "center",
						alignItems: "center",
						padding: 4,
					}}
				>
					<Text style={{ fontSize: 11, fontFamily: "InterLight" }}>
						Ending In
					</Text>
					<Text style={{ fontSize: 15, fontFamily: "InterBold" }}>12h 30m</Text>
				</View>
			</View>

			{/* Title and subtitle context */}
			<View
				style={{
					marginHorizontal: 15,
					marginTop: 15,
					flexDirection: "row",
					justifyContent: "space-between",
					alignItems: "center",
				}}
			>
				<View>
					<Text style={{ fontSize: 20, fontFamily: "InterSemiBold" }}>
						{nft_data.name}
					</Text>
					<Text style={{ fontSize: 15, fontFamily: "InterLight" }}>
						{nft_data.creator}
					</Text>
				</View>

				<View
					style={{
						flexDirection: "row",
						justifyContent: "center",
						alignItems: "center",
					}}
				>
					<Image source={assets.eth} style={{ width: 15, height: 15 }} />
					<Text style={{ fontSize: 15, fontFamily: "InterSemiBold" }}>
						{nft_data.price}
					</Text>
				</View>
			</View>

			{/* Description section */}
			<View style={{ marginHorizontal: 15, marginTop: 20 }}>
				<Text style={{ fontSize: 16, fontFamily: "InterSemiBold" }}>
					Description
				</Text>
				<Text style={{ fontSize: 13, fontFamily: "InterRegular" }}>
					{nft_data.description}
				</Text>
			</View>

			{/* Current Bids section */}
			<View style={{ marginHorizontal: 10, marginTop: 15 }}>
				<Text style={{ fontSize: 16, fontFamily: "InterSemiBold" }}>
					Current Bids
				</Text>
			</View>
		</SafeAreaView>
	);
};

export default DetailsHeader;

const styles = StyleSheet.create({});
