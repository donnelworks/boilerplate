import { Animated, StyleSheet, TextInput, View } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import { color, font } from '@themes';
import { Icon, Text } from '@atom-components';

const Input = ({
  value,
  label,
  iconLeft,
  iconRight,
  inputRef,
  secure,
  borderless,
  onClearText,
  invalidMessage = "",
  descriptions = "",
  containerStyle,
  inputStyle,
  ...props}) => {
  const animation = useRef(new Animated.Value(0)).current;
  const [enableSecure, setEnableSecure] = useState(secure);
  const [focus, setFocus] = useState(false);
  
  const translateY = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [0, -15]
  });

  const translateX = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [0, -5]
  });

  const scale = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [1.1, .9]
  });

  const handleFocus = () => {
    setFocus(true);
  };
  const handleBlur = () => {
    setFocus(false);
  };

  useEffect(() => {
    Animated.timing(animation, {
      toValue: focus || value ? 1 : 0,
      duration: 100,
      useNativeDriver: true,
    }).start();
  }, [focus, value]);

  return (
    <>
      {/* {label && <Text type={font.type.OpenSansBold} size={12} style={{marginBottom: 5}}>{label}</Text>} */}
      <View style={[
        styles.inputContainer, 
        {
            borderLeftWidth: borderless ? 0 : 1, 
            borderRightWidth: borderless ? 0 : 1, 
            borderTopWidth: borderless ? 0 : 1, 
            borderBottomWidth: 1, 
            borderRadius: borderless ? 0 : 6, 
            borderColor: focus ? color.primary : color.border,
        },
        containerStyle,
    ]}>
        {iconLeft}
        <View style={{flex: 1}}>
          {label && <Animated.Text style={[
            styles.label,
            {transform: [{translateY}, {translateX}, {scale}]},
            {fontFamily: font.type.OpenSansSemiBold, color: focus || value ? color.primary : color.border}
          ]}>{label}</Animated.Text>}
          <TextInput
            value={value}
            ref={inputRef}
            secureTextEntry={secure ? enableSecure : false}
            style={[
                styles.input, 
                {
                  borderRadius: borderless ? 0 : 6,
                },
                inputStyle,
            ]}
            placeholderTextColor={color.border}
            onFocus={handleFocus}
            onBlur={handleBlur}
            {...props}
          />
        </View>
        {(onClearText && !!value?.length) && <Icon.CrossCircle size={25} strokeColor={color.border} style={{marginLeft: 5, marginRight: 5}} onPress={() => onClearText("")} />}
        {secure && enableSecure && <Icon.VisibleEye size={25} strokeColor={color.primary} fillColor={color.softPrimary} style={{marginLeft: 5, marginRight: 5}} onPress={() => setEnableSecure(!enableSecure)} />}
        {secure && !enableSecure && <Icon.InvisibleEye size={25} strokeColor={color.primary} fillColor={color.softPrimary} style={{marginLeft: 5, marginRight: 5}} onPress={() => setEnableSecure(!enableSecure)} />}
        {iconRight}
      </View>
      {descriptions.length > 0 && <Text size={10} color={color.text} type={font.type.OpenSansItalic}>{descriptions}</Text>}
      {invalidMessage.length > 0 && <Text size={12} color={color.secondary}>{invalidMessage}</Text>}
    </>
  )
}

export default Input

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    backgroundColor: color.white,
    padding: 5,
    height: 55,
  },
  label: {
    position: 'absolute',
    left: 5,
    bottom: -10,
  },
  input: {
    width: '100%',
    fontSize: font.size.value(16),
    fontFamily: font.type.OpenSansBold,
    fontWeight: 'bold',
    position: 'absolute',
    color: color.text,
    bottom: -35,
  }
})