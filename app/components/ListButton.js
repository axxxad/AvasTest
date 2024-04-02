import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import PrimaryText from "./PrimaryText";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function ListButton({ title, onPress, style }) {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.container, style]}>
      <PrimaryText style={{ fontSize: 14, color: "#333333" }}>
        {title}
      </PrimaryText>
      <MaterialCommunityIcons name="chevron-right" size={30} color="#BFC2C9" />
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 1,
    borderColor: "#E8EAED",
    paddingVertical: 16,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
