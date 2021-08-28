import styled from "styled-components/native";

export const HomeBG = styled.View`
  background-color: #fcba03;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;
HomeBG.displayName = "HomeBG";

export const HomeTitle = styled.Text`
  font-family: sans-serif;
  font-size: 30;
  font-weight: bold;
`;
HomeTitle.displayName = "HomeTitle";

export const TrivialIcon = styled.Image`
  width: 150;
  height: 150;
`;
TrivialIcon.displayName = "TrivialIcon";
