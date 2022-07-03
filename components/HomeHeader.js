import {
	StyleSheet,
	Text,
	View,
	Image,
	TextInput,
	TouchableOpacity,
} from "react-native";
import React from "react";
import { assets, COLORS } from "../constants/constants/index";
import { Entypo } from "@expo/vector-icons";

const HomeHeader = ({ search_value, setsearch_value, onSearchChange }) => {
	return (
		<View style={{ marginTop: 30, marginHorizontal: 15 }}>
			{/* Top Header Logo And Image */}
			<View
				style={{
					flexDirection: "row",
					justifyContent: "space-between",
					alignItems: "center",
				}}
			>
				<Image
					source={assets.logo}
					style={{ width: 100, height: 50 }}
					resizeMode="contain"
				/>

				<Image
					source={assets.person01}
					style={{ width: 35, height: 35 }}
					resizeMode="contain"
				/>
			</View>

			{/* Welcome Text*/}
			<View style={{ marginVertical: 10 }}>
				<Text
					style={{ fontFamily: "InterMedium", fontSize: 11, color: "white" }}
				>
					Hello, Asim 👋
				</Text>
				<Text style={{ fontFamily: "InterBold", fontSize: 17, color: "white" }}>
					Let's find a masterpiece
				</Text>
			</View>

			{/* Search Input */}
			<View
				style={{
					marginVertical: 20,
					backgroundColor: COLORS.gray,
					padding: 9,
					borderRadius: 5,
					flexDirection: "row",
					alignItems: "center",
					justifyContent: "space-between",
				}}
			>
				<View
					style={{
						flexDirection: "row",
						alignItems: "center",
						justifyContent: "center",
					}}
				>
					<Image
						source={assets.search}
						style={{ width: 20, height: 20, marginRight: 10 }}
					/>
					<TextInput
						placeholder="Search NFTs"
						placeholderTextColor={"white"}
						value={search_value}
						onChangeText={(text) => onSearchChange(text)}
					/>
				</View>
				{search_value !== "" && (
					<View>
						<TouchableOpacity onPress={() => setsearch_value("")}>
							<Entypo name="cross" style={{ color: "white" }} size={25} />
						</TouchableOpacity>
					</View>
				)}
			</View>
		</View>
	);
};

export default HomeHeader;

const styles = StyleSheet.create({});
