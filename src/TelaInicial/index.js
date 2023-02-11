import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, StatusBar } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Video } from 'expo-av';
import { useNavigation } from '@react-navigation/native';

export default function TelaInicial() {

  const video = React.useRef('../../assets/videoSpot.mp4');
  const navigation = useNavigation();

  return (
    <SafeAreaView>
      <StatusBar backgroundColor={'#000000'} />
      <View>
        <View style={styles.viewVideo}>
          <Video
            ref={video}
            style={styles.video}
            source={{ uri: "https://video.wixstatic.com/video/164f35_a9758c975bd0476a8a74179b4b21198b/720p/mp4/file.mp4" }}
            resizeMode="cover"
            isLooping
            shouldPlay
          />
        </View>


        <View style={styles.viewPrincipal}>

          <View style={styles.viewIcone}>
            <Image style={styles.icone} source={require('../../assets/iconeSpot.png')} />
          </View>

          <View style={styles.viewTextPrinc}>
            <Text style={styles.text}>Milhões de músicas à sua escolha.{'\n'}Grátis no spotify.</Text>
          </View>

          <View style={styles.botoes}>
            <View>
              <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Inscreva')}>
                <Text style={styles.textButton}>Increva-se grátis</Text>
              </TouchableOpacity>
            </View>

            <View>
              <TouchableOpacity style={styles.button2} onPress={() => navigation.navigate('Numero')}>
                <Image style={styles.celular} source={require('../../assets/celular.png')} />
                <Text style={styles.textButton3}>Continuar com um número de {'\n'}telefone</Text>
              </TouchableOpacity>
            </View>

            <View>
              <TouchableOpacity style={styles.button2}>
                <Image style={styles.google} source={require('../../assets/google.png')} />
                <Text style={styles.textButton3}>Continuar com o Google</Text>
              </TouchableOpacity>
            </View>

            <View>
              <TouchableOpacity style={styles.button2}>
                <Image style={styles.facebook} source={require('../../assets/facebook.png')} />
                <Text style={styles.textButton3}>Continuar com o Facebook</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.viewEntrar}>
              <TouchableOpacity onPress={() => navigation.navigate('Entrar')}>
                <Text style={styles.textEntrar}>Entrar</Text>
              </TouchableOpacity>
            </View>

          </View>
        </View>

      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  viewPrincipal: {
    position: 'absolute',
    height: '100%',
    width: '100%',
    alignItems: 'center'
  },
  icone: {
    height: 70,
    width: 70,
    bottom: 30
  },
  viewIcone: {
    alignItems: 'center',
    marginTop: 170,
  },
  viewTextPrinc: {
    alignItems: 'center',
    top: 105
  },
  text: {
    color: '#fff',
    textAlign: 'center',
    fontFamily: 'InterBold',
    fontSize: 16
  },
  button: {
    backgroundColor: '#1ed760',
    borderRadius: 50,
    width: 350,
    height: 53,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 12
  },
  button2:{
    backgroundColor: 'transparent',
    borderRadius: 50,
    width: 350,
    height: 53,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 12,
    borderWidth: 0.5,
    borderColor: '#fff',
  },
  textButton: {
    color: '#121212',
    fontFamily: "InterBold",
    fontSize: 15,
  },
  textButton2:{
    color: '#fff',
    fontFamily: "InterBold",
    fontSize: 15,
  },
  textButton3:{
    color: '#fff',
    fontFamily: "InterBold",
    fontSize: 15,
    marginLeft: 20,
    bottom: 18,
    textAlign: 'center'
  },
  view1: {
    padding: 10
  },
  botoes: {
    marginTop: '46%'
  },
  video: {
    alignItems: 'center',
    opacity: 0.2,
    backgroundColor: '#000000',
    height: '100%',
    width: '100%'
  },
  textEntrar:{
    fontFamily: "InterBold",
    color: '#fff',
    fontSize: 18,
  },
  viewEntrar:{
    alignItems: 'center',
    top: 15
  },
  celular:{
    height: 30,
    width: 30,
    alignItems: 'center',
    alignSelf: 'center',
    marginRight: 280,
    top: 20
  },
  google:{
    height: 30,
    width: 30,
    alignItems: 'center',
    alignSelf: 'center',
    marginRight: 280,
    top: 10
  },
  facebook:{
    height: 30,
    width: 30,
    alignItems: 'center',
    alignSelf: 'center',
    marginRight: 280,
    top: 10
  }
})