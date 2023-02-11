import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native'
import Routes from './src/Routes/Index';
import {useFonts, Inter_700Bold, Inter_400Regular, Inter_300Light } from '@expo-google-fonts/inter'

export default function App() {

  const [fonteCarregada] = useFonts({
    "InterBold": Inter_700Bold,
    "InterRegular": Inter_400Regular,
    "InterLight": Inter_300Light,
  })

  if (!fonteCarregada) {
    return <View/>
  }

  return (
    <NavigationContainer>
      <Routes/>
    </NavigationContainer>

  );
}
