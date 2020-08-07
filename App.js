import React from 'react'
import {SafeAreaView, StyleSheet, View} from 'react-native'
import {ColorBox} from './components'

const App = () => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <ColorBox colorName="Blue" hexColor="#268bd2" />
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingTop: 40,
  },
})

export default App
