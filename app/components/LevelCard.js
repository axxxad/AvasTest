import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import PrimaryText from "./PrimaryText";
import SecondaryText from "./SecondaryText";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../config/colors";
import LevelIcon from "./LevelIcon";

const StatsBox = ({ title, value }) => {
  return (
    <View style={styles.statsContainer}>
      <SecondaryText style={{ fontSize: 12 }}>{title}</SecondaryText>
      <PrimaryText style={{ fontSize: 14, marginTop: 2 }}>{value}</PrimaryText>
    </View>
  );
};
export default function LevelCard({ profile }) {
  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <LevelIcon level={profile.level} size={40} />
        <View
          style={{
            marginLeft: 12,
            paddingVertical: 7,
            flex: 1,
            justifyContent: "space-between",
          }}
        >
          <View style={{ flexDirection: "row" }}>
            <SecondaryText
              style={{ fontSize: 14, color: "#8E939C", marginRight: 8 }}
            >
              Your Level
            </SecondaryText>
            <MaterialCommunityIcons
              name="information-outline"
              size={18}
              color="#BFC2C9"
            />
          </View>
          <PrimaryText style={{ fontSize: 24 }}>Member</PrimaryText>
        </View>
      </View>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <StatsBox title="Quarterly rides" value={profile.quarterlyRides} />
        <View style={{ width: 8 }} />
        <StatsBox
          title="Cancellation"
          value={profile.cancellationPercent + "%"}
        />
        <View style={{ width: 8 }} />
        <StatsBox title="Driver rating" value={profile.rating} />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F0F2F5",
    borderRadius: 16,
    padding: 16,
  },
  statsContainer: {
    flex: 1,
    padding: 8,
    borderRadius: 8,
    backgroundColor: "white",
  },
});
