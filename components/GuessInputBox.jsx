import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import PrimaryButton from './PrimaryButton'
const GuessInputBox = ({ increaseFunction, decreaseFunction }) => {
  return (
    <View style={styles.GuessInputBoxContainer}>
      <View>
        <Text style={styles.GuessInputBoxNumber}>Higher or Lower</Text>
      </View>
      <View style={styles.GuessInputBoxButtons}>
        <PrimaryButton text={'-'} onPress={decreaseFunction} />
        <PrimaryButton text={'+'} onPress={increaseFunction} />
      </View>
    </View>
  )
}

export default GuessInputBox

const styles = StyleSheet.create({
  GuessInputBoxContainer: {
    marginTop: 30,
    backgroundColor: '#E26666',
    width: '90%',
    alignItems: 'center',
    padding: 20,
    gap: 20,
    height: 150,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    elevation: 20,
  },
  GuessInputBoxNumber: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  GuessInputBoxButtons: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    justifyContent: 'space-evenly',
  },
})
