import { Button, SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import routes from "../navigation/routes";

export default function HomeScreen() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Button title="Taxi" onPress={() => navigation.navigate(routes.TAXI)} />
      <View style={{ height: 16 }} />
      <Button
        title="Profile"
        onPress={() => navigation.navigate(routes.PROFILE)}
      />
      <View style={{ height: 16 }} />
      <Button
        title="Loyalty"
        onPress={() => navigation.navigate(routes.LOYALTY)}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
