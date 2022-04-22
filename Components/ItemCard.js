import React from "react";
import { View, Image, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { COLORS, SIZES, SHADOWS, assets } from "../Constant";
import { CircleBTN, RectBTN } from "./BTN";
import { SubInfo, Price, Title } from "./SubInfo";

const ItemCard = ({ data }) => {
  const navigation = useNavigation();

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
        <Image
          source={data.image}
          resizeMode="cover"
          style={{
            width: "100%",
            height: "100%",
            borderTopLeftRadius: SIZES.font,
            borderTopRightRadius: SIZES.font,
          }}
        />
        <CircleBTN imgUrl={assets.heart} right={10} top={10} />
      </View>
      {/* <Text>ItemCard</Text> */}
      <SubInfo />
      <View style={{ width: "100%", padding: SIZES.font }}>
        <Title
          title={data.name}
          subTitle={data.creator}
          titleSize={SIZES.large}
          subTitleSize={SIZES.small}
        />
        <View
          style={{
            marginTop: SIZES.font,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Price price={data.price} />
          <RectBTN
            minWidth={120}
            fontSize={SIZES.font}
            handlePress={() => navigation.navigate("Details", { data })}
          />
        </View>
      </View>
    </View>
  );
};

export default ItemCard;
