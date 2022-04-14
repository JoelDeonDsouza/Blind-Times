import React, { useState } from "react";
import { Text, View, SafeArea, FlatList, SafeAreaView } from "react-native";
import { COLORS, NFTData } from "../Constant";
import { HomeNav, ItemCard, StatusBarHome } from "../Components";

const Home = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBarHome background={COLORS.primary} />
      <View style={{ flex: 1 }}>
        <View style={{ zIndex: 0 }}>
          <FlatList
            data={NFTData}
            renderItem={({ item }) => <Text>{item.name}</Text>}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Home;
