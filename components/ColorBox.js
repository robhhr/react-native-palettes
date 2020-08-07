import React from 'react'
import {StyleSheet, Text, View} from 'react-native'

const ColorBox = ({colorName, hexColor}) => {
  const boxBackground = {
    backgroundColor: hexColor,
  }
  return (
    <View style={[styles.boxContainer, boxBackground]}>
      <Text style={styles.boxText}>{colorName} :</Text>
      <Text style={styles.boxText}>{hexColor}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  boxContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 35,
  },
  boxText: {
    color: '#FFF',
    fontWeight: '600',
  },
})

export {ColorBox}
