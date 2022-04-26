import * as React from "react";
import { View } from "react-native";
import { Text } from "react-native-elements";
import { Picker } from "@react-native-picker/picker";
// quiz component brings in parameters needed to display & have quiz count increment 
export default function MultipleChoice({
  setScore,
  setAnswerKeys,
  answerKeys,
  index,
  options,
}) {
  return (
    <View>
      <Text>{options.label}</Text>
      <Picker
        key={index}
        selectedValue={answerKeys[index]}
        onValueChange={(itemValue) =>
          setAnswerKeys((prevValue) => {
            // [undefined, undefined]
            // First question -- that's the index we want to change
            prevValue[index] = itemValue;
            if (itemValue !== undefined) {
              if (options.correct === itemValue) {
                setScore((score) => score + 1);
              } else {
                setScore((score) => score - 1);
              }
            }
            return [...prevValue];
          })
        }
      >
        {options.map((option, index, options) => (
          <Picker.Item key={index} label={option.label} value={option.key} />
        ))}
      </Picker>
    </View>
  );
}
