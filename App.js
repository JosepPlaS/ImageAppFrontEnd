import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './components/pages/HomeScreen';
import ImageScreen from './components/pages/ImageScreen';
import ImageForm from './components/pages/ImageForm';
import { colors } from './components/style/Colors';
const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: colors.primaryColor },
          headerTintColor: colors.backgroundColor,
        }}
      >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Image" component={ImageScreen} />
        <Stack.Screen name="Insert/Update" component={ImageForm} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
