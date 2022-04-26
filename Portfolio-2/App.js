//Option 2 : New project , 3 components
// component 1 : Shows welcome screen, input your username
// Componenr 2 : Shows quizes quizList and choices
// Component 3 : Calculates the scores and shows result
// IMPORTANT : add $ expo install @expo-google-fonts/dev expo-font

import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StyleSheet, View } from "react-native";
import HomeScreen from "./Screens/HomeScreen";
import QuizScreen from "./Screens/QuizScreen";
import ResultScreen from "./Screens/ResultScreen";
//Allows for fonts
import {
  useFonts,
  Poppins_200ExtraLight,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold,
} from "@expo-google-fonts/dev";
// Allows for screens to be viewed
const Stack = createNativeStackNavigator();
//load fonts, if fonts are not loaded, show loaded screen
export default function App() {
  let [fontsLoaded] = useFonts({
    Poppins_200ExtraLight,
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold,
  });
  if (!fontsLoaded) {
    return (
      <View>
        <h1>Loading</h1>
      </View>
    );
  } else {
    return (
      //Create navigation portal for each screen
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Quiz" component={QuizScreen} />
          <Stack.Screen name="Result" component={ResultScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
//Stylesheet
export const styles = StyleSheet.create({
  Button: {
    width: 300,
    borderWidth: 2,
    borderColor: "#F29B97",
  },
  Btn: {
    width: 300,
    backgroundColor: "#7D98A1",
  },
  container: {
    flex: 1,
    fontFamily: "Poppins_400Regular",
    backgroundColor: "#1C2321",
    alignItems: "center",
    justifyContent: "center",
    color: "#fff",
  },
  white: {
    color: "#fff",
  },
});
/////////////////////
