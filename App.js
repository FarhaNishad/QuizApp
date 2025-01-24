import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider as PaperProvider } from 'react-native-paper';

import HomeScreen from './src/screens/HomeScreen';
import CategoriesScreen from './src/screens/CategoriesScreen';
import LevelsScreen from './src/screens/LevelsScreen';
import QuizScreen from './src/screens/QuizScreen';
import ResultScreen from './src/screens/ResultScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator 
          initialRouteName="Home"
          screenOptions={{
            headerShown: false,
            animation: 'slide_from_right'
          }}
        >
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Categories" component={CategoriesScreen} />
          <Stack.Screen name="Levels" component={LevelsScreen} />
          <Stack.Screen name="Quiz" component={QuizScreen} />
          <Stack.Screen name="Result" component={ResultScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}
