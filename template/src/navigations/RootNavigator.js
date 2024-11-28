import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '@screens/HomeScreen';
import FinishScreen from '@screens/FinishScreen';
import { useSelector } from 'react-redux';
import { LoadingScreen } from '@atom-components';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const Stack = createStackNavigator();

const RootNavigator = () => {
  const {loadingScreenToggle, toast} = useSelector(state => state.ui);

  return (
    <SafeAreaProvider>
      {loadingScreenToggle && <LoadingScreen transparent />}
      
      <Stack.Navigator initialRouteName='Home'>
          <Stack.Screen name='Home' component={HomeScreen} options={{
            title: "Boilerplate RN 0.67.3"
          }} />
          <Stack.Screen name='Finish' component={FinishScreen} options={{
            headerShown: false
          }} />
      </Stack.Navigator>
    </SafeAreaProvider>
  )
}

export default RootNavigator

const styles = StyleSheet.create({})