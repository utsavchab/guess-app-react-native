import { StyleSheet, View, Text } from 'react-native'

const GuessMyNumber = () => {
  return (
    <View style={styles.GuessMyNumberBox}>
      <Text style={styles.GuessMyNumberText}>Guess My Number</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  GuessMyNumberBox: {
    backgroundColor: '#F88484',
    borderWidth: 3,
    borderColor: '#000',
    borderRadius: 10,
    marginTop: '20%',
    marginBottom: '20%',
    padding: 20,
  },
  GuessMyNumberText: {
    color: '#000',
    fontSize: 24,
    fontStyle: 'italic',
    fontWeight: 'bold',
    textShadowRadius: 10,
    textShadowColor: 'rgba(255, 255, 255, 1)',
  },
})
export default GuessMyNumber
