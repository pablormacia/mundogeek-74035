import { StyleSheet, Text, View,Pressable } from 'react-native'
import { colors } from '../global/colors'
import { useNavigation } from '@react-navigation/native'




const Header = ({title,subtitle}) => {
  const navigation = useNavigation()
  const canGoBack = navigation.canGoBack()

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subtitle}>{subtitle}</Text>
      {
        canGoBack &&
        <Pressable onPress={()=>navigation.goBack()}>
          <Text>Volver</Text>
        </Pressable>
      }
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
    container:{
        height:200,
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:colors.darkGray
    },
    title:{
        fontSize:24,
        color:colors.white,
        fontFamily:'PressStart2P'
    },
    subtitle:{
      fontSize:16,
      color:colors.white,
    }
})