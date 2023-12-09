import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { ImageBackground } from "react-native";
import { FlatList } from "react-native";
import LottieView from "lottie-react-native";
import { Entypo } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { ScrollView } from "react-native-gesture-handler";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

const ServicesData = [
  {
    id: "1",
    title: "Oil Change",
    description: "Regular maintenance for optimal engine performance.",
  },
  {
    id: "2",
    title: "Brake Inspection",
    description: "Ensure your brakes are working safely and effectively.",
  },
  {
    id: "3",
    title: "Battery Replacement",
    description: "Get a new battery to avoid unexpected breakdowns.",
  },
  {
    id: "4",
    title: "Tire Rotation",
    description: "Extend the life of your tires and improve fuel efficiency.",
  },
  {
    id: "5",
    title: "Engine Diagnostics",
    description: "Identify and fix engine issues using advanced diagnostics.",
  },
];
const Home = () => {
  const navigation = useNavigation();
  const renderItem = ({ item }) => (
    <View style={styles.serviceItem}>
      <Text style={styles.serviceTitle}>{item.title}</Text>
      <Text style={styles.serviceDescription}>{item.description}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/bg.jpeg")}
        style={{ width: "100%", height: 200, resizeMode: "cover" }}
      >
        <View style={styles.overlay}>
          <View style={styles.container2}>
            <Text style={styles.text}>
              We are Here to Save Your Needs!
            </Text>
            <Text style={{ color: "#ededed", marginTop: 5 }}>
              We are a Button Away
            </Text>
          </View>
        </View>
      </ImageBackground>
      <ScrollView>
        <View style={{ paddingStart: 10 }}>
          <Text style={styles.heading}>Truck Roadside Assistance</Text>
          <FlatList
            horizontal={true}
            data={ServicesData}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
          />
        </View>

        <View style={{ paddingStart: 10, marginVertical: 10 }}>
          <View style={{ marginTop: 20 }}>
            <View style={styles.step}>
              <Entypo name="location" size={24} color="#292f36" />
              <Text style={styles.textInStep}>Do you have a break down</Text>
            </View>
            <Text style={styles.descInStep}>
              When you have a break and you can get to locate any quick help
              just use our{" "}
              <Text style={{ color: "#4ecdc4", fontWeight: "bold" }}>
                AutoMech Locator.
              </Text>
            </Text>
          </View>
          <View style={{ marginTop: 20 }}>
            <View style={styles.step}>
              <MaterialCommunityIcons
                name="cursor-default-click"
                size={24}
                color="#292f36"
              />
              <Text style={styles.textInStep}>Click on Locate</Text>
            </View>
            <Text style={styles.descInStep}>
              click on the locate button down below.
            </Text>
          </View>
          <View style={{ marginTop: 20 }}>
            <View style={styles.step}>
              <Entypo name="emoji-happy" size={24} color="#292f36" />
              <Text style={styles.textInStep}>Help is on the way</Text>
            </View>
            <Text style={styles.descInStep}>
              Sit back cause the system will automatically find the nearest
              autoMech and send them your location, and they will be on their
              way to give you a quick fix.
            </Text>
          </View>
        </View>

        <View
          style={{
            width: "100%",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <TouchableOpacity
            style={{
              backgroundColor: "#292f36",
              borderRadius: 7,
              width: "90%",
              height: 50,
              alignItems: "center",
              justifyContent: "center",
              marginTop: 20,
              marginBottom: 25,
            }}
            onPress={() => navigation.navigate("Locate AutoMech")}
          >
            <Text
              style={{
                color: "#fff",
                fontSize: 16,
              }}
            >
              Locate AutoMechanic
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.6)", // Semi-transparent black background
  },
  container2: {
    flex: 1,
    justifyContent: "center",
    // alignItems: "center",
    padding: 20,
  },
  text: {
    fontSize: 24,
    color: "white",
    fontWeight: "bold",
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    marginStart: 10,
    marginTop: 10,
    color: "#292f36",
  },
  serviceItem: {
    backgroundColor: "white",
    borderRadius: 10,
    elevation: 4,
    padding: 20,
    marginEnd: 15,
    width: 180,
    height: 150,
    marginVertical: 10,
  },
  serviceTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
    color: "#4ecdc4",
  },
  serviceDescription: {
    fontSize: 14,
    color: "#292f36",
  },
  step: {
    flexDirection: "row",
    alignItems: "center",
  },
  textInStep: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#4ecdc4",
    marginStart: 5,
  },
  descInStep: {
    fontSize: 14,
    fontWeight: "300",
    color: "#292f36",
    marginStart: 30,
  },
});
