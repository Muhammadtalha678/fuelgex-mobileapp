import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import React from 'react'
import LoginScreen from './src/screens/LoginScreen.jsx'
import HomeScreen from './src/screens/HomeScreen.jsx'

export default function App() {
  const Stack = createStackNavigator()
  return (
    <NavigationContainer>
      {/* Other navigators would go here */}
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
