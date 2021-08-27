import React, { useRef, useState, useEffect } from "react";
import { HomeBG, TrivialIcon } from "./HomeScreen.styles";
import { Animated } from "react-native";

export class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.animation = new Animated.Value(0);
  }

  componentDidMount() {
    Animated.loop(
      Animated.timing(this.animation, {toValue: 1, duration: 2000})
    ).start();    
  }
  render() {
    const rotation = this.animation.interpolate({
      inputRange: [0, 1],
      outputRange: ["0deg", "360deg"],
    });

    return (
      <HomeBG>
        <Animated.View style={{ transform: [{ rotate: rotation }] }}>
          <TrivialIcon source={require("../../../assets/trivial.png")} />
        </Animated.View>
      </HomeBG>
    );
  }
}
