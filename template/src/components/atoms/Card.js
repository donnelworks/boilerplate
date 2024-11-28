import { StyleSheet, TouchableWithoutFeedback, View } from 'react-native'
import React from 'react'
import { Shadow } from 'react-native-shadow-2'
import { color } from '@themes'

const Card = ({children, shadow, shadowColor = color.shadow, style, onPress}) => {
  return (
    <Shadow
      disabled={!shadow}
      distance={20}
      startColor={shadowColor ?  `${shadowColor}80` : shadowColor}
      endColor={`${color.white}00`}
      offset={[0, 5]}
      style={{
        borderRadius: style?.borderRadius ? style?.borderRadius : 6,
      }}
      stretch
    >
      <TouchableWithoutFeedback disabled={!onPress} onPress={onPress}>
        <View style={[styles.container, style]}>
            {children}
        </View>
      </TouchableWithoutFeedback>
    </Shadow>
  )
}

export default Card

const styles = StyleSheet.create({
    container: {
      padding: 10,
      backgroundColor: color.white,
      borderRadius: 6,
    },
})