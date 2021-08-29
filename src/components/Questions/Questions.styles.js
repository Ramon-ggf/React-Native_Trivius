import { createNavigatorFactory } from "@react-navigation/native";
import styled from "styled-components/native";

const colorPicker = (category) => {
  console.log("colorpicker", category);
  switch (category) {
    case "Entertainment":
      return "#942e94";
    case "Geography":
      return "#5bc7c5";
    case "General":
      return "#aba89d";
    case "History":
      return "#634f0e";
    case "Sports":
      return "#31668f";
    case "Vehicles":
      return "#8f6e31";
    case "Politics":
      return "#e81531";
    case "Science":
      return "#39b345";
    case "Celebrities":
      return "#353630";
    case "Mythology":
      return "#d6d925";
    default:
      return "#f7f5f7";
  }
};

export const Card = styled.View`
  width: 90%;
  display: flex;
  align-items: center;
  background-color: red;
`;
Card.displayName = "Card";

export const CardHeader = styled.View`
  border-color: ${(props) => colorPicker(props.category)};
  border-width: 2;
  border-radius: 35;
  width: 100%;
  background-color: ${(props) => colorPicker(props.category)};
`;
CardHeader.displayName = "CardHeader";

export const HeaderIcon = styled.Image`
  width: 20;
  height: 20;
  border-radius: 30;
`;
HeaderIcon.displayName = "HeaderIcon";

export const HeaderText = styled.Text`
  font-family: sans-serif;
  text-align: center;
  font-size: 20;
`;

export const QuestionCard = styled(CardHeader)`
  width: 95%;
  margin-top: 5;
  background-color: transparent;
`;

export const QuestionText = styled(HeaderText)`
  margin: 3%;
  background-color: transparent;
`;
