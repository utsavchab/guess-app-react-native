import { useState } from 'react'
import {
  View,
  StyleSheet,
  TextInput,
  Pressable,
  Text,
  Alert,
} from 'react-native'
import PrimaryButton from './PrimaryButton'
const InputNumber = ({
  confirmNumberCall,
  currentNumber,
  resetNubmer,
  updateCurrentNumber,
}) => {
  return (
    <View style={styles.InputNumberContainer}>
      <View>
        <Text style={styles.InputNumberText}>Enter A Number</Text>
      </View>
      <View>
        <TextInput
          keyboardType="number-pad"
          style={styles.InputNumberBox}
          value={currentNumber}
          onChangeText={updateCurrentNumber}
          maxLength={2}
          autoCapitalize="none"
          autoCorrect={false}
        ></TextInput>
      </View>
      <View style={styles.InputNumberActions}>
        <PrimaryButton text={'Reset'} onPress={resetNubmer} />
        <PrimaryButton text={'Confirm'} onPress={confirmNumberCall} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  InputNumberContainer: {
    width: '80%',
    backgroundColor: '#E26666',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    elevation: 4,
    // Elevation will not work on IOS
    shadowColor: 'black',
    // shadow properties for IOS shadowColor, shadowOffset, shadowRadius, shadowOpacity
    shadowOffset: { width: 3, height: 3 },
    shadowRadius: 10,
    shadowOpacity: 0.5,
  },
  InputNumberText: {
    color: '#000',
    fontSize: 24,
    fontStyle: 'italic',
    fontWeight: 'bold',
    textShadowRadius: 10,
    textShadowColor: 'rgba(255, 255, 255, 1)',
  },
  InputNumberBox: {
    borderBottomWidth: 2,
    margin: 20,
    padding: 5,
    fontSize: 20,
    minWidth: 35,
  },
  InputNumberActions: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    width: '100%',
    gap: 20,
  },
})

export default InputNumber
