import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import Card from "../components/Card";
import PrimaryText from "../components/PrimaryText";
import SecondaryText from "../components/SecondaryText";
import LevelCard from "../components/LevelCard";
import colors from "../config/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const ProfileHeader = ({ profile }) => {
  return (
    <Card
      style={{
        borderTopRightRadius: 0,
        borderTopLeftRadius: 0,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          paddingVertical: 8,
          marginBottom: 8,
        }}
      >
        <Image
          source={require("../assets/driver.png")}
          style={{ height: 56, width: 56, borderRadius: 28 }}
        />
        <View
          style={{
            marginLeft: 8,
            paddingVertical: 7,
            flex: 1,
            justifyContent: "space-between",
          }}
        >
          <PrimaryText style={{ fontSize: 16 }}>{profile.name}</PrimaryText>
          <SecondaryText style={{ fontSize: 12, color: "#333333" }}>
            Subscription is {profile.isActive ? "active" : "inactive"}
          </SecondaryText>
        </View>
      </View>
      <LevelCard profile={profile} />
    </Card>
  );
};

const ProfileButton = ({ title, onPress }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        borderBottomWidth: 1,
        borderColor: "#E8EAED",
        paddingVertical: 16,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <PrimaryText style={{ fontSize: 14, color: "#333333" }}>
        {title}
      </PrimaryText>
      <MaterialCommunityIcons name="chevron-right" size={30} color="#BFC2C9" />
    </TouchableOpacity>
  );
};
const ProfileButtons = ({ order }) => {
  return (
    <Card
      style={{
        marginTop: 16,
        paddingBottom: 0,
        paddingTop: 0,
      }}
    >
      <ProfileButton title="My company" onPress={{}} />
      <ProfileButton title="My vehicles" onPress={{}} />
      <ProfileButton title="Driver license" onPress={{}} />
      <ProfileButton title="Account" onPress={{}} />
      <ProfileButton title="About" onPress={{}} />
    </Card>
  );
};
export default function ProfileScreen() {
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
        <ProfileHeader profile={profile} />
        <ProfileButtons order={profile} />
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
