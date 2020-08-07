import React from 'react'
import {StyleSheet, Text, View} from 'react-native'

const ColorBox = ({colorName, hexColor}) => {
  const boxBackground = {
    backgroundColor: hexColor,
  }
  const textColor = {
    color:
      parseInt(hexColor.replace('#', ''), 16) > 0xffffff / 1.1
        ? 'black'
        : 'white',
  }
  return (
    <View style={[styles.boxContainer, boxBackground]}>
      <Text style={(styles.boxText, textColor)}>{colorName} :</Text>
      <Text style={(styles.boxText, textColor)}>{hexColor}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  boxContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 5,
    height: 35,
  },
  boxText: {
    color: '#FFF',
    fontWeight: '600',
  },
})

export {ColorBox}
