import { StyleSheet, Text, View, FlatList, Image, Pressable } from 'react-native'
//import categories from '../../data/categories.json'
import FlatCard from '../../components/FlatCard'
import TextKarlaRegular from '../../components/TextKarlaRegular'
import { useSelector, useDispatch } from 'react-redux'
import { setCategorieSelected,filterProducts } from '../../features/shop/shopSlice'

const CategoriesScreen = ({navigation}) => {

    const categories = useSelector(state=>state.shopReducer.categories)

    const dispatch = useDispatch()

    const renderCategoryItem = ({ item }) => (
        <Pressable onPress={
            ()=>{
                dispatch(setCategorieSelected(item.title))
                dispatch(filterProducts())
                navigation.navigate("Productos") 
            }}>
            <FlatCard>
                <View style={styles.categoryContainer}>
                    <TextKarlaRegular>{item.title}</TextKarlaRegular>
                    <Image width={80} height={40} source={{ uri: item.image }} />
                </View>
            </FlatCard>
        </Pressable>

    )
    return (
        <FlatList
            data={categories}
            renderItem={renderCategoryItem}
            keyExtractor={item => item.id}
        />
    )
}

export default CategoriesScreen

const styles = StyleSheet.create({
    categoryContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        gap: 8
    }
})