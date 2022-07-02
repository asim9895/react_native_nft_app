import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { COLORS, SHADOWS, SIZES, assets } from "../constants/constants/index";

const NftCard = ({ nft_data }) => {
	// navigation controller to navigate between pages
	let navigation = useNavigation();

	return (
		<View
			style={{
				backgroundColor: COLORS.white,
				borderRadius: SIZES.font,
				marginBottom: SIZES.extraLarge,
				margin: SIZES.base,
				...SHADOWS.dark,
			}}
		>
			<View style={{ width: "100%", height: 250 }}>
				{/* Cover Image For Card */}
				<Image
					source={nft_data.image}
					resizeMode="cover"
					style={{
						width: "100%",
						height: "100%",
						borderTopLeftRadius: SIZES.font,
						borderTopRightRadius: SIZES.font,
					}}
				/>

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
						right: 10,
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
			<View style={{ marginHorizontal: 15 }}>
				<Text style={{ fontSize: 17, fontFamily: "InterSemiBold" }}>
					{nft_data.name}
				</Text>
				<Text style={{ fontSize: 13, fontFamily: "InterLight" }}>
					{nft_data.creator}
				</Text>
			</View>

			{/* Price and Place a bid Section */}
			<View
				style={{
					flexDirection: "row",
					justifyContent: "space-between",
					alignItems: "center",
					marginHorizontal: 15,
					marginVertical: 15,
				}}
			>
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

				<TouchableOpacity
					onPress={() => navigation.navigate("Details")}
					activeOpacity={0.8}
				>
					<View
						style={{
							alignItems: "center",
							backgroundColor: "black",
							width: 100,
							height: 40,
							borderRadius: 20,
							justifyContent: "center",
						}}
					>
						<Text
							style={{
								fontSize: 13,
								fontFamily: "InterSemiBold",
								color: "white",
							}}
						>
							Place a bid
						</Text>
					</View>
				</TouchableOpacity>
			</View>
		</View>
	);
};

export default NftCard;

const styles = StyleSheet.create({});
