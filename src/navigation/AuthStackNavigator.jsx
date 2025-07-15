import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { LoginScreen,SignupScreen } from '../screens';

const Stack = createNativeStackNavigator();


export default function AuthStackNavigator() {
    return (
        <Stack.Navigator
            initialRouteName='Login'
            screenOptions={{
                headerShown: false
            }}
        >
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Signup" component={SignupScreen} />
        </Stack.Navigator>
    );
}