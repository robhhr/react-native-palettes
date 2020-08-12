import React, {useState} from 'react'
import {StyleSheet, Text, TextInput, View} from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 25,
    paddingTop: 20,
  },
  input: {
    borderColor: '#b7b7b7',
    borderWidth: 1,
    marginTop: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
    height: 35,
  },
})

const ColorPaletteModal = () => {
  const [paletteName, setPaletteName] = useState('')
  return (
    <View style={styles.container}>
      <Text>Name</Text>
      <TextInput
        style={styles.input}
        onChangeText={setPaletteName}
        placeholder={'My first color palette'}
        value={paletteName}
        clearButtonMode={'while-editing'}
        clearTextOnFocus={true}
        enablesReturnKeyAutomatically={true}
      />
    </View>
  )
}

export {ColorPaletteModal}
