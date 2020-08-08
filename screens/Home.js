import React from 'react'
import {Text, TouchableOpacity, View} from 'react-native'

const Home = ({navigation}) => {
  return (
    <View>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Color Palette')
        }}
      >
        <Text>Home Pagedddddd</Text>
      </TouchableOpacity>
    </View>
  )
}

export {Home}
