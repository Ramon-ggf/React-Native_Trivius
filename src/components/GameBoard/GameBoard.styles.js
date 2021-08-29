import styled from "styled-components/native";

export const GBView = styled.View`
  background-color: #468a58;
  height: 100%;
  width: 100%;
`;
GBView.displayName = "GBView";

export const GBColumn = styled.View`
  margin: 5%;
  height: 95%;
  background-color: #e6f0e9;
  border-radius: 30;
  display: flex;
  align-items: center;
`;
GBColumn.displayName = "GBColumn";

export const GameRoulette = styled.Image`
  width: 150;
  height: 150;
  margin-top: 20;
`;
GameRoulette.displayName = "GameRoulette";
