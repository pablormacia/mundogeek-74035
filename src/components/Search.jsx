import { StyleSheet, Text, TextInput, View } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { colors } from '../global/colors'

const Search = ({keyword,setKeyword}) => {
  return (
    <View style={styles.searchContainer}>
      <TextInput
        onChangeText={(text)=>setKeyword(text)}
        style={styles.searchInput}
        value={keyword}
        />
        <Ionicons name="search" size={32} color={colors.darkGray} /> 
    </View>
  )
}

export default Search

const styles = StyleSheet.create({
    searchContainer:{
        flexDirection:"row",
        alignItems:'center',
        gap:8,
        margin:8
    },
    searchInput:{
        borderWidth:1,
        borderColor: colors.darkGray,
        borderRadius:16,
        padding:8,
        paddingHorizontal:16,
        width:'90%',
        
    }
})