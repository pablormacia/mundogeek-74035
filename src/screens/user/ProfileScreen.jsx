import { StyleSheet, Text, View, Pressable, Image } from 'react-native'
import { colors } from '../../global/colors'
import CameraIcon from '../../components/CameraIcon'
import { useState } from 'react'
import * as ImagePicker from 'expo-image-picker';
import { useSelector,useDispatch } from 'react-redux';
import { usePutProfilePictureMutation } from '../../services/user/userApi';
import { setProfilePicture } from '../../features/user/userSlice';


const ProfileScreen = () => {
    //const [image, setImage] = useState("")
    const user = useSelector(state=>state.userReducer.userEmail)
    const localId = useSelector(state=>state.userReducer.localId)
    const image = useSelector(state=>state.userReducer.profilePicture)
    const [triggerPutProfilePicture, result] = usePutProfilePictureMutation()

    const dispatch = useDispatch()

    const pickImage = async () => {
        // No permissions request is necessary for launching the image library
        let result = await ImagePicker.launchCameraAsync({
            mediaTypes: ['images'],
            allowsEditing: true,
            aspect: [1, 1],
            quality: 0.7,
            base64: true
        });

        //console.log(result);

        if (!result.canceled) {
            const imgBase64 = `data:image/jpeg;base64,${result.assets[0].base64}`
            dispatch(setProfilePicture(imgBase64))
            triggerPutProfilePicture({localId:localId,image:imgBase64 })
            //setImage(result.assets[0].uri);
            
        }
    };

    return (
        <View style={styles.profileContainer}>
            <View style={styles.imageProfileContainer}>
                {
                    image
                        ?
                        <Image source={{ uri: image }} resizeMode='cover' style={styles.profileImage} />
                        :
                        <Text style={styles.textProfilePlaceHolder}>{user.charAt(0).toUpperCase()}</Text>
                }
                <Pressable onPress={pickImage} style={({ pressed }) => [{ opacity: pressed ? 0.90 : 1 }, styles.cameraIcon]} >
                    <CameraIcon />
                </Pressable>
            </View>
            <Text style={styles.profileData}>Email: {user}</Text>
        </View>
    )
}

export default ProfileScreen

const styles = StyleSheet.create({
    profileContainer: {
        padding: 32,
        justifyContent: 'center',
        alignItems: 'center'
    },
    imageProfileContainer: {
        width: 128,
        height: 128,
        borderRadius: 128,
        backgroundColor: colors.purple,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textProfilePlaceHolder: {
        color: colors.white,
        fontSize: 48,
    },
    profileData: {
        paddingVertical: 16,
        fontSize: 16
    },
    cameraIcon: {
        position: 'absolute',
        bottom: 0,
        right: 0,
    },
    profileImage: {
        width: 128,
        height: 128,
        borderRadius: 128
    }
})