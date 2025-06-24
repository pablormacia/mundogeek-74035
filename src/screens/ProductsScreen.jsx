import { StyleSheet, Text, View, FlatList } from 'react-native'
import products from '../data/products.json'
import FlatCard from '../components/FlatCard'
import { colors } from '../global/colors'
import { useEffect,useState } from 'react'

const ProductsScreen = ({category}) => {
    const [productsFiltered,setProductsFiltered] = useState([])

    useEffect(()=>{
        setProductsFiltered(products.filter(product=>product.category.toLowerCase()===category.toLowerCase()))
    },[category])

    const renderProductItem = ({ item }) => (
        <FlatCard>
            <Text>{item.title}</Text>
        </FlatCard>

    )

    return (
        <FlatList
            data={productsFiltered}
            renderItem={renderProductItem}
            keyExtractor={item => item.id}
        />
    )
}

export default ProductsScreen

const styles = StyleSheet.create({})