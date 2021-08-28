import styled from "styled-components/native";

export const EnterNameBG = styled.View`
  background-color: #0388fc;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
EnterNameBG.displayName = "EnterNameBG";

export const NameInput = styled.TextInput`
  height: 50;
  width: 250;
  margin: 10%;
  padding-top: 1%;
  padding-bottom: 1%;
  padding-left: 3%;
  border-width: 2;
  border-radius: 30;
  border-color: #53575c;
  background-color: rgb(87, 174, 250);
  text-align: center;
`;
NameInput.displayName = "NameInput";

export const EnterNameButt = styled.TouchableOpacity`
  height: 50;
  width: 250;
  margin: 10%;
  padding-top: 1%;
  padding-bottom: 1%;
  padding-left: 3%;
  border-width: 2;
  border-radius: 30;
  border-color: #0328fc;
  background-color: #0362fc;
  align-items: center;
  justify-content: center;
`;
EnterNameButt.displayName = "EnterNameButton";

export const EnterNameText = styled.Text`
  font-family: sans-serif;
  font-weight: bold;
  font-size: 30;
  text-align: center;
  width: 300;
  margin-bottom: 10;
`;
EnterNameText.displayName = "EnterNameText";

export const ButtInnerText = styled.Text`
  font-size: 20;
  font-weight: 800;
  color: white;
`;
ButtInnerText.displayName = "ButtInnerText";

export const EnterNameIcon = styled.Image`
  width: 50;
  height: 50;
`;
EnterNameIcon.displayName = "EnterNameIcon";
