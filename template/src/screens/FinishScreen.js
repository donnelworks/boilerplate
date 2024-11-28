import { BackHandler, StyleSheet, View } from 'react-native'
import React, { useEffect } from 'react'
import { color, font } from '@themes'
import { Button, Card, Gap, Lottie, Text } from '@atom-components'
import LottieView from 'lottie-react-native'
import { useSelector } from 'react-redux'

const FinishScreen = ({navigation}) => {
  const {token} = useSelector(state => state?.auth);

  useEffect(() => {
      const backHandler = BackHandler.addEventListener("hardwareBackPress", () => true);
      return () => backHandler.remove();
  }, []);

  return (
    <View style={styles.container}>
      <View style={{flex: 4, justifyContent: 'center', alignItems: 'center'}}>
        <LottieView source={Lottie.Success} autoPlay loop={false} style={{width: 200, height: 200}}/>
        <Gap height={5} />
        <Text type={font.type.OpenSansBold} size={24}>Congratzz!</Text>
        <Text type={font.type.OpenSansRegular} size={14}>Request Test Successfully, here your token.</Text>
        <Gap height={10} />
        <Card style={{backgroundColor: color.gray}}>
          <Text>{token}</Text>
        </Card>
      </View>
      <View style={{flex: 1, justifyContent: 'center'}}>
        <Button title={"Finish"} buttonColor={color.secondary} onPress={() => navigation.navigate('Home')} />
      </View>
    </View>
  )
}

export default FinishScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.white,
    padding: 15
  }
})