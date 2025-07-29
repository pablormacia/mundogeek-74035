import { NavigationContainer } from "@react-navigation/native";
import AuthStackNavigator from "./AuthStackNavigator";
import TabNavigator from "./TabNavigator";
import { useSelector, useDispatch } from "react-redux";
import { useGetProfilePictureQuery } from "../services/user/userApi";
import { setProfilePicture } from "../features/user/userSlice";
import { useEffect, useState } from "react";
import { initSessionTable, getSession } from "../db";
import { ActivityIndicator, View } from "react-native";
import { setUser } from "../features/user/userSlice";
import { colors } from "../global/colors";

export default function MainNavigator() {
    const userEmail = useSelector(state => state.userReducer.userEmail)
    const localId = useSelector(state => state.userReducer.localId)
    const [checkingSession, setCheckingSession] = useState(true);

    //console.log(userEmail)
    //console.log("Local Id", localId )

    const dispatch = useDispatch()
    const { data: profilePicture, isLoading, error } = useGetProfilePictureQuery(localId)

    //console.log("ProfilePicture desde MainNavigator: ", profilePicture)

    useEffect(() => {
        const bootstrap = async () => {
            await initSessionTable();
            const session = await getSession(); //En SQLite
            if (session) {
                console.log("Session:", session)
                dispatch(setUser({ email: session.email, localId: session.localId }))
            }
            setCheckingSession(false);
        };

        bootstrap();
    }, []);

    useEffect(() => {
        if (profilePicture) {
            dispatch(setProfilePicture(profilePicture.image))
        }
    }, [profilePicture])

    if (checkingSession) {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <ActivityIndicator size="large" color={colors.cobaltBlue} />
            </View>
        );
    }

    return (
        <NavigationContainer>
            {userEmail ? <TabNavigator /> : <AuthStackNavigator />}
        </NavigationContainer>
    );
}