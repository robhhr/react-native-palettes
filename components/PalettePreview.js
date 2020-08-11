import React from 'react'
import {
  FlatList,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  palette: {
    alignItems: 'center',
    height: 35,
    width: 35,
    marginVertical: 2.5,
    marginHorizontal: 3,
  },
  paletteName: {
    paddingVertical: 5,
    fontSize: 17,
    fontWeight: Platform.OS === 'ios' ? '400' : 'bold',
  },
  colorText: {
    paddingLeft: 5,
  },
})

const PalettePreview = ({colorPalette, handlePress}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={handlePress}>
      <Text style={styles.paletteName}>{colorPalette.paletteName}</Text>
      <FlatList
        horizontal={true}
        data={colorPalette.colors.slice(0, 5)}
        keyExtractor={item => item.colors}
        renderItem={({item}) => (
          <View style={[{backgroundColor: item.colors}, styles.palette]}></View>
        )}
      />
    </TouchableOpacity>
  )
}

export {PalettePreview}
