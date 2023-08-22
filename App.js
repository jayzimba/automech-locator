import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import Profile from "./Screens/Profile";
import NearMe from "./Screens/NearMe";
import Pending from "./Screens/Pending";
import History from "./Screens/History";
import Home from "./Screens/Home";
import { StyleSheet } from "react-native";
import LocateView from "./Screens/LocateView";

const Drawer = createDrawerNavigator();
export default function App() {
  return (
    <NavigationContainer style={styles.container}>
      <StatusBar style="auto" />
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="Profile" component={Profile} />
        <Drawer.Screen name="Near me" component={NearMe} />
        <Drawer.Screen name="Pending" component={Pending} />
        <Drawer.Screen name="History" component={History} />
        <Drawer.Screen name="Locate AutoMech" component={LocateView} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
