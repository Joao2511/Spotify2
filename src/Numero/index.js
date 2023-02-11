import React from 'react';
import { View, Text, StyleSheet, StatusBar, TextInput, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Numero() {
    return (
        <SafeAreaView style={styles.viewPrincipal}>
            <StatusBar translucent={true} backgroundColor={'transparent'} />
            <View style={styles.viewText}>
                <Text style={styles.text1}>Insira um número de telefone</Text>
            </View>
            <TextInput placeholderTextColor={'#fff'} style={styles.input}>
                <Text style={styles.text2}>   Brasil</Text>
            </TextInput>
            <View>
                <TextInput placeholderTextColor={'#fff'} style={styles.input2}>
                    <Text style={styles.text2}>   +55</Text>
                </TextInput>
            </View>

            <View style={styles.viewInput3}>
                <TextInput placeholderTextColor={'#fff'} style={styles.input3}>
                    <Text style={styles.text22}>   (11)96123-4567 </Text>
                </TextInput>
            </View>

            <View style={styles.view1}>
                <Text style={styles.text3}>Vamos enviar um código pro SMS para confirmar o seu{'\n'}número de telefone.</Text>
            </View>

            <View style={styles.view1}>
                <Text style={styles.text3}>{'\n'}É possivel que enviemos mensagens relacionadas a{'\n'}serviços de vez em quando.</Text>
            </View>

            <View style={styles.botao}>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.textButton3}>Avançar</Text>
                </TouchableOpacity>
            </View>

        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    viewPrincipal: {
        flex: 1,
        backgroundColor: '#181818',
        paddingLeft: 18
    },
    text1: {
        color: '#fff',
        fontFamily: "InterBold",
        fontSize: 29
    },
    viewText: {
        marginTop: 64,
    },
    input: {
        height: 50,
        width: 380,
        backgroundColor: '#606060',
        borderBottomColor: '#fff',
        borderWidth: 0.5,
        borderTopLeftRadius: 4,
        borderTopRightRadius: 4,
    },
    text2: {
        fontFamily: "InterRegular",
        color: '#fff',
        fontSize: 16,
    },
    input2: {
        height: 50,
        width: 60,
        backgroundColor: '#606060',
        borderRightColor: '#fff',
        borderWidth: 0.5,
        borderBottomLeftRadius: 4,
    },
    input3: {
        height: 50,
        width: 320,
        backgroundColor: '#606060',
        borderWidth: 0.5,
        borderBottomRightRadius: 4
    },
    viewInput3: {
        left: 60,
        bottom: 50
    },
    text3: {
        color: '#fff',
        fontFamily: "InterRegular",
        fontSize: 12
    },
    view1: {
        bottom: 40
    },
    text22: {
        fontFamily: "InterRegular",
        color: '#c7c7c7',
        fontSize: 16,
    },
    botao:{
        alignItems: 'center',
        alignSelf: 'center',
        marginRight: 20
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
      textButton3:{
        fontFamily: "InterBold"
      }
})