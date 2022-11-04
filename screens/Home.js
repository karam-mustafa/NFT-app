import React from "react";
import { useState } from "react";
import { View, SafeArea, FlatList, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { COLORS, NFTData } from "../constants";
import { HomeHeader, FocuesdStatusBar, NFTCard } from "../components/index";
export const Home = () => {
  const [nftData, setNftData] = useState(NFTData);

  const handleOnSearch = (value) => {
    if(value.length == 0) return setNftData(NFTData);

    const filterdData = NFTData.filter((item) => {
      return item.name.toLowerCase().includes(value.toLowerCase());
    })

    if(filterdData.length){
      setNftData(filterdData);
    }else{
      setNftData(NFTData);
    }
  }
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FocuesdStatusBar background={COLORS.primary} />
      <View style={{ flext: 1 }}>
        <View style={{ zIndex: 0 }}>
          <FlatList
            data={nftData}
            renderItem={({ item }) => <NFTCard data={item}/>}
            keyExtractor={(item) => item.id}
            showsVerticalScrollIndicator={false}
            ListHeaderComponent={<HomeHeader  onSearch={handleOnSearch}/>}
          ></FlatList>
        </View>

        <View
          style={{
            position: "absolute",
            top: 0,
            bottom: 0,
            right: 0,
            left: 0,
            zIndex: -1
          }}
        >
          <View style={{ height:300, backgroundColor: COLORS.primary}} />
          <View style={{ flex:1, backgroundColor: COLORS.white}} />
        </View>
      </View>
    </SafeAreaView>
  );
};
