import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import { HomeScreen, EnterName, GameBoard} from "../components";

const Routing = () => {
  const Stack = createStackNavigator();
  const { Navigator, Screen } = Stack;
  
  return(
      <NavigationContainer>
          <Navigator>
              <Screen name="Home" component={HomeScreen}/>
              <Screen name="EnterName" component={EnterName} options={{title: "¿Cómo te llamas?"}}/>
              <Screen name="GameBoard" component={GameBoard} options={{title: "Vamos a jugar"}}/>
          </Navigator>
      </NavigationContainer>
  )
};

export default Routing;
