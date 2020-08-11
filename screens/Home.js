import React from 'react'
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
        refreshing={false}
        ListHeaderComponent={
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              navigation.navigate('Color Palette Modal')
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
