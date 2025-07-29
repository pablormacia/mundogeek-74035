import { StyleSheet, Text, View, Pressable } from 'react-native'
import { colors } from '../global/colors'
import { useNavigation } from '@react-navigation/native'
import Icon from 'react-native-vector-icons/Feather'
import { clearSession } from '../db'
import { clearUser } from '../features/user/userSlice'
import { useSelector, useDispatch } from 'react-redux'

const Header = ({ title, subtitle }) => {
  const navigation = useNavigation()
  const canGoBack = navigation.canGoBack()
  const user = useSelector(state => state.userReducer.userEmail)

  const dispatch = useDispatch()

  const handleClearSession = async () => {
    try {
      await clearSession()
      dispatch(clearUser())
    } catch {
      console.log("Hubo un error al limpiar la sesión")
    }

  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subtitle}>{subtitle}</Text>
      {
        canGoBack &&
        <Pressable style={styles.goBack} onPress={() => navigation.goBack()}>
          <Icon name="chevron-left" size={32} color={colors.white} />
        </Pressable>
      }
      {
        user
        &&
        <Pressable onPress={handleClearSession}>
          <Text>Salir</Text>
        </Pressable>
      }
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
  container: {
    height: 200,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.darkGray
  },
  title: {
    fontSize: 24,
    color: colors.white,
    fontFamily: 'PressStart2P'
  },
  subtitle: {
    fontSize: 16,
    color: colors.white,
  },
  goBack: {
    position: "absolute",
    bottom: 100,
    left: 16
  }
})