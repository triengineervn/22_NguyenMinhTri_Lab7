import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
} from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";

const OrderScreen = ({ navigation, route }) => {
  const Header = () => {
    return (
      <View style={styles.header}>
        <AntDesign
          name="arrowleft"
          size={25}
          style={{ marginHorizontal: 24 }}
          onPress={() => navigation.goBack()}
        ></AntDesign>
        <Text style={styles.title}>Your Orders</Text>
        <AntDesign
          name="search1"
          size={25}
          color={"#1DD75B"}
          style={{ marginHorizontal: 24 }}
        ></AntDesign>
      </View>
    );
  };
  return (
    <View style={styles.background}>
      <Header></Header>
      <View
        style={{
          borderRadius: 6,
          backgroundColor: "#00BDD6",
          height: 100,
          marginHorizontal: 24,
        }}
      >
        <Text style={[styles.subtitle, { color: "white", padding: 18 }]}>
          CAFE DELIVERY
        </Text>
        <Text style={[styles.subtitle, { color: "white", paddingLeft: 18 }]}>
          Order #18
        </Text>
      </View>
      <View
        style={{
          borderRadius: 6,
          backgroundColor: "#8353E2",
          height: 100,
          marginHorizontal: 24,
          marginTop: 8,
        }}
      >
        <Text style={[styles.subtitle, { color: "white", padding: 18 }]}>
          CAFE
        </Text>
        <Text style={[styles.subtitle, { color: "white", paddingLeft: 18 }]}>
          Order #18
        </Text>
      </View>
      <TouchableOpacity style={styles.btnStyle} onPress={null}>
        <Text style={styles.btnText}>PAY NOW</Text>
      </TouchableOpacity>
    </View>
  );
};

export default OrderScreen;

const styles = StyleSheet.create({
  background: { flex: 1, backgroundColor: "white" },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 24,
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: 700,
  },
  item: {
    borderRadius: 6,
    margin: 8,
    alignItems: "flex-start",
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "gray",
  },
  subtitle: {
    fontSize: 16,
    fontWeight: 700,
  },
  btnStyle: {
    marginTop: 200,
    margin: 14,
    marginHorizontal: 40,
    padding: 14,
    backgroundColor: "#EFB034",
    borderRadius: 6,
    alignItems: "center",
  },
  btnText: {
    color: "white",
    fontSize: 14,
    fontWeight: 400,
  },
});
