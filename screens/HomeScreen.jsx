import { Alert, ImageBackground, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import GuessMyNumber from '../components/GuessMyNumber'
import InputNumber from '../components/InputNumber'
import { LinearGradient } from 'expo-linear-gradient'

import { useState } from 'react'
const HomeScreen = ({ setCurrScreen, currentNumber, setCurrentNumber }) => {
  const onConfirm = () => {
    setCurrScreen('GameScreen')
  }

  const resetNubmer = () => {
    setCurrentNumber('')
  }

  const updateCurrentNumber = (event) => {
    if (/^[0-9]*$/.test(event)) {
      setCurrentNumber(event)
    } else {
      return Alert.alert(
        'Invalid Input Number',
        'Only Numeric Values Allowed',
        [
          { text: 'Okay', style: 'cancel' },
          { text: 'Reset', style: 'destructive', onPress: resetNubmer },
        ]
      )
    }
  }

  return (
    <View style={styles.HomeScreen}>
      <GuessMyNumber />
      <InputNumber
        confirmNumberCall={onConfirm}
        currentNumber={currentNumber}
        resetNubmer={resetNubmer}
        updateCurrentNumber={updateCurrentNumber}
      />
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  HomeScreen: {
    flex: 1,

    alignItems: 'center',
  },
})
