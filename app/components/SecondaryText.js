import { StyleSheet, Text, View } from "react-native";
import React from "react";
import colors from "../config/colors";

export default function SecondaryText({ style, children }) {
  return <Text style={[styles.text, style]}>{children}</Text>;
}
const styles = StyleSheet.create({
  text: {
    fontSize: 14,
    fontWeight: "400",
    color: colors.secondaryText,
  },
});
