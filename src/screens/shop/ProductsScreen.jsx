import { StyleSheet, Text, View, FlatList,Pressable } from 'react-native'
//import products from '../../data/products.json'
import FlatCard from '../../components/FlatCard'
import { colors } from '../../global/colors'
import { useEffect, useState } from 'react'
import Search from '../../components/Search'
import { useSelector } from 'react-redux'
import { useGetProductsByCategoryQuery } from '../../services/shop/shopApi'


const ProductsScreen = ({ navigation }) => {
    const [productsFiltered, setProductsFiltered] = useState([])
    const [keyword, setKeyword] = useState("")

    const products = useSelector(state=>state.shopReducer.products)
    const category = useSelector(state=>state.shopReducer.categorySelected)

    //const productsFilteredByCategory = useSelector(state=>state.shopReducer.productsFilteredByCategory)

    const {data: productsFilteredByCategory, isLoading, error} = useGetProductsByCategoryQuery(category.toLowerCase())
    //console.log(productsFilteredByCategory)

    //console.log(route)
    //const { category } = route.params

    useEffect(() => {
        /* const productsFilteredByCategory = products.filter(
            product => product.category.toLowerCase() === category.toLowerCase()
        ) */
        if (keyword) {
            const productsFilteredByKeyword = productsFilteredByCategory.filter(
                product => product.title.toLowerCase().includes(keyword.toLowerCase())
            )
            setProductsFiltered(productsFilteredByKeyword)
        } else {
            setProductsFiltered(productsFilteredByCategory)
        }
    }, [category, keyword,productsFilteredByCategory])

    const renderProductItem = ({ item }) => (
        <Pressable onPress={()=>navigation.navigate("Producto",{product:item})}>
            <FlatCard>
                <Text>{item.title}</Text>
            </FlatCard>
        </Pressable>

    )

    return (
        <>
            <Search keyword={keyword} setKeyword={setKeyword} />
            <FlatList
                data={productsFiltered}
                renderItem={renderProductItem}
                keyExtractor={item => item.id}
            />
        </>

    )
}

export default ProductsScreen

const styles = StyleSheet.create({})