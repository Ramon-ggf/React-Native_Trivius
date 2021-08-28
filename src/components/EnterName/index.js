import React from "react";
import { View } from "react-native";
import {
  EnterNameBG,
  NameInput,
  EnterNameButt,
  EnterNameText,
  ButtInnerText,
  EnterNameIcon,
} from "./EnterName.styles";

export const EnterName = ({ navigation }) => {
  const [name, setName] = React.useState("");
  const onPressHandler = () => navigation.navigate("GameBoard", { gamer: name });

  return (
    <EnterNameBG>
      <EnterNameText>Introducte tu alias, por favor.</EnterNameText>
      <EnterNameIcon source={require("../../../assets/answer.png")} />
      <NameInput
        placeholder="Tu nombre aquí"
        value={name}
        onChangeText={setName}
      />
      <EnterNameButt onPress={onPressHandler}>
        <ButtInnerText>Siguiente</ButtInnerText>
      </EnterNameButt>
    </EnterNameBG>
  );
};
