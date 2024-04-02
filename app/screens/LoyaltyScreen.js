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
    imgUrl: require("../assets/customer.png"),
  },
  {
    id: 2,
    name: "Peter Derel",
    level: "ultimate",
    imgUrl: require("../assets/driver.png"),
  },
  {
    id: 3,
    name: "Simon Coop",
    level: "gold",
    imgUrl: require("../assets/driver.png"),
  },
  {
    id: 4,
    name: "Jack Clayton",
    level: "Platinum",
    imgUrl: require("../assets/customer.png"),
  },
  {
    id: 5,
    name: "John Wise",
    level: "Platinum",
    imgUrl: require("../assets/driver.png"),
  },
  {
    id: 6,
    name: "James Bond",
    level: "Ultimate",
    imgUrl: require("../assets/driver.png"),
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
      <ListButton title="About the program" onPress={{}} />
      <ListButton title="View levels benefits" onPress={{}} />
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
