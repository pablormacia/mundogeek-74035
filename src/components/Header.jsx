import { StyleSheet, Text, View } from 'react-native'
import { colors } from '../global/colors'

const Header = ({title}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
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
    }
})