import { View } from "react-native";
import { Text } from "react-native-elements";
import { styles } from "../../App";
// result component shows score and styles Text
export let Result = ({ score }) => {
  return (
    <View >
      <Text style={styles.white}>Your score: {score}</Text>
    </View>
  );
};
