import React from "react";
import { View, Text, Image } from "react-native";
import { COLORS, SIZES, SHADOWS, assets, FONTS } from "../Constant";

export const Title = ({ title, subTitle, titleSize, subTitleSize }) => {
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
    </View>
  );
};

export const Price = () => {
  return (
    <View>
      <Text>Price</Text>
    </View>
  );
};

export const ImageCamp = ({ imgUrl, index }) => {
  return (
    <Image
      source={imgUrl}
      resizeMode="contain"
      style={{
        width: 48,
        height: 48,
        marginLeft: index === 0 ? 0 : -SIZES.font,
      }}
    />
  );
};

export const Buyers = () => {
  return (
    <View style={{ flexDirection: "row" }}>
      {[assets.person01, assets.person02, assets.person03].map(
        (imgUrl, index) => (
          <ImageCamp imgUrl={imgUrl} index={index} key={`Buyers-${index}`} />
        )
      )}
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
        justifyContent: "center",
        alignItems: "center",
        ...SHADOWS.light,
        elevation: 1,
        maxWidth: "50%",
      }}
    >
      <Text style={{ fontSize: SIZES.small, color: COLORS.primary }}>
        Time Out
      </Text>
      <Text
        style={{ fontSize: SIZES.large, fontWeight: "bold", color: "#B20600" }}
      >
        24:00h
      </Text>
    </View>
  );
};

export const SubInfo = () => {
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
      <Buyers />
      <EndDate />
    </View>
  );
};
