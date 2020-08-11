import React from 'react'
import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native'
import {PalettePreview} from '../components'
import {COLOR_PALETTES} from '../utils'

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
