import { StyleSheet, Text, View , SafeAreaView, FlatList } from "react-native";
import React from "react";
import {NFTData, COLORS} from '../constants/constants/index'
import HomeHeader from "../components/HomeHeader";
import NftCard from "../components/NftCard";

const Home = () => {
  return (
    <SafeAreaView style={{flex: 1}}>


    <View style={{flex: 1}}>

    <View style={{zIndex: 0}}>

    {/* Static black container for styling  */}
    <View style={{position: "absolute" , top: 0,bottom: 0,left: 0 , right: 0 , zIndex: -1,
    backgroundColor: COLORS.primary , height: 300
  }}>
    </View>

    {/* List to render nft data on screen */}
    <FlatList 
       data={NFTData}
       renderItem={({item}) => <NftCard nft_data={item} />}
       keyExtractor={(item) => item.id}
      showsVerticalScrollIndicator={false}
      ListHeaderComponent={<HomeHeader />}
    />
    </View>
    </View>

    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({});
