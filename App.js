import 'react-native-gesture-handler'
import React from 'react'
import {FlatList, SafeAreaView, StyleSheet, Text} from 'react-native'
import {NavigationContainer} from '@react-navigation/native'
import {ColorBox} from './components'

const SOLARIZED_COLORS = [
  {colorName: 'Base03', hexColor: '#002b36'},
  {colorName: 'Base02', hexColor: '#073642'},
  {colorName: 'Base01', hexColor: '#586e75'},
  {colorName: 'Base00', hexColor: '#657b83'},
  {colorName: 'Base0', hexColor: '#839496'},
  {colorName: 'Base1', hexColor: '#93a1a1'},
  {colorName: 'Base2', hexColor: '#eee8d5'},
  {colorName: 'Base3', hexColor: '#fdf6e3'},
  {colorName: 'Yellow', hexColor: '#b58900'},
  {colorName: 'Orange', hexColor: '#cb4b16'},
  {colorName: 'Red', hexColor: '#dc322f'},
  {colorName: 'Magenta', hexColor: '#d33682'},
  {colorName: 'Violet', hexColor: '#6c71c4'},
  {colorName: 'Blue', hexColor: '#268bd2'},
  {colorName: 'Cyan', hexColor: '#2aa198'},
  {colorName: 'Green', hexColor: '#859900'},
]

const App = () => {
  return (
    <NavigationContainer>
      <SafeAreaView>
        <FlatList
          style={styles.container}
          data={SOLARIZED_COLORS}
          keyExtractor={item => item.colorName}
          renderItem={({item}) => (
            <ColorBox colorName={item.colorName} hexColor={item.hexColor} />
          )}
          ListHeaderComponent={<Text>Solarized</Text>}
        />
      </SafeAreaView>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
    paddingTop: 40,
  },
})

export default App
