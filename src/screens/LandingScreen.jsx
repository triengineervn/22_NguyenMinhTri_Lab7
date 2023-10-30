import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import React from "react";
import coffee_img from "../../assets/R.jpg";
const LandingScreen = ({ navigation }) => {
  return (
    <View style={styles.background}>
      <Text style={styles.text}>Welcome to Cafe world</Text>
      <Image source={coffee_img} style={styles.img}></Image>
      <TouchableOpacity
        style={styles.btnStyle}
        onPress={() => navigation.push("Home")}
      >
        <Text style={styles.btnText}>GET STARTED</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LandingScreen;

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "space-around",
  },
  text: {
    color: "171A1F",
    fontSize: 24,
    fontWeight: 700,
    alignSelf: "center",
  },
  img: {
    height: 200,
    width: 300,
    alignSelf: "center",
  },
  btnStyle: {
    marginHorizontal: 40,
    padding: 14,
    backgroundColor: "#00BDD6",
    borderRadius: 6,
    alignItems: "center",
  },
  btnText: {
    color: "white",
    fontSize: 14,
    fontWeight: 400,
  },
});
