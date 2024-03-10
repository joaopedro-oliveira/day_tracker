// App.js
import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { NativeBaseProvider } from 'native-base';
import FirstScreen from './register/FirstScreen';
import SecondScreen from './register/SecondScreen';
import ThirdScreen from './register/ThirdScreen';

const Stack = createStackNavigator();

const App: React.FC = () => {
  return (
    <NativeBaseProvider>
      <NavigationContainer independent={true}>
        <Stack.Navigator  initialRouteName="FirstScreen">
          <Stack.Screen name="FirstScreen" component={FirstScreen} options={{ headerShown: false }} />
          <Stack.Screen name="SecondScreen" component={SecondScreen} options={{ headerShown: false }} />
          <Stack.Screen name="ThirdScreen" component={ThirdScreen} options={{ headerShown: false }} />
        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
};

export default App;
