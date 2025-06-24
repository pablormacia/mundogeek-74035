import { StyleSheet, Text, View, FlatList, Image, Pressable } from 'react-native'
import categories from '../data/categories.json'
import FlatCard from '../components/FlatCard'

const CategoriesScreen = ({setCategorySelected}) => {
    const renderCategoryItem = ({ item }) => (
        <Pressable onPress={()=>setCategorySelected(item.title)}>
            <FlatCard>
                <View style={styles.categoryContainer}>
                    <Text>{item.title}</Text>
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