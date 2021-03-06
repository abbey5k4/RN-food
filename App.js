import React from "react";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SearchScreen from "./src/screens/SearchScreen";
import ResultsScreen from "./src/screens/ResultsScreen";

const Stack = createNativeStackNavigator();

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: "rgb(255, 45, 85)",
    background: "white",
  },
};

const App = () => {
  return (
    <NavigationContainer theme={MyTheme}>
      <Stack.Navigator initialRouteName="Search">
        <Stack.Screen
          name="Search"
          component={SearchScreen}
          options={{ title: "Home" }}
        />
        <Stack.Screen
          name="Results"
          component={ResultsScreen}
          options={{ title: "Results" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
