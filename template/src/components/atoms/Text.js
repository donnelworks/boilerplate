import { Text as RNText } from 'react-native'
import React from 'react'
import { font, color as colorTheme } from '@themes'

const Text = ({children, type, size, color, style, ...props}) => {
  return (
    <RNText
      allowFontScaling={false}
      style={[{
          fontFamily: type ? type : font.type.OpenSansRegular,
          fontSize: size ? font.size.value(size) : font.size.value(14),
          color: color ? color : colorTheme.text,
      }, style]}
      {...props}
    >
      {children}
    </RNText>
  )
}

export default Text