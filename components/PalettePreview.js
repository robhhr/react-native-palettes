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
    flexDirection: 'row',
    alignItems: 'center',
    height: 25,
    marginVertical: 2.5,
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
        data={colorPalette.colors.slice(0, 3)}
        keyExtractor={item => item.colors}
        renderItem={({item}) => (
          <View style={[{backgroundColor: item.colors}, styles.palette]}>
            <Text style={styles.colorText}>{item.paletteName}: </Text>
            <Text>{item.colors}</Text>
          </View>
        )}
      />
    </TouchableOpacity>
  )
}

export {PalettePreview}
