import React, { useState } from "react";
import { View, Image, Text, StatusBar } from "react-native";
import { CircleButton, RectButton } from "../components/Button";
import { SafeAreaView } from "react-native-safe-area-context";
import { DetailsBids, FocuesdStatusBar } from "../components";
import { EthPrice, NFTTitle, SubIfo } from "../components/SubInfo";
import { assets, COLORS, FONTS, SHADOWS, SIZES } from "../constants";
import { FlatList } from "react-native-gesture-handler";

const DetailsDesc = ({ data }) => {
  const [text, setText] = useState(data.description.slice(0, 100));
  const [readMore, setreadMore] = useState(false);
  return (
    <View>
      <View
        style={{
          width: "100%",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <NFTTitle
          title={data.name}
          subTitle={data.creator}
          titleSize={SIZES.extraLarge}
          subTitleSize={SIZES.font}
        />
        <EthPrice price={data.price} />
      </View>

      <View style={{ marginVertical: SIZES.font * 1.5 }}>
        <Text
          fontSize={SIZES.font}
          fontFamily={FONTS.semiBold}
          color={COLORS.primary}
        >
          Description
        </Text>
        <View style={{ marginVertical: SIZES.base }}>
          <Text
            fontSize={SIZES.small}
            fontFamily={FONTS.regular}
            color={COLORS.secondary}
            lineHeight={SIZES.large}
          >
            {text}
            {!readMore && "..."}
            <Text
              fontSize={SIZES.small}
              fontFamily={FONTS.semiBold}
              color={COLORS.primary}
              onPress={() => {
                if (!readMore) {
                  setText(data.description);
                  setreadMore(true);
                } else {
                  setText(data.description.slice(0, 100));
                  setreadMore(false);
                }
              }}
            >
              {readMore ? "Show Less" : "Show More"}
            </Text>
          </Text>
        </View>
      </View>
    </View>
  );
};

const DetailHeader = ({ data, navigation }) => (
  <View style={{ width: "100%", height: 373 }}>
    <Image
      source={data.image}
      resizeMode="cover"
      style={{ width: "100%", height: "100%" }}
    />

    <CircleButton
      imgUrl={assets.left}
      handlePress={() => navigation.goBack()}
      left={15}
      top={StatusBar.currentHeight + 10}
    />
    <CircleButton
      imgUrl={assets.heart}
      right={15}
      top={StatusBar.currentHeight + 10}
    />
  </View>
);

const Details = ({ route, navigation }) => {
  const { data } = route.params;
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FocuesdStatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent={true}
      />
      <View
        style={{
          width: "100%",
          position: "absolute",
          bottom: 0,
          paddingVertical: SIZES.font,
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "rgba(255, 255,255, 0.5)",
          zIndex: 1,
        }}
      >
        <RectButton minWidth={170} fontSize={SIZES.font} {...SHADOWS.dark} />
      </View>
      <FlatList
        data={data.bids}
        renderItem={(item) => <DetailsBids bid={item} />}
        keyExtractor={(item) => item.id}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: SIZES.extraLarge * 3,
        }}
        ListHeaderComponent={() => (
          <React.Fragment>
            <DetailHeader data={data} navigation={navigation} />
            <SubIfo />
            <View style={{ padding: SIZES.font }}>
              <DetailsDesc data={data} />
              {data.bids.length > 0 && (
                <Text
                  style={{
                    fontSize: SIZES.font,
                    fontFamily: FONTS.semiBold,
                    color: COLORS.primary,
                  }}
                >
                  Current Bid
                </Text>
              )}
            </View>
          </React.Fragment>
        )}
      />
    </SafeAreaView>
  );
};

export default Details;
