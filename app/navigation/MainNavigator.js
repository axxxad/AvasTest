import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import routes from "./routes";
import HomeScreen from "../screens/HomeScreen";
import TaxiScreen from "../screens/TaxiScreen";
import ProfileScreen from "../screens/ProfileScreen";
import LoyaltyScreen from "../screens/LoyaltyScreen";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import BackButton from "../components/BackButton";

const Stack = createStackNavigator();

function MainNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerBackTitleVisible: false,
        headerStyle: {
          shadowOpacity: 0,
          elevation: 0,
        },
        headerBackImage: () => <BackButton />,
      }}
    >
      <Stack.Screen name={routes.HOME} component={HomeScreen} />
      <Stack.Screen name={routes.TAXI} component={TaxiScreen} />
      <Stack.Screen name={routes.PROFILE} component={ProfileScreen} />
      <Stack.Screen name={routes.LOYALTY} component={LoyaltyScreen} />
    </Stack.Navigator>
  );
}

export default MainNavigator;
