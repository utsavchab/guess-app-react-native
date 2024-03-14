import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient'

const OpponentGuess = ({ currentNumber, guessedNumber }) => {
  console.log(currentNumber)
  return (
    <LinearGradient
      colors={['#FF9B05', '#FFBC58', '#FAC069', '#FFD089']}
      style={styles.OpponentGuessContainer}
    >
      <View>
        <Text style={styles.OpponentGuessText}>Opponent's Guess</Text>
      </View>
      <View style={styles.OpponentGuessNumberContainer}>
        <Text style={styles.OpponentGuessNumber}>{guessedNumber}</Text>
      </View>
    </LinearGradient>
  )
}

export default OpponentGuess

const styles = StyleSheet.create({
  OpponentGuessContainer: {
    width: '80%',
    height: 150,
    padding: 15,
    alignItems: 'center',
    gap: 5,
    position: 'relative',
    elevation: 10,
    shadowColor: 'black',
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
  },
  OpponentGuessText: {
    fontSize: 30,
    fontWeight: '900',
    fontStyle: 'italic',
  },
  OpponentGuessNumberContainer: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  OpponentGuessNumber: {
    fontSize: 40,
    fontWeight: 'bold',
  },
})
