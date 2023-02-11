import React from 'react';
import { View, StyleSheet, Text, StatusBar } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { TabActions, useNavigation } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
const Tab = createBottomTabNavigator();


import Busca from '../TelaPrincipal/Busca/index';
import Home from '../TelaPrincipal/Home/index';
import Bibli from '../TelaPrincipal/Bibli/index';


export default function TelaPrincipal() {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.viewPrincipal}>
      <View style={styles.view1}>
        <Text>OI</Text>
      </View>
      <Tab.Navigator screenOptions={{headerShown: false,}}>
        <Tab.Screen name="Buscar" component={Busca} />
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Sua Biblioteca" component={Bibli} />
    </Tab.Navigator>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  viewPrincipal:{
    backgroundColor: '#181818',
    flex: 1,
    height: '100%',
    width: '100%',
  },
  view1:{
    top: 0
  }
})