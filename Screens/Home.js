import React, { useState } from "react";
import { View, SafeArea, FlatList, SafeAreaView } from "react-native";
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
            renderItem={({ item }) => <ItemCard data={item} />}
            keyExtractor={(item) => item.id}
            showsVerticalScrollIndicator={false}
            ListHeaderComponent={<HomeNav />}
          />
        </View>
        <View
          style={{
            position: "absolute",
            top: 0,
            bottom: 0,
            right: 0,
            left: 0,
            zIndex: -1,
          }}
        >
          <View style={{ height: 300, backgroundColor: COLORS.primary }} />
          <View style={{ flex: 1, backgroundColor: COLORS.white }} />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Home;
