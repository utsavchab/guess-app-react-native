import { Alert, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import GuessMyNumber from '../components/GuessMyNumber'
import OpponentGuess from '../components/OpponentGuess'
import GuessInputBox from '../components/GuessInputBox'
import GuessHistory from '../components/GuessHistory'

const GameScreen = ({ currentNumber, setCurrScreen, setNumberOfTry }) => {
  const [guessedNumber, setGuessedNumber] = useState(
    Math.floor(Math.random() * 100)
  )
  const [guessData, setGuessData] = useState([guessedNumber])
  const [low, setLow] = useState(0)
  const [high, setHigh] = useState(99)
  useEffect(() => {
    if (guessedNumber == currentNumber) {
      setNumberOfTry(guessData.length)
      setCurrScreen('GameOverScreen')
    }
  }, [guessedNumber])
  function increaseFunction() {
    if (currentNumber > guessedNumber) {
      const newNumber =
        Math.floor(Math.random() * (high - guessedNumber)) + guessedNumber + 1
      setGuessedNumber(newNumber)
      setGuessData((prev) => [...prev, newNumber])
      if (newNumber == currentNumber) {
        setNumberOfTry(guessData.length)
        setCurrScreen('GameOverScreen')
      } else if (newNumber > currentNumber) {
        setHigh(newNumber)
      } else {
        setLow(newNumber)
      }
    } else {
      Alert.alert('You have enter on a wrong box', 'Do Not Cheat!', [
        { text: 'I will not Cheat' },
      ])
    }
  }

  function decreaseFunction() {
    if (currentNumber < guessedNumber) {
      const newNumber =
        guessedNumber - Math.floor(Math.random() * (guessedNumber - low))
      setGuessedNumber(newNumber) + 1
      setGuessData((prev) => [...prev, newNumber])
      if (newNumber == currentNumber) {
        setNumberOfTry(guessData.length)
        setCurrScreen('GameOverScreen')
      } else if (newNumber > currentNumber) {
        setHigh(newNumber)
      } else {
        setLow(newNumber)
      }
    } else {
      Alert.alert('You have enter on a wrong box', 'Do Not Cheat!', [
        { text: 'I will not Cheat' },
      ])
    }
  }

  return (
    <View style={styles.GameScreen}>
      <GuessMyNumber />
      <OpponentGuess
        currentNumber={currentNumber}
        guessedNumber={guessedNumber}
      />
      <GuessInputBox
        increaseFunction={increaseFunction}
        decreaseFunction={decreaseFunction}
      />

      <GuessHistory guessData={guessData} />
    </View>
  )
}

export default GameScreen

const styles = StyleSheet.create({
  GameScreen: {
    flex: 1,
    alignItems: 'center',
  },
})
