import React from "react";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Provider } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import HomeScreen from "./src/screens/HomeScreen";
import GifViewer from "./src/screens/GifViewer";
import GifsList from "./src/components/GifsList";
// eslint-disable-next-line import/no-named-as-default
import rootReducer from "./src/state/reducers/index";

const middlewares = [thunk];
const store = createStore(rootReducer, {}, applyMiddleware(...middlewares));
const Stack = createStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <NavigationContainer>
          <Stack.Navigator>
            {/* <Stack.Screen
              name="Intro"
              component={IntroScreen}
              options={{ title: "" }}
            /> */}
            <Stack.Screen
              name="Home"
              component={HomeScreen}
              options={{ title: "Search Giphy", headerShown: false }}
            />
            <Stack.Screen
              name="GifsList"
              component={GifsList}
              options={{ title: "Search Giphy", headerShown: false }}
            />
            <Stack.Screen name="GifViewer" component={GifViewer} options={{}} />
            {/* <Stack.Screen
              name="CurrencyList"
              component={CurrencySelector}
              options={{ title: "Choose Currency" }}
            /> */}
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    </Provider>
  );
}
