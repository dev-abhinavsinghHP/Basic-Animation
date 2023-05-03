import React from "react";
import FadeAnimation from "./Components/FadeAnimation.js";
import Animation from "./Components/Animation.js";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AnimationDecay from "./Components/AnimationDecay.js";


const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="FirstPage">
        <Stack.Screen options={{ headerShown: false }} name="FirstPage" component={FadeAnimation} />
        <Stack.Screen name="secondPage" component={Animation} />
        <Stack.Screen name="thirdPage" component={AnimationDecay} />
      </Stack.Navigator>
    </NavigationContainer>



  )
}

export default App;