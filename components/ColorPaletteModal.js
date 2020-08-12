import React, {useState, useCallback} from 'react'
import {
  Alert,
  FlatList,
  StyleSheet,
  Switch,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native'
import {COLORS} from '../utils'

const ColorPaletteModal = ({navigation}) => {
  const [paletteName, setPaletteName] = useState('')
  const [selectedColors, setSelectedColors] = useState([])
  const handleSubmit = useCallback(() => {
    if (!paletteName) {
      Alert.alert('Please enter a name')
    } else if (selectedColors.length < 3) {
      Alert.alert('Please add at least 3 colors')
    } else {
      const newPalette = {
        paletteName,
        colors: selectedColors,
      }
      navigation.navigate('Home', {newPalette})
    }
  }, [paletteName, selectedColors])
  const handleValueChange = useCallback((value, color) => {
    value
      ? setSelectedColors(current => [...current, color])
      : setSelectedColors(current =>
          current.filter(c => c.paletteName !== color.paletteName),
        )
  })
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
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
      <FlatList
        data={COLORS}
        keyExtractor={item => item.paletteName}
        renderItem={({item}) => (
          <View style={styles.color}>
            <Text>{item.paletteName}</Text>
            <Switch
              value={
                !!selectedColors.find(
                  color => color.paletteName === item.paletteName,
                )
              }
              onValueChange={selected => {
                handleValueChange(selected, item)
              }}
            />
          </View>
        )}
      />
      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Create palette</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  button: {
    alignSelf: 'center',
    alignItems: 'center',
    backgroundColor: '#00b200',
    borderRadius: 8,
    paddingVertical: 10,
    marginVertical: 30,
    width: '85%',
  },
  buttonText: {
    textTransform: 'uppercase',
    color: '#fff',
    fontWeight: Platform.OS === 'ios' ? '500' : 'bold',
  },
  color: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    alignSelf: 'center',
    marginVertical: 10,
    width: '90%',
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 20,
  },
  input: {
    borderColor: '#b7b7b7',
    borderWidth: 1,
    marginTop: 5,
    marginBottom: 15,
    paddingHorizontal: 10,
    borderRadius: 5,
    height: 35,
  },
  inputContainer: {
    paddingHorizontal: 20,
  },
})

export {ColorPaletteModal}
