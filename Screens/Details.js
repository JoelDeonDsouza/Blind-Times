import React from "react";
import {
  Text,
  View,
  SafeAreaView,
  Image,
  StatusBar,
  FlatList,
} from "react-native";
import { COLORS, SIZES, SHADOWS, assets } from "../Constant";
import {
  SubInfo,
  CircleBTN,
  RectBTN,
  StatusBarHome,
  DetailsDesc,
  DetailsBid,
} from "../Components";
import { ImageCamp } from "../Components/SubInfo";

const DetailsHeader = ({ data, navigation }) => (
  <View style={{ width: "100%", height: 373 }}>
    <Image
      source={data.image}
      resizeMode="cover"
      style={{ width: "100%", height: "100%" }}
    />
  </View>
);

const Details = ({ route, navigation }) => {
  // console.log(route);
  const { data } = route.params;
  return (
    <SafeAreaView
      style={{ flex: 1 }}
      barStyle="dark-content"
      backgroundColor="transparent"
      translucent={true}
    >
      <View
        style={{
          width: "100%",
          position: "absolute",
          bottom: 0,
          paddingVertical: SIZES.font,
          justifyContent: "center",
          alignItems: "center",
          zIndex: 1,
        }}
      >
        <RectBTN minWidth={170} fontSize={SIZES.large} {...SHADOWS.dark} />
      </View>
      <FlatList
        data={data.bids}
        renderItem={({ item }) => (
          <DetailsBid
            bid={item}
            keyExtractor={(item) => item.id}
            showsVerticalcrollIndicator={false}
            contentContainerStyle={{ paddingBottom: SIZES.extraLarge * 3 }}
            ListHeaderComponent={() => (
              <React.Fragment>
                <DetailsHeader data={data} navigation={navigation} />
              </React.Fragment>
            )}
          />
        )}
      />
    </SafeAreaView>
  );
};

export default Details;
