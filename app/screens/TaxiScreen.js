import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import colors from "../config/colors";
import PrimaryText from "../components/PrimaryText";
import Card from "../components/Card";
import SecondaryText from "../components/SecondaryText";

const OrderHeader = ({ order }) => {
  return (
    <Card
      style={{
        borderTopRightRadius: 0,
        borderTopLeftRadius: 0,
      }}
    >
      <Text
        style={{
          textAlign: "center",
          fontSize: 16,
          color: colors.secondaryText,
        }}
      >
        Instant Taxi order
      </Text>
      <PrimaryText
        style={{
          marginTop: 8,
          marginBottom: 16,
          textAlign: "center",
        }}
      >
        ${order.price}
      </PrimaryText>

      <View style={{ height: 210, backgroundColor: "gray" }}></View>
    </Card>
  );
};

const OrderDetail = ({ order }) => {
  return (
    <Card style={{ marginTop: 16 }}>
      {/*Distance & Time*/}
      <View style={{ flexDirection: "row", height: 43 }}>
        <View
          style={{
            flex: 1,
            justifyContent: "space-between",
            borderRightWidth: 1,
            borderColor: colors.secondaryText,
          }}
        >
          <Image source={require("../assets/car.png")} />
          <PrimaryText style={{ fontSize: 14 }}>Taxi Order</PrimaryText>
        </View>
        <View
          style={{
            flex: 1,
            justifyContent: "space-between",
            borderRightWidth: 1,
            borderColor: colors.secondaryText,
            paddingHorizontal: 16,
          }}
        >
          <SecondaryText>Time</SecondaryText>
          <PrimaryText style={{ fontSize: 14 }}>{order.time}</PrimaryText>
        </View>
        <View
          style={{
            flex: 1,
            justifyContent: "space-between",
            paddingHorizontal: 16,
          }}
        >
          <SecondaryText>Distance</SecondaryText>
          <PrimaryText style={{ fontSize: 14 }}>
            {order.distanceKm} km
          </PrimaryText>
        </View>
      </View>
      {/*Start Location*/}
      <View
        style={{
          marginTop: 16,
          flexDirection: "row",
          paddingVertical: 16,
          alignItems: "center",
        }}
      >
        <View
          style={{
            borderRadius: 8,
            borderWidth: 4,
            borderColor: "#60BC65",
            width: 16,
            height: 16,
          }}
        />
        <View style={{ marginLeft: 16 }}>
          <SecondaryText>Start address</SecondaryText>
          <Text>
            <PrimaryText style={{ fontSize: 14 }}>
              {order.startLocation.address}
            </PrimaryText>
            <SecondaryText> . {order.startLocation.time}</SecondaryText>
          </Text>
        </View>
      </View>
      {/*Finish Location*/}
      <View
        style={{
          flexDirection: "row",
          paddingVertical: 16,
          alignItems: "center",
        }}
      >
        <View
          style={{
            borderRadius: 8,
            borderWidth: 4,
            borderColor: "#333333",
            width: 16,
            height: 16,
          }}
        />
        <View style={{ marginLeft: 16 }}>
          <SecondaryText>Finish address</SecondaryText>
          <Text>
            <PrimaryText style={{ fontSize: 14 }}>
              {order.finishLocation.address}
            </PrimaryText>
            <SecondaryText> . {order.finishLocation.time}</SecondaryText>
          </Text>
        </View>
      </View>
      {/*Customer*/}
      <View
        style={{
          flexDirection: "row",
          paddingVertical: 8,
        }}
      >
        <Image
          source={require("../assets/customer.png")}
          style={{ height: 42, width: 42, borderRadius: 21 }}
        />
        <View
          style={{
            marginLeft: 8,
            paddingVertical: 2,
            flex: 1,
            justifyContent: "space-between",
          }}
        >
          <PrimaryText style={{ fontSize: 14 }}>
            {order.client.name}
          </PrimaryText>
          <SecondaryText style={{ fontSize: 12 }}>Client</SecondaryText>
        </View>
      </View>
      <TouchableOpacity style={{ height: 40, marginVertical: 16 }}>
        <PrimaryText style={{ fontSize: 14 }}>Report an issue</PrimaryText>
      </TouchableOpacity>
    </Card>
  );
};

export default function TaxiScreen() {
  const order = {
    price: "36.20",
    time: "16:30PM",
    distanceKm: 3,
    startLocation: {
      address: "San Miguel, Maldives 34",
      time: "7 min",
    },
    finishLocation: {
      address: "Lakeshir, Maldives 12",
      time: "30 min",
    },
    client: {
      name: "Anastasia",
    },
  };
  return (
    <View style={styles.container}>
      <ScrollView style={{ width: "100%" }}>
        <OrderHeader order={order} />
        <OrderDetail order={order} />
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
});
