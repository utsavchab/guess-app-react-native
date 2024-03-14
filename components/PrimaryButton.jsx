import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const PrimaryButton = ({ onPress, text }) => {
  return (
    <View style={styles.InputNumberActionButtons}>
      <Pressable
        android_ripple={{ color: '#eec3c3', borderless: false }}
        style={({ pressed }) =>
          pressed
            ? [styles.IOSPressable, styles.InputNumberPressButtons]
            : [styles.InputNumberPressButtons]
        }
        onPress={onPress}
      >
        <Text style={styles.InputNumberActionButtonText}>{text}</Text>
      </Pressable>
    </View>
  )
}

export default PrimaryButton

const styles = StyleSheet.create({
  InputNumberActionButtons: {
    backgroundColor: '#9E2F2F',
    borderRadius: 10,

    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  InputNumberActionButtonText: {
    fontSize: 20,
    fontWeight: 'bold',
    fontStyle: 'italic',
    color: '#FFF',
  },
  InputNumberPressButtons: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    width: '100%',
    minWidth: 120,
    padding: 5,
    paddingLeft: 10,
    paddingRight: 10,
  },
  IOSPressable: {
    opacity: 0.4,
    backgroundColor: '#E26666',
  },
})
