import { createNativeStackNavigator } from '@react-navigation/native-stack'

import TelaInicial from '../TelaInicial/index'
import Inscreva from '../Inscreva/index'
import Numero from '../Numero/index';
import Entrar from '../Entrar/index';
import TelaPrincipal from '../TelaPrincipal/index';



const Stack = createNativeStackNavigator();


export default function Routes() {
    return (
        <Stack.Navigator
            screenOptions={{
                gestureEnabled: true,
                gestureDirection: "horizontal"
            }}>

            <Stack.Screen
                name="TelaInicial"
                component={TelaInicial}
                options={{ headerShown: false }}
            />

            <Stack.Screen
                name="Inscreva"
                component={Inscreva}
                options={{ headerShown: false }}
            />

            <Stack.Screen
                name="Numero"
                component={Numero}
                options={{ headerShown: false }}
            />

            <Stack.Screen
                name="Entrar"
                component={Entrar}
                options={{ headerShown: false }}
            />

            <Stack.Screen
                name="TelaPrincipal"
                component={TelaPrincipal}
                options={{ headerShown: false }}
            />

        </Stack.Navigator>



    );
}
