import { StyleSheet, View } from 'react-native'
import React from 'react'
import Text from './Text'
import { font } from '@themes'
import { Grid } from '@atom-components'

const Alert = ({message, backgroundColor, textColor, borderColor, icon}) => {
  return (
    <View style={[styles.alertContainer, {borderColor, backgroundColor}]}>
      <Grid.Row>
        {icon && (
          <Grid.Col xs={1}>
            {icon}
          </Grid.Col>
        )}
        <Grid.Col xs={icon ? 11 : 12}>
          <Text color={textColor} type={font.type.OpenSansSemiBold} size={12}>{message}</Text>
        </Grid.Col>
      </Grid.Row>
    </View>
  )
}

export default Alert

const styles = StyleSheet.create({
    alertContainer: {
      alignItems: 'center',
      borderRadius: 6,
      borderWidth: 1,
      padding: 10,
    }
})