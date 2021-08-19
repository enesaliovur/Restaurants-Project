import * as React from "react";
import { View, Text } from "react-native";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { SearchScreen } from "./src/screens/SearchScreen";
import { ResultShowScreen } from "./src/screens/ResultShowScreen";


const Stack = createStackNavigator();

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: "white",
  },
};

function App() {
  return (
    <NavigationContainer theme={MyTheme}>
      <Stack.Navigator>
        <Stack.Screen
          name="Search"
          component={SearchScreen}
          options={{ title: "Bussiness Search",   headerTitleAlign: "center", }}
        />
        <Stack.Screen
          name="ResultShow"
          component={ResultShowScreen}
          options={{ title: "Bussiness Search",   headerTitleAlign: "center", }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
