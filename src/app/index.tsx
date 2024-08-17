import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import * as React from 'react';
import Home from '@/screens/Home';
import Game from '@/screens/Game';

const Stack = createNativeStackNavigator();

function App() {
    return (
      <NavigationContainer independent={true}>
        <Stack.Navigator initialRouteName="ListProducts" screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Game" component={Game} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
  
  export default App;