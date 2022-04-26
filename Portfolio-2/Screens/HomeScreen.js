import * as React from "react";
import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import { styles } from "../App";
import { Button, Input } from "react-native-elements";
import { useState } from "react";
// Home screen with welcome and input for user name then goes to quiz
export default function HomeScreen({ navigation, route }) {
  const [message, setMessage] = useState("");

  const goToMessageScreen = React.useCallback(() => {
    navigation.navigate("Quiz", { message });
  });
  return (
    <View style={styles.container}>
      <h1>Art history quiz</h1>
      <h2>Match the artist with the painting</h2>
      <p>Welcome, please put your name</p>
      <Input
        value={message}
        onChangeText={(text) => setMessage(text)}
        placeholder="Enter Name"
        containerStyle={{ width: 300 }}
      />
      <Button
        onPress={goToMessageScreen}
        title="Start"
        style={styles.Btn}
      ></Button>
      <StatusBar style="auto" />
    </View>
  );
}
