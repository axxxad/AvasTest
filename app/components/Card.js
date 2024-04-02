import { StyleSheet, Text, View } from "react-native";
import React from "react";

export default function Card({ children, style }) {
  return <View style={[styles.card, style]}>{children}</View>;
}
const styles = StyleSheet.create({
  card: {
    backgroundColor: "white",
    padding: 16,
    borderRadius: 18,
    paddingTop: 16,
    paddingBottom: 24,
  },
});
