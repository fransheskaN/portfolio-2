import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import React, { useState } from "react";
import { styles } from "../App";
import { Button } from "react-native-elements";
import { Result } from "../Components/Result";
// result screen displys total count
export default function ResultScreen({ navigation, route }) {
  return (
    <View style={styles.container}>
      <p>Thanks for playing</p>
      <Result score={route.params.paramKey}></Result>

      <Button
        onPress={() => navigation.navigate("Home")}
        title="Start Over"
      ></Button>
      <StatusBar style="auto" />
    </View>
  );
}
