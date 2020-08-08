import React from 'react'
import {Text, TouchableOpacity, View} from 'react-native'

const SOLARIZED_COLORS = [
  {paletteName: 'Base03', colors: '#002b36'},
  {paletteName: 'Base02', colors: '#073642'},
  {paletteName: 'Base01', colors: '#586e75'},
  {paletteName: 'Base00', colors: '#657b83'},
  {paletteName: 'Base0', colors: '#839496'},
  {paletteName: 'Base1', colors: '#93a1a1'},
  {paletteName: 'Base2', colors: '#eee8d5'},
  {paletteName: 'Base3', colors: '#fdf6e3'},
  {paletteName: 'Yellow', colors: '#b58900'},
  {paletteName: 'Orange', colors: '#cb4b16'},
  {paletteName: 'Red', colors: '#dc322f'},
  {paletteName: 'Magenta', colors: '#d33682'},
  {paletteName: 'Violet', colors: '#6c71c4'},
  {paletteName: 'Blue', colors: '#268bd2'},
  {paletteName: 'Cyan', colors: '#2aa198'},
  {paletteName: 'Green', colors: '#859900'},
]

const Home = ({navigation}) => {
  return (
    <View>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Color Palette', {
            paletteName: 'Solarized',
            colors: SOLARIZED_COLORS,
          })
        }}
      >
        <Text>Color Palette</Text>
      </TouchableOpacity>
    </View>
  )
}

export {Home}
