import {
    ActivityIndicator,
    StyleSheet,
    TouchableHighlight,
    TouchableOpacity,
    View,
  } from 'react-native';
  import React from 'react';
import { color, font } from '@themes';
import Text from './Text';
  
  const Button = ({title, buttonColor, textColor, disabled, loading, underlayColor, onPress}) => {
    return (
      <TouchableHighlight underlayColor={underlayColor ? underlayColor : color.softPrimary} onPress={onPress} disabled={disabled}>
        <View style={[styles.button, {backgroundColor: buttonColor ? buttonColor : color.primary}]}>
          {loading && <ActivityIndicator color={textColor ? textColor : color.white} />}
          <Text color={textColor ? textColor : color.white} size={font.size.value(14)} type={font.type.OpenSansSemiBold}>{title}</Text>
        </View>
      </TouchableHighlight>
    );
  };
  
  export default Button;
  
  const styles = StyleSheet.create({
    button: {
      flexDirection: 'row',
      padding: 15,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 6 ,
    },
  });
  