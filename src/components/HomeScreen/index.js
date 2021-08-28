import React from "react";
import { HomeBG, TrivialIcon, HomeTitle } from "./HomeScreen.styles";
import { Animated } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

export class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.animation = new Animated.Value(0);
    this.rotation = this.animation.interpolate({
      inputRange: [0, 1],
      outputRange: ["0deg", "360deg"],
    });
  }

  componentDidMount() {
    Animated.loop(
      Animated.timing(this.animation, {
        toValue: 1,
        duration: 2500,
        useNativeDriver: true,
      })
    ).start();
  }

  onPressHandler = () => {
    const { navigation } = this.props;
    return navigation.navigate("EnterName");
  };

  render() {

    return (
      <HomeBG>
        <HomeTitle>¡Toca para empezar!</HomeTitle>
        <TouchableOpacity onPress={this.onPressHandler}>
          <Animated.View
            style={{ transform: [{ rotate: this.rotation }], borderRadius: 50 }}
          >
            <TrivialIcon source={require("../../../assets/trivial.png")} />
          </Animated.View>
        </TouchableOpacity>
      </HomeBG>
    );
  }
}
