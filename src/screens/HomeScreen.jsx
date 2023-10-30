import {
  StyleSheet,
  Text,
  View,
  FlatList,
  ActivityIndicator,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";

const HomeScreen = ({ navigation, route }) => {
  const [isLoading, setLoading] = React.useState(true);
  const [data, setData] = React.useState([]);

  const getShops = async () => {
    try {
      const response = await fetch(
        "https://653f42fc9e8bd3be29e020f0.mockapi.io/shops"
      );
      const json = await response.json();
      setData(json);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  React.useEffect(() => {
    getShops();
  }, []);

  const Header = () => {
    return (
      <View style={styles.header}>
        <AntDesign
          name="arrowleft"
          size={25}
          onPress={() => navigation.goBack()}
        ></AntDesign>
        <Text style={styles.title}>Shop Near Me</Text>
        <AntDesign name="search1" size={25} color={"#1DD75B"}></AntDesign>
      </View>
    );
  };

  const ItemData = ({ name, address, image }) => {
    return (
      <TouchableOpacity
        style={styles.item}
        onPress={() => navigation.push("Details")}
      >
        <Image
          source={image}
          style={{ height: 120, width: "100%", borderRadius: 6 }}
        ></Image>
        <View style={{ padding: 8 }}>
          <View style={{ flexDirection: "row" }}>
            <Text>Accepting Orders</Text>
            <Text>5-10 minutes</Text>
          </View>
          <Text style={styles.subtitle}>{name}</Text>
          <Text style={{ color: "gray" }}>{address}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.background}>
      <Header />
      <View style={{ flex: 1, padding: 12 }}>
        {isLoading ? (
          <ActivityIndicator />
        ) : (
          <FlatList
            data={data}
            keyExtractor={({ id }) => id}
            renderItem={({ item }) => (
              <ItemData
                name={item.name}
                address={item.address}
                image={item.image}
              ></ItemData>
            )}
          />
        )}
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  background: { flex: 1 },
  header: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 24,
    alignItems: "center",
  },
  margin: {
    margin: 14,
  },
  item: {
    borderRadius: 6,
    margin: 8,
    alignItems: "flex-start",
    backgroundColor: "white",
  },
  subtitle: {
    fontSize: 16,
    fontWeight: 700,
  },
  title: {
    fontSize: 24,
    fontWeight: 700,
  },
  searchBar: {
    marginTop: 8,
    borderRadius: 3,
  },
  textInputOutlineStyle: {
    colors: {
      primary: "#F1B000",
      underlineColor: "transparent",
    },
  },
  filter: {
    paddingVertical: 8,
    color: "#0C0606",
    fontSize: 14,
    fontWeight: 700,
  },
});
