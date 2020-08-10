import React from 'react'
import {FlatList, Platform, StyleSheet, Text, View} from 'react-native'
import {ColorBox} from '../components'

const ColorPalette = ({route}) => {
  const {paletteName} = route.params
  const {colors} = route.params
  return (
    <View style={styles.container}>
      <FlatList
        style={styles.paletteContainer}
        data={colors}
        keyExtractor={item => item.paletteName}
        renderItem={({item}) => (
          <ColorBox paletteName={item.paletteName} colors={item.colors} />
        )}
        ListHeaderComponent={
          <Text style={styles.paletteName}>{paletteName}</Text>
        }
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
  paletteContainer: {
    paddingHorizontal: 15,
  },
  paletteName: {
    fontSize: 18,
    paddingTop: 25,
    paddingBottom: 10,
    fontWeight: Platform.OS === 'ios' ? '500' : 'bold',
  },
})

export {ColorPalette}
