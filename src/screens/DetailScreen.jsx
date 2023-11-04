import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
} from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";

const DetailScreen = ({ navigation, route }) => {
  const [data, setData] = React.useState([]);
  const getData = async () => {
    try {
      const dataRoute = await route.params?.data;
      const idRoute = await route.params?.id;
      const dataWithId = dataRoute.find((item) => item.id === idRoute);
      setData(dataWithId);
    } catch (error) {
      console.error(error);
    }
  };
  React.useEffect(() => {
    getData();
  }, []);

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

  const ItemData = ({ item }) => {
    return (
      <View style={styles.item}>
        <View style={{ flexDirection: "row", width: "100%" }}>
          <View
            style={{
              backgroundColor: "gray",
              flex: 1,
              borderRadius: 6,
            }}
          ></View>
          <View style={{ flex: 4, padding: 5 }}>
            <Text style={styles.subtitle}>{item.drink}</Text>
            <View
              style={{
                flexDirection: "row",
                alignSelf: "flex-end",
              }}
            >
              <AntDesign
                name="minuscircle"
                color={"#1DD75B"}
                size={20}
                onPress={() => {}}
              />
              <Text style={[styles.subtitle, { marginHorizontal: 10 }]}>
                {item.quantity}
              </Text>
              <AntDesign
                name="pluscircle"
                color={"#1DD75B"}
                size={20}
                onPress={() => {}}
              />
            </View>
            <Text>${item.price}</Text>
          </View>
        </View>
      </View>
    );
  };
  return (
    <View style={styles.background}>
      <Header />
      <View style={{ flex: 1, padding: 12 }}>
        <FlatList
          style={{ flex: 1 }}
          data={data.details}
          keyExtractor={(item) => item.drink}
          renderItem={({ item }) => <ItemData item={item} />}
        ></FlatList>
        <TouchableOpacity
          style={styles.btnStyle}
          onPress={() => navigation.push("Order", { data })}
        >
          <Text style={styles.btnText}>GO TO CART</Text>
        </TouchableOpacity>
      </View>
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
