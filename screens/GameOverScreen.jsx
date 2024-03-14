import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import GuessMyNumber from '../components/GuessMyNumber'
import PrimaryButton from '../components/PrimaryButton'

const GameOverScreen = ({ numberOfTry, currentNumber, setCurrScreen }) => {
  function goToHomeScreen() {
    setCurrScreen('HomeScreen')
  }
  return (
    <View style={styles.GameOverScreenContainer}>
      <GuessMyNumber />
      <Text>GameOverScreen</Text>
      <Text>{numberOfTry}</Text>
      <PrimaryButton text={'Start New Game'} onPress={goToHomeScreen} />
    </View>
  )
}

export default GameOverScreen

const styles = StyleSheet.create({
  GameOverScreenContainer: {
    flex: 1,
    alignItems: 'center',
  },
})
