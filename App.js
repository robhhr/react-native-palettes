import 'react-native-gesture-handler'
import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import {Home, ColorPalette} from './screens'
import {ColorPaletteModal} from './components'

const RootStack = createStackNavigator()
const MainStack = createStackNavigator()

const MainStackScreen = () => {
  return (
    <MainStack.Navigator>
      <MainStack.Screen name="Home" component={Home} />
      <MainStack.Screen
        name="Color Palette"
        component={ColorPalette}
        options={({route}) => ({title: route.params.paletteName})}
      />
    </MainStack.Navigator>
  )
}

const App = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator mode="modal">
        <RootStack.Screen
          name="Main"
          component={MainStackScreen}
          options={{headerShown: false}}
        />
        <RootStack.Screen
          name="New Color Palette"
          component={ColorPaletteModal}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  )
}

export default App
