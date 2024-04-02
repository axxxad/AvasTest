import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import routes from "./routes";
import HomeScreen from "../screens/HomeScreen";
import TaxiScreen from "../screens/TaxiScreen";
import ProfileScreen from "../screens/ProfileScreen";
import LoyaltyScreen from "../screens/LoyaltyScreen";

const Stack = createStackNavigator();

function MainNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name={routes.HOME} component={HomeScreen} />
      <Stack.Screen name={routes.TAXI} component={TaxiScreen} />
      <Stack.Screen name={routes.PROFILE} component={ProfileScreen} />
      <Stack.Screen name={routes.LOYALTY} component={LoyaltyScreen} />
    </Stack.Navigator>
  );
}

export default MainNavigator;
