import {StyleSheet, View} from 'react-native';
import React from 'react';
import ActionSheet from 'react-native-actions-sheet';
import { color, font } from '@themes';
import { Button, Gap, Icon, Text } from '@atom-components';

const AppUpdateSheet = (props) => {

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
            <Icon.Update size={50} strokeColor={color.secondary} fillColor={color.softSecondary} />
            <Gap height={20} />
            <Text size={20} type={font.type.OpenSansBold}>Update Versi Terbaru!</Text>
            <Text size={12} style={{textAlign: 'center'}}>Update sekarang untuk kinerja patroli yang lebih optimal.</Text>
            <Gap height={10} />
            <Button title="Update Sekarang" onPress={() => {}} />
        </View>
    </ActionSheet>
  );
};

export default AppUpdateSheet;

const styles = StyleSheet.create({
  content: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
});
