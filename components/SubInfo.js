import { View, Text, Image } from "react-native";
import React from "react";
import { SIZES, FONTS, COLORS, SHADOWS, assets } from "../constants";

export const NFTTitle = ({ title, subTitle, titleSize, subTitleSize }) => {
  return (
    <View>
      <Text
        style={{
          fontFamily: FONTS.semiBold,
          fontSize: titleSize,
          color: COLORS.primary,
        }}
      >
        {title}
      </Text>
      <Text
        style={{
          fontFamily: FONTS.regular,
          fontSize: subTitleSize,
          color: COLORS.primary,
        }}
      >
        {subTitle}
      </Text>
    </View>
  );
};

export const EthPrice = ({ price }) => {
  return (
    <View style={{ flexDirection: "row" }}>
      <Image
        source={assets.eth}
        resizeMode="contain"
        style={{ width: 20, height: 20, marginRight: 2 }}
      />
      <Text
        style={{
          fontFamily: FONTS.medium,
          fonstSize: SIZES.medium,
          color: COLORS.primary,
        }}
      >
        {price}
      </Text>
    </View>
  );
};

export const ImageCmp = ({ img, index }) => {
  return (
    <Image
      source={img}
      resizeMode="contain"
      style={{
        width: 48,
        height: 48,
        marginLeft: index == 0 ? 0 : -SIZES.font,
      }}
    />
  );
};
export const People = () => {
  return (
    <View style={{ flexDirection: "row" }}>
      {[assets.person01, assets.person02, assets.person03].map((img, index) => (
        <ImageCmp img={img} index={index} key={"people-" + index} />
      ))}
    </View>
  );
};
export const EndDate = () => {
  return (
    <View
      style={{
        paddingHorizontal: SIZES.font,
        paddingVertical: SIZES.base,
        backgroundColor: COLORS.white,
        alignItems: "center",
        justifyContent: "center",
        ...SHADOWS.light,
        elevation: 1,
        maxWidth: "50%",
      }}
    >
      <Text
        style={{
          fontFamily: FONTS.regular,
          color: COLORS.primary,
          fontSize: SIZES.small,
        }}
      >
        Ending in
      </Text>
      <Text
        style={{
          fontFamily: FONTS.semiBold,
          color: COLORS.primary,
          fontSize: SIZES.medium,
        }}
      >
        Ending in
      </Text>
    </View>
  );
};
export const SubIfo = () => {
  return (
    <View
      style={{
        width: "100%",
        paddingHorizontal: SIZES.font,
        marginTop: -SIZES.extraLarge,
        flexDirection: "row",
        justifyContent: "space-between",
      }}
    >
      <People></People>
      <EndDate></EndDate>
    </View>
  );
};
