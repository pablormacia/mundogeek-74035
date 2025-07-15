import { NavigationContainer } from "@react-navigation/native";
import AuthStackNavigator from "./AuthStackNavigator";
import TabNavigator from "./TabNavigator";
import { useSelector } from "react-redux";

export default function MainNavigator() {
    const userEmail = useSelector(state=>state.userReducer.userEmail)
    console.log(userEmail)
    return (
        <NavigationContainer>
            {
                userEmail ? <TabNavigator /> : <AuthStackNavigator />
            }
        </NavigationContainer>
    )
}