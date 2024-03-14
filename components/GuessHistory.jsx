import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const GuessHistory = ({ guessData }) => {
  function GuessHistoryCard({ index, number }) {
    return (
      <View style={styles.GuessHistoryCard}>
        <Text style={styles.GuessHistoryCardText}>#{index} </Text>
        <Text style={styles.GuessHistoryCardText}>
          Opponent Guess : {number}
        </Text>
      </View>
    )
  }
  return (
    <View style={styles.GuessHistory}>
      {guessData.map((data, index) => (
        <GuessHistoryCard key={index} number={data} index={index + 1} />
      ))}
    </View>
  )
}

export default GuessHistory

const styles = StyleSheet.create({
  GuessHistory: {
    marginTop: 20,
    backgroundColor: 'white',
    padding: 15,
    width: '90%',
    gap: 10,
  },
  GuessHistoryCard: {
    flexDirection: 'row',
    backgroundColor: '#F88484',
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  GuessHistoryCardText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
})
