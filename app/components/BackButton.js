import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function BackButton() {
  const size = 40;
  return (
    <View
      style={{
        // backgroundColor: "yellow",
        margin: 8,
        height: size,
        width: size,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: size / 2,
        shadowColor: "black",
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 4,
      }}
    >
      <View
        style={{
          backgroundColor: "white",
          height: size,
          width: size,
          borderRadius: size / 2,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <MaterialCommunityIcons
          name="keyboard-backspace"
          size={25}
          color="black"
        />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({});
