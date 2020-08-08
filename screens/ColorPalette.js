import React from 'react'
import {FlatList, StyleSheet, Text} from 'react-native'
import {ColorBox} from '../components'

const ColorPalette = ({route}) => {
  const {paletteName} = route.params
  const {colors} = route.params
  return (
    <>
      <FlatList
        style={styles.container}
        data={colors}
        keyExtractor={item => item.colorName}
        renderItem={({item}) => (
          <ColorBox colorName={item.colorName} hexColor={item.hexColor} />
        )}
        ListHeaderComponent={<Text>{paletteName}</Text>}
      />
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
    paddingTop: 40,
  },
})

export {ColorPalette}
