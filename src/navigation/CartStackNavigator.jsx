import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { CartScreen } from '../screens'
import Header from '../components/Header';

const Stack = createNativeStackNavigator();


export default function CartStackNavigator() {
    return (
        <Stack.Navigator
            initialRouteName='Carrito'
            screenOptions={{
                header: ({ route }) => <Header title="Mundo Geek" subtitle={route.name} />
            }}
        >
            <Stack.Screen name="Carrito" component={CartScreen} />
        </Stack.Navigator>
    );
}