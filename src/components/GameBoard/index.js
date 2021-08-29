import React from "react";

import { GameRoulette, GBView, GBColumn } from "./GameBoard.styles";
import { Questions } from "..";
import { Animated, TouchableOpacity, Text } from "react-native";

import ContentService from "../../service";

export const GameBoard = ({ navigation, route }) => {
  const gamerName = route.params.gamer;

  const QuestionsService = new ContentService();
  const [questions, setQuestions] = React.useState([]);
  const [signleQuestion, setSingleQuestion] = React.useState(null);
  const selectedQuestions = [];

  React.useLayoutEffect(() => {
    navigation.setOptions({ title: `Bienvenide, ${gamerName || "Anonymous"}` });
  }, [navigation, gamerName]);

  React.useEffect(() => {
    QuestionsService.getAll()
      .then((response) => {
        setQuestions(response.data.results);
      })
      .catch((error) => console.log(error));
  }, [questions.length]);
  console.log("questions", questions);

  const selectRandomQuestion = () => {
    const random = Math.floor(Math.random() * questions.length);
    const selectedQuestion = questions[random];
    selectedQuestions.push(selectedQuestion);
    setSingleQuestion(selectedQuestion);
  };

  return (
    <GBView>
      <GBColumn>
        <TouchableOpacity onPress={selectRandomQuestion}>
          <Animated.View>
            <GameRoulette
              source={require("../../../assets/casino-roulette.png")}
            />
          </Animated.View>
        </TouchableOpacity>
        {signleQuestion ? (
          <Questions singleQuestion={signleQuestion} />
        ) : (
          <Text style={{ color: "red", fontSize: 20 }}>
            Toca la ruleta para comenzar
          </Text>
        )}
      </GBColumn>
    </GBView>
  );
};
