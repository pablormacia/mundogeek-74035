import { StyleSheet, Text, View, Pressable, Image, ScrollView, useWindowDimensions } from 'react-native'
import { colors } from '../../global/colors';
import { useDispatch } from 'react-redux';
import { addItems } from '../../features/cart/cartSlice';

const ProductScreen = ({ route }) => {
    const { product } = route.params
    const { width } = useWindowDimensions()

    const dispatch = useDispatch()
    return (
        <ScrollView style={styles.productContainer}>
            <Text style={styles.textBrand}>{product.brand}</Text>
            <Text style={styles.textTitle}>{product.title}</Text>
            <Image
                source={{ uri: product.mainImage }}
                alt={product.title}
                width='100%'
                height={width * .7}
                resizeMode='contain'
            />
            <Text style={styles.longDescription}>{product.longDescription}</Text>
            <View style={styles.tagsContainer}>
                <View style={styles.tags}>
                    <Text style={styles.tagText}>Tags : </Text>
                    {
                        product.tags?.map(tag => <Text key={Math.random()} style={styles.tagText}>{tag}</Text>)
                    }
                </View>

                {
                    product.discount > 0 && <View style={styles.discount}><Text style={styles.discountText}>-{product.discount}%</Text></View>
                }
            </View>
            {
                product.stock <= 0 && <Text style={styles.noStockText}>Sin Stock</Text>
            }
            <Text style={styles.price}>Precio: ${product.price}</Text>
            <Pressable
                style={({ pressed }) => [{ opacity: pressed ? 0.95 : 1 }, styles.addToCartButton]}
                onPress={()=>dispatch(addItems({product:product,quantity:1}))}>
                <Text style={styles.textAddToCart}>Agregar al carrito</Text>
            </Pressable>
        </ScrollView>
    )
}

export default ProductScreen

const styles = StyleSheet.create({
    productContainer: {
        paddingHorizontal: 16,
        marginVertical: 16
    },
    textBrand: {
        color: colors.grisOscuro,
    },
    textTitle: {
        fontSize: 24,
        fontWeight: '700'
    },
    longDescription: {
        fontSize: 16,
        textAlign: 'justify',
        paddingVertical: 8,
    },
    tagsContainer: {
        flexDirection: 'row',
        gap: 5,
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 8
    },
    tags: {
        flexDirection: 'row',
        gap: 5,
    },
    tagText: {
        fontWeight: '600',
        fontSize: 14,
        color: colors.purple
    },
    price: {
        fontWeight: '800',
        fontSize: 18
    },
    discount: {
        backgroundColor: colors.brightOrange,
        width: 52,
        height: 52,
        borderRadius: 52,
        alignItems: "center",
        justifyContent: "center"
    },
    discountText: {
        color: colors.white,
        textAlign: 'center',
        verticalAlign: 'center'
    },
    noStockText: {
        color: colors.red
    },
    price: {
        fontSize: 24,
        fontWeight: '700',
        alignSelf: 'center',
        paddingVertical: 16
    },
    addToCartButton: {
        padding: 8,
        paddingHorizontal: 16,
        backgroundColor: colors.purple,
        borderRadius: 16,
        marginVertical: 16
    },
    textAddToCart: {
        color: colors.white,
        fontSize: 24,
        textAlign: 'center',
    }
})