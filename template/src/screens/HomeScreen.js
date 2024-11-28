import { StyleSheet, View } from 'react-native'
import React, { useState } from 'react'
import { color } from '@themes'
import { Button, Card, Gap, Input } from '@atom-components'
import { useDispatch, useSelector } from 'react-redux'
import { requestTest } from '@services/auth'

const HomeScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const {validationMessage} = useSelector(state => state?.auth);
  const [username, setUsername] = useState("");

  const onRequestHandler = async () => {
    // Remove unwrap() if you don't want to use async/await and try/catch.
    try {
      await dispatch(requestTest({username})).unwrap(); // <-- Remove unwrap()
      navigation.navigate('Finish');
      setUsername("");
    } catch (error) {
      console.log('Error in trycatch');
    }
  }

  return (
    <View style={styles.container}>
      <Card shadow>
        <Gap height={10} />
        <Input
          label={"Username"}
          value={username}
          onChangeText={setUsername}
          descriptions="Please input 'admin' for testing"
          invalidMessage={validationMessage}
        />
        <Gap height={10} />
        <Button title={"Request Test"} onPress={onRequestHandler} />
      </Card>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: color.white,
        padding: 15
    }
})