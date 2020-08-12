import React, {useState, useCallback} from 'react'
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Alert,
} from 'react-native'

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
  button: {
    alignItems: 'center',
    backgroundColor: '#00b200',
    borderRadius: 8,
    paddingVertical: 10,
    marginVertical: 20,
    width: '100%',
  },
  buttonText: {
    textTransform: 'uppercase',
    color: '#fff',
    fontWeight: Platform.OS === 'ios' ? '500' : 'bold',
  },
})

const ColorPaletteModal = () => {
  const [paletteName, setPaletteName] = useState('')
  const handleSubmit = useCallback(() => {
    if (!paletteName) {
      Alert.alert('Please enter a name')
    }
  }, [paletteName])
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
      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Create palette</Text>
      </TouchableOpacity>
    </View>
  )
}

export {ColorPaletteModal}
