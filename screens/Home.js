import React, {useEffect} from 'react'
import {
  FlatList,
  Platform,
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
} from 'react-native'
import {PalettePreview} from '../components'
import {COLOR_PALETTES} from '../utils'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 15,
  },
  button: {
    alignItems: 'center',
    alignSelf: 'center',
    backgroundColor: '#00b200',
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 15,
    marginVertical: 10,
  },
  buttonText: {
    textTransform: 'uppercase',
    color: '#fff',
    fontWeight: Platform.OS === 'ios' ? '500' : 'bold',
  },
})

const Home = ({navigation, route}) => {
  const newPalette = route.params ? route.params.newPalette : undefined

  useEffect(() => {
    if (newPalette) {
      COLOR_PALETTES.unshift(newPalette)
    }
  })

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
        refreshing={false}
        ListHeaderComponent={
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              navigation.navigate('New Color Palette')
            }}
          >
            <Text style={styles.buttonText}>create color palette</Text>
          </TouchableOpacity>
        }
      />
    </View>
  )
}

export {Home}
