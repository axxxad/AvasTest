import { FlatList, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import Card from "../components/Card";
import LevelCard from "../components/LevelCard";
import ListButton from "../components/ListButton";
import PrimaryText from "../components/PrimaryText";
import DriverListItem from "../components/DriverListItem";

const DRIVERS = [
  {
    id: 1,
    name: "John Wise",
    level: "ultimate",
    imgUrl: require("../assets/john-wise.png"),
  },
  {
    id: 2,
    name: "Peter Derel",
    level: "ultimate",
    imgUrl: require("../assets/peter-derel.png"),
  },
  {
    id: 3,
    name: "Simon Coop",
    level: "gold",
    imgUrl: require("../assets/simon-coop.png"),
  },
  {
    id: 4,
    name: "Jack Clayton",
    level: "Platinum",
    imgUrl: require("../assets/jack-clayton.png"),
  },
  {
    id: 5,
    name: "James Bond",
    level: "Ultimate",
    imgUrl: require("../assets/james-bond.png"),
  },
];

const LoyaltyHeader = ({ profile }) => {
  return (
    <Card
      style={{
        borderTopRightRadius: 0,
        borderTopLeftRadius: 0,
      }}
    >
      <LevelCard profile={profile} />
    </Card>
  );
};
const LoyaltyBottom = ({ profile }) => {
  return (
    <Card
      style={{
        marginTop: 16,
        paddingBottom: 0,
        paddingTop: 0,
      }}
    >
      <ListButton
        title="About the program"
        onPress={() => console.log('About the program" pressed')}
      />
      <ListButton
        title="View levels benefits"
        onPress={() => console.log("View levels benefit pressed")}
      />
      <PrimaryText style={{ marginTop: 32, marginBottom: 16, fontSize: 18 }}>
        Top level drivers
      </PrimaryText>

      {DRIVERS.map((driver) => (
        <DriverListItem key={driver.id} driver={driver} />
      ))}
    </Card>
  );
};

export default function LoyaltyScreen() {
  const profile = {
    name: "Gregory Anderson",
    isActive: true,
    level: "platinum",
    quarterlyRides: 98,
    cancellationPercent: 7,
    rating: 4.97,
  };
  return (
    <View style={styles.container}>
      <ScrollView style={{ width: "100%", flex: 1 }}>
        <LoyaltyHeader profile={profile} />
        <LoyaltyBottom profile={profile} />
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
