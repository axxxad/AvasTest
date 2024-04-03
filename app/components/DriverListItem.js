import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import PrimaryText from "./PrimaryText";
import SecondaryText from "./SecondaryText";
import LevelIcon from "./LevelIcon";

export default function DriverListItem({ driver }) {
  return (
    <View
      style={{
        flexDirection: "row",
        padding: 16,
        borderWidth: 1,
        borderRadius: 8,
        marginVertical: 4,
        borderColor: "#F0F2F5",
      }}
    >
      <Image
        source={driver.imgUrl}
        style={{ height: 42, width: 42, borderRadius: 21 }}
      />
      <View
        style={{
          marginLeft: 8,
          paddingVertical: 7,
          flex: 1,
          justifyContent: "space-between",
        }}
      >
        <PrimaryText style={{ fontSize: 14, color: "#333333" }}>
          {driver.name}
        </PrimaryText>
        <SecondaryText style={{ fontSize: 12, color: "#8E939C" }}>
          {driver.level}
        </SecondaryText>
      </View>
      <LevelIcon level={driver.level} size={35} />
    </View>
  );
}
