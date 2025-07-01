import { StyleSheet, Text, View,Pressable } from 'react-native'
import { colors } from '../global/colors'
import { useNavigation } from '@react-navigation/native'
import Icon from 'react-native-vector-icons/Feather'



const Header = ({title,subtitle}) => {
  const navigation = useNavigation()
  const canGoBack = navigation.canGoBack()

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subtitle}>{subtitle}</Text>
      {
        canGoBack &&
        <Pressable style={styles.goBack} onPress={()=>navigation.goBack()}>
          <Icon name="chevron-left" size={32} color={colors.white} />
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
    },
    goBack:{
      position:"absolute",
      bottom:100,
      left:16
    }
})