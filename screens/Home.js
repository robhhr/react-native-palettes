import React from 'react'
import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native'
import {PalettePreview} from '../components'

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

const ORANGE_CREME = [
  {paletteName: 'Vanilla', colors: '#fdf2b8'},
  {paletteName: 'Orange', colors: '#e88200'},
  {paletteName: 'Burnt Orange', colors: '#cb2800'},
  {paletteName: 'Coffee', colors: '#34262b'},
]

const WILD_JUNGLE = [
  {paletteName: 'Royal Pink', colors: '#eabaac'},
  {paletteName: 'Wild Orange', colors: '#be3400'},
  {paletteName: 'Dark Blue', colors: '#020d22'},
  {paletteName: 'Jungle Green', colors: '#015045'},
]

const SUMMER_TONES = [
  {paletteName: 'Creme', colors: '#fff8d8'},
  {paletteName: 'Crystal Blue', colors: '#6db9d5'},
  {paletteName: 'Royal Blue', colors: '#072e74'},
  {paletteName: 'Yellow Mustard', colors: '#a4c200'},
]

const DISCORD_COLORS = [
  {paletteName: 'Digital Purple', colors: '#7289da'},
  {paletteName: 'White', colors: '#ffffff'},
  {paletteName: 'Saturn Pink', colors: '#99aab5'},
  {paletteName: 'Dark Coffee', colors: '#2c2f33'},
  {paletteName: 'Real Oak', colors: '#23272a'},
]

const COLOR_PALETTES = [
  {paletteName: 'Solarized', colors: SOLARIZED_COLORS},
  {paletteName: 'Orange Creme', colors: ORANGE_CREME},
  {paletteName: 'Wild Jungle', colors: WILD_JUNGLE},
  {paletteName: 'Summer Tones', colors: SUMMER_TONES},
  {paletteName: 'Discord', colors: DISCORD_COLORS},
]

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 15,
  },
})

const Home = ({navigation}) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={COLOR_PALETTES}
        keyExtractor={item => item.paletteName}
        renderItem={({item}) => (
          <PalettePreview
            handlePress={() => {
              navigation.navigate('Color Palette', item)
            }}
            colorPalette={item}
          />
        )}
      />
    </View>
  )
}

export {Home}
