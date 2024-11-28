import {StyleSheet, Animated, Easing, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import { color } from '@themes';

const dim = 60;

const LoadingScreen = ({transparent}) => {
  // State
  const [color1, setColor1] = useState(transparent ? '#FFFFFF' : color.primary);
  const [color2, setColor2] = useState(transparent ? '#FFFFFF' : color.primary);
  const [color3, setColor3] = useState(transparent ? '#FFFFFF' : color.primary);
  const [color4, setColor4] = useState(transparent ? '#FFFFFF' : color.primary);
  const [color5, setColor5] = useState(transparent ? '#FFFFFF' : color.primary);
  const [animation, setAnimation] = useState(new Animated.Value(0));

  //   Effect
  useEffect(() => {
    Animated.loop(
      Animated.timing(animation, {
        toValue: 1,
        duration: 3000,
        easing: Easing.linear,
        useNativeDriver: true,
      }),
    ).start();
  }, []);

  const angle = animation.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: ['0deg', '72deg', '360deg'],
  });
  const angle0 = animation.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: ['0deg', '144deg', '360deg'],
  });
  const angle1 = animation.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: ['0deg', '216deg', '360deg'],
  });
  const angle2 = animation.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: ['0deg', '288deg', '360deg'],
  });
  const angle3 = animation.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: ['0deg', '360deg', '360deg'],
  });
  const outerAngle = animation.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '720deg'],
  });

  const background = {
    backgroundColor: transparent ? `${color.black}66` : color.white
  };

  return (
    <View style={[styles.container, background]}>
      <Animated.View
        style={{width: dim, height: dim, transform: [{rotate: outerAngle}]}}>
        <Animated.View style={{...styles.item, transform: [{rotate: angle3}]}}>
          <View style={{...styles.innerItem, backgroundColor: color1}}></View>
        </Animated.View>
        <Animated.View style={{...styles.item, transform: [{rotate: angle2}]}}>
          <View style={{...styles.innerItem, backgroundColor: color2}}></View>
        </Animated.View>
        <Animated.View style={{...styles.item, transform: [{rotate: angle1}]}}>
          <View style={{...styles.innerItem, backgroundColor: color3}}></View>
        </Animated.View>
        <Animated.View style={{...styles.item, transform: [{rotate: angle0}]}}>
          <View style={{...styles.innerItem, backgroundColor: color4}}></View>
        </Animated.View>
        <Animated.View style={{...styles.item, transform: [{rotate: angle}]}}>
          <View style={{...styles.innerItem, backgroundColor: color5}}></View>
        </Animated.View>
      </Animated.View>
    </View>
  );
};

export default LoadingScreen;

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1,
  },
  item: {
    width: dim,
    height: dim,
    borderWidth: 0,
    backgroundColor: 'transparent',
    position: 'absolute',
    justifyContent: 'center',
  },
  innerItem: {
    height: 10,
    width: 10,
    borderRadius: 10,
  },
});
