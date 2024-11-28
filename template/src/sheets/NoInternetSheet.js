import {StyleSheet, View} from 'react-native';
import React from 'react';
import ActionSheet from 'react-native-actions-sheet';
import { color, font } from '@themes';
import { Icon, Text } from '@atom-components';

const NoInternetSheet = (props) => {

  return (
    <ActionSheet
      gestureEnabled
      springOffset={90}
      closeAnimationConfig={{
        stiffness: 95.8,
        damping: 14.7,
        mass: 1,
      }}
      indicatorStyle={{
        backgroundColor: '#FFFFFF'
      }}
      containerStyle={{
        backgroundColor: '#FFFFFF',
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
      }}>
        <View style={styles.content}>
            <Icon.NoConnection size={50} strokeColor={color.secondary} fillColor={color.softSecondary} />
            <Text size={25} type={font.type.OpenSansBold}>Oops!</Text>
            <Text size={12}>Tidak bisa terhubung ke internet.</Text>
            <Text size={12}>Pastikan jaringan Anda aktif.</Text>
        </View>
    </ActionSheet>
  );
};

export default NoInternetSheet;

const styles = StyleSheet.create({
  content: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 30,
  },
});
