import React from 'react';
import { View, StyleSheet, TextInput, Text, StatusBar, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';


export default function Entrar() {

    const navigation = useNavigation();

    return (
        <SafeAreaView style={styles.viewPrincipal}>
            <StatusBar translucent={true} backgroundColor={'transparent'} />

            <View style={styles.view1}>
                <Text style={styles.text}>E-mail ou nome de usuário</Text>

                <TextInput placeholderTextColor={'#fff'}
                    style={styles.input} />
            </View>

            <View style={styles.view2}>
                <Text style={styles.text}>Senha</Text>

                <TextInput placeholderTextColor={'#fff'}
                    style={styles.input} />
            </View>

            <View style={styles.botao}>
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('TelaPrincipal')}>
                    <Text style={styles.textButton3}>Avançar</Text>
                </TouchableOpacity>
            </View>


        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    viewPrincipal: {
        backgroundColor: '#181818',
        flex: 1
    },
    viewInput: {
        alignItems: 'center',
        marginTop: 10
    },
    view1: {
        marginTop: 57,
        left: 15
    },
    view2: {
        marginTop: 40,
        left: 15
    },
    text: {
        fontFamily: "InterBold",
        fontSize: 30,
        color: '#fff'
    },
    input: {
        height: 50,
        width: 380,
        backgroundColor: '#606060',
        borderRadius: 6
    },
    botao: {
        marginTop: 20
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
    textButton3: {
        fontFamily: "InterBold"
    }
})