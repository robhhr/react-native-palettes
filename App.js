import 'react-native-gesture-handler'
import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import {Home, ColorPalette} from './screens'

const Stack = createStackNavigator()

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen
          name="Color Palette"
          component={ColorPalette}
          options={({route}) => ({title: route.params.paletteName})}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App
