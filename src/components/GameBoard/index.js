import React from "react";

import { GameRoulette } from "./GameBoard.styles";

export const GameBoard = ({ route }) => {
  console.log(route.params);
  return (
    <GameRoulette source={require("../../../assets/casino-roulette.png")} />
  );
};
