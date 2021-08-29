import React from "react";
import {
  Card,
  CardHeader,
  HeaderText,
  QuestionCard,
  QuestionText,
} from "./Questions.styles";
import { TouchableOpacity, Vibration } from "react-native";

export const Questions = ({ singleQuestion }) => {
  console.log("Question en si", singleQuestion);
  const { category, question, incorrect_answers, correct_answer } =
    singleQuestion;
  const answers = incorrect_answers.slice();
  answers.push(correct_answer);

  const [gamerAnswer, setGamerAnswer] = React.useState(null);

  const randomAnswers = (answersArray) => {
    let arrayLength = answersArray.length;
    if (arrayLength === 0) return false;

    while (--arrayLength) {
      const j = Math.floor(Math.random() * (arrayLength + 1));
      const tempi = answersArray[arrayLength];
      const tempj = answersArray[j];
      answersArray[arrayLength] = tempj;
      answersArray[j] = tempi;
    }

    return answersArray;
  };

  const CategoryFilter = () => {
    if (category.includes(":")) {
      return category.split(":").slice(0, 1).toString();
    } else if (category.includes(" ")) {
      return category.split(" ").slice(0, 1).toString();
    } else if (category.includes("&")) {
      return category.split("&").slice(0, 1).toString();
    } else {
      return category;
    }
  };

  const answerChecker = (selectedAnswer) => {
    setGamerAnswer(selectedAnswer === correct_answer ? true : false);
  };

  const onPressHandler = (targetAnswer) => {
    answerChecker(targetAnswer);
    Vibration.vibrate(300);
  };

  console.log(gamerAnswer);

  return (
    <Card>
      <CardHeader category={CategoryFilter()}>
        <HeaderText>{CategoryFilter()}</HeaderText>
      </CardHeader>
      <QuestionCard category={CategoryFilter()}>
        <QuestionText>{question}</QuestionText>
      </QuestionCard>
      {randomAnswers(answers).map((answer, idx) => {
        return (
          <TouchableOpacity onPress={() => onPressHandler(answer)} key={idx}>
            <QuestionCard category={CategoryFilter()}>
              <QuestionText>{answer}</QuestionText>
            </QuestionCard>
          </TouchableOpacity>
        );
      })}
    </Card>
  );
};
