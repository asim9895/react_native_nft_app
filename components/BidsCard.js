import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { COLORS, SHADOWS, SIZES, assets } from "../constants/constants/index";

const BidsCard = ({ item }) => {
	return (
		<View
			style={{
				marginHorizontal: 10,
				marginVertical: 10,
				flexDirection: "row",
				justifyContent: "space-between",
				alignItems: "center",
			}}
		>
			{/* Cover Image With Name and Date*/}
			<View style={{ flexDirection: "row", alignItems: "center" }}>
				<Image source={item.image} style={{ width: 50, height: 50 }} />

				<View
					style={{
						flexDirection: "column",
						alignItems: "flex-start",
						justifyContent: "center",
						marginLeft: 7,
					}}
				>
					<Text
						style={{
							color: COLORS.primary,
							fontFamily: "InterBold",
							fontSize: 15,
						}}
					>
						{item.name}
					</Text>
					<Text
						style={{
							color: COLORS.primary,
							fontFamily: "InterRegular",
							fontSize: 11,
						}}
					>
						{item.date}
					</Text>
				</View>
			</View>

			{/* Price By Each User */}
			<View
				style={{
					flexDirection: "row",
					justifyContent: "center",
					alignItems: "center",
					marginRight: 10,
				}}
			>
				<Image source={assets.eth} style={{ width: 15, height: 15 }} />
				<Text style={{ fontSize: 15, fontFamily: "InterSemiBold" }}>
					{item.price}
				</Text>
			</View>
		</View>
	);
};

export default BidsCard;

const styles = StyleSheet.create({});
