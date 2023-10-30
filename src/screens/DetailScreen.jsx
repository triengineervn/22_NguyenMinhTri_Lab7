import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
const DetailScreen = ({ navigation, route }) => {
  const Header = () => {
    return (
      <View style={styles.header}>
        <AntDesign
          name="arrowleft"
          size={25}
          style={{ marginHorizontal: 24 }}
          onPress={() => navigation.goBack()}
        ></AntDesign>
        <Text style={styles.title}>Drinks</Text>
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
      <Header />
      <Text>DetailScreen</Text>
    </View>
  );
};

export default DetailScreen;

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
});
