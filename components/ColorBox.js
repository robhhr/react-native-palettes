import React from 'react'
import {StyleSheet, Text, View} from 'react-native'

const ColorBox = ({paletteName, colors}) => {
  const boxBackground = {
    backgroundColor: colors,
  }
  const textColor = {
    color:
      parseInt(colors.replace('#', ''), 16) > 0xffffff / 1.1
        ? 'black'
        : 'white',
  }
  return (
    <View style={[styles.boxContainer, boxBackground]}>
      <Text style={(styles.boxText, textColor)}>{paletteName} :</Text>
      <Text style={(styles.boxText, textColor)}>{colors}</Text>
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
