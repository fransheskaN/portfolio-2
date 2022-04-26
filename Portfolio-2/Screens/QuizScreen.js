import * as React from "react";
import { View } from "react-native";
import { Button, CheckBox, Input, Text } from "react-native-elements";
import { styles } from "../App";
import { useCallback, useState } from "react";
import MultipleChoice from "../Components/Quiz";

// array of questions and keys
export default function QuizScreen({ navigation, route }) {
  const quizList = [
    {
      questionText: "Hint: During renaissance",
      key: "1",
      newKey: "2",
      options: [
        { label: "The Birth of Venus", correct: true, key: "1" },
        { label: "The Hay-Wain", correct: true, key: "1" },
        { label: "Bosch", correct: false, key: "2" },
        { label: "Botticelli", correct: false, key: "2" },
      ],
      answers: [
        { label: "Triptych of the Garden of earthly Delights", correct: true, key: "1" },
        { label: "Bosch", correct: true, key: "2" },
        { label: "The Birth of Venus", correct: false, key: "1" },
        { label: "The Hay-Wain", correct: false, key: "2" },
      ],
    },
    {
      questionText: "Hint: During renaissance",
      key: "2",
      newKey: "3",
      options: [
        { label: "Constable", correct: false, key: "2" },
        { label: "David", correct: true, key: "1" },
        { label: "The Birth of Venus", correct: false, key: "2" },
        { label: "The death of Marat", correct: true, key: "1" },
      ],
    },
    {
      questionText: "Hint: During renaissance",
      key: "3",
      newKey: "4",
      options: [
        { label: "The Desperate Man", correct: true, key: "1" },
        { label: "The Hay-Wain", correct: false, key: "2" },
        { label: "Courbet", correct: true, key: "1" },
        { label: "The death of Marat", correct: false, key: "2" },
      ],
    },
    {
      questionText: "Hint: During renaissance",
      key: "4",
      newKey: "5",
      options: [
        { label: "Charles I on horseback", correct: true, key: "1" },
        { label: "Dyck", correct: true, key: "1" },
        { label: "The Birth of Venus", correct: false, key: "2" },
        { label: "The Hay-Wain", correct: false, key: "2" },
      ],
    },
  ];
  // bank of useStates
  const [isChecked, setIsChecked] = useState(false);
  let [currentQuestion, setCurrentQuestion] = useState(0);
  let [result, setResult] = useState(false);
  let [score, setScore] = useState(0);
  let [answerKeys, setAnswerKeys] = useState([undefined, undefined]);
// Allows to change to next page
  let next = useCallback(() => {
    let nextQuestion = currentQuestion + 1;
    if (nextQuestion < quizList.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setResult(true);
    }
  });
// QuizScreen, shows quiz component 
  return (
    <View style={styles.container}>
      <p>Welcome {route.params.message}</p>
      <h1>Question {quizList[currentQuestion].key}</h1>
      <p>{quizList[currentQuestion].questionText}</p>
      {quizList[currentQuestion].options.map((index) => (
        <MultipleChoice
          key={index}
          answerKeys={answerKeys}
          setScore={setScore}
          setAnswerKeys={setAnswerKeys}
          index={index}
          options={quizList[currentQuestion].options}
        ></MultipleChoice>
      ))}
      <br></br>
      <Button onPress={() => next()} title="Next Question"></Button>
      <br></br>
      <Button
        onPress={() =>
          navigation.navigate("Result", {
            paramKey: score,
          })
        }
        title="See results"
      ></Button>
    </View>
  );
}
