import { StyleSheet, Text, View } from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { NavigationContainer } from "@react-navigation/native";
import MonthScreen from "./screen/MonthScreen";
import StatScreen from "./screen/StatScreen";
import "@natscale/react-calendar/dist/main.css";
import DDTopTabNavigation from "./components/DDTopTabNavigation";
import "./global.css";
import DetailScreen from "./screen/DetailScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useFonts } from "expo-font";
import NoteScreen from "./screen/์NoteScreen";
import WriteScreen from "./screen/WriteScreen";
import Toast from 'react-native-toast-message';
export default function App() {
  const Stack = createNativeStackNavigator();

  const [fontLoaded] = useFonts({
    ThaiText: require("./assets/fonts/ThaiText.ttf"),
    DMSans: require("./assets/fonts/DMSans.ttf"),
    NotoSansThai: require("./assets/fonts/NotoSansThai.ttf"),
  });

  if (!fontLoaded) {
    return undefined;
  }

  return (
    <>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="HomeScreen"
            component={HomeTabs}
            options={{ headerShown: false, contentStyle: { backgroundColor: "white", } }}
          />
          <Stack.Screen name="DetailScreen" component={DetailScreen} />
          <Stack.Screen name="NoteScreen" component={NoteScreen} options={{ headerShown: false }} />
          <Stack.Screen name="WriteScreen" component={WriteScreen} options={{ headerShown: false }} />
        </Stack.Navigator>
      </NavigationContainer>
      <Toast />
    </>
  );
}

function HomeTabs() {
  const Tab = createMaterialTopTabNavigator();
  return (
    <Tab.Navigator
      screenOptions={{ swipeEnabled: false }}
      tabBar={(props) => <DDTopTabNavigation {...props} />}
    >
      <Tab.Screen name="Month" component={MonthScreen} />
      <Tab.Screen name="Stat" component={StatScreen} />
    </Tab.Navigator>
  );
}
