import React from "react";
import { View, Text, Image } from "react-native";
import { COLORS, SIZES, SHADOWS, assets } from "../Constant";

export const Title = () => {
  return (
    <View>
      <Text>Title</Text>
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
    <View>
      <Text>EndDate</Text>
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
