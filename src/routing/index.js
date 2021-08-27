import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import { HomeScreen } from "../components";

const Routing = () => {
  const Stack = createStackNavigator();
  const { Navigator, Screen } = Stack;
  
  return(
      <NavigationContainer>
          <Navigator>
              <Screen name="Home" component={HomeScreen}/>
          </Navigator>
      </NavigationContainer>
  )
};

export default Routing;
