import React from 'react';
import { View, StyleSheet, TextInput, Text, StatusBar, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Inscreva() {
  return (
    <SafeAreaView style={styles.viewPrincipal}>
     <StatusBar translucent={true} backgroundColor={'transparent'} />
      <View >
        <View style={styles.viewCriar}>
          <Text style={styles.criar}>Criar conta</Text>
        </View>

        <View style={styles.viewText}>
          <Text style={styles.text}>Qual é o seu e-mail?</Text>
        </View>

        <View style={styles.viewInput}>
          <TextInput placeholderTextColor={'#fff'}
            style={styles.input} />
        </View>

        <View style={styles.viewVoce}>
          <Text style={styles.voce}>Você vai ter que confirmar esse e-mail mais tarde.</Text>
        </View>

        <View style={styles.botao}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.textButton3}>Avançar</Text>
          </TouchableOpacity>
        </View>

      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  text: {
    fontFamily: "InterBold",
    fontSize: 28,
    color: '#fff'
  },
  viewPrincipal: {
    backgroundColor: '#181818',
    flex: 1
  },
  criar: {
    color: '#fff',
    fontFamily: "InterBold",
    fontSize: 15
  },
  viewCriar: {
    alignItems: 'center',
    marginTop: 14
  },
  input: {
    height: 50,
    width: 380,
    backgroundColor: '#606060',
    borderRadius: 6
  },
  viewInput: {
    alignItems: 'center',
    marginTop: 10
  },
  viewText: {
    marginTop: 57,
    left: 15
  },
  voce:{
    color: '#fff',
    fontFamily: "InterRegular",
    fontSize: 11
  },
  viewVoce:{
    left: 17,
    top: 7
  },
  button: {
    backgroundColor: '#606060',
    borderRadius: 50,
    width: 140,
    height: 53,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 12,
  },
  botao:{
    marginTop: 20
  },
  textButton3:{
    fontFamily: "InterBold"
  }
})