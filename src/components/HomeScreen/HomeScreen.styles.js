import styled from "styled-components/native";
import { keyframes } from "styled-components/native";
import { Animated } from "react-native";

export const HomeBG = styled.View`
  background-color: #fcba03;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

HomeBG.displayName = "HomeBG";

export const TrivialIcon = styled.Image`
  width: 300;
  height: 300;
`;

TrivialIcon.displayName = "TrivialIcon";
