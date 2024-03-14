import { StatusBar } from 'expo-status-bar'
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Alert,
  BackHandler,
  FlatList,
  ScrollView,
} from 'react-native'

import HomeScreen from './screens/HomeScreen'
import { LinearGradient } from 'expo-linear-gradient'
import { useEffect, useState } from 'react'
import GameScreen from './screens/GameScreen'
import GameOverScreen from './screens/GameOverScreen'
import { WebView } from 'react-native-webview'

export default function App() {
  const [currScreen, setCurrScreen] = useState('HomeScreen')
  const [currentNumber, setCurrentNumber] = useState('')
  const [numberOfTry, setNumberOfTry] = useState(0)
  useEffect(() => {
    if (currScreen === 'HomeScreen') {
      setCurrentNumber('')
      setNumberOfTry(0)
    }
  }, [currScreen])
  function getTheScreen() {
    if (currScreen === 'HomeScreen') {
      return (
        <HomeScreen
          setCurrScreen={setCurrScreen}
          currentNumber={currentNumber}
          setCurrentNumber={setCurrentNumber}
        />
      )
    } else if (currScreen === 'GameScreen') {
      return (
        <GameScreen
          setCurrScreen={setCurrScreen}
          currentNumber={currentNumber}
          setNumberOfTry={setNumberOfTry}
        />
      )
    } else if (currScreen === 'GameOverScreen') {
      return (
        <GameOverScreen
          setCurrScreen={setCurrScreen}
          numberOfTry={numberOfTry}
          currentNumber={currentNumber}
        />
      )
    } else {
      return Alert.alert(
        'Invalid Authorization',
        'You have entred into a unauthorized state. Please restart you application.',
        [
          {
            text: 'Exit',
            style: 'destructive',
            onPress: () => {
              BackHandler.exitApp()
              setCurrScreen('HomeScreen')
            }, // closing the application
          },
        ]
      )
    }
  }

  return (
    <ImageBackground
      source={require('./assets/back.png')}
      style={styles.BackgroundImage}
      resizeMode="cover"
      imageStyle={styles.BackgroundImageStyle}
    >
      <LinearGradient
        colors={['#F88484', '#f8848480', '#4cc9f674', '#4cc9f646']}
        style={styles.HomeLinearGrad}
      >
        <ScrollView>{getTheScreen()}</ScrollView>

        <StatusBar style="auto" />
      </LinearGradient>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  HomeLinearGrad: {
    flex: 1,
    justifyContent: 'center',
  },
  BackgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  BackgroundImageStyle: {
    opacity: 1,
  },
})
