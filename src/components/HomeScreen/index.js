import React from "react";
import { HomeBG, TrivialIcon, HomeTitle } from "./HomeScreen.styles";
import { Animated } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

export const HomeScreen = ({ navigation }) => {
  const animation = new Animated.Value(0);
  const rotation = animation.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "360deg"],
  });

  React.useEffect(() => {
    Animated.loop(
      Animated.timing(animation, {
        toValue: 1,
        duration: 2500,
        useNativeDriver: true,
      })
    ).start();
  });

  onPressHandler = () => {
    return navigation.navigate("EnterName");
  };

  return (
    <HomeBG>
      <HomeTitle>¡Toca para empezar!</HomeTitle>
      <TouchableOpacity onPress={onPressHandler}>
        <Animated.View
          style={{ transform: [{ rotate: rotation }], borderRadius: 50 }}
        >
          <TrivialIcon source={require("../../../assets/trivial.png")} />
        </Animated.View>
      </TouchableOpacity>
    </HomeBG>
  );
};
