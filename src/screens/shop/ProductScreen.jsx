import { StyleSheet, Text, View } from 'react-native'

const ProductScreen = ({route}) => {

  const {product} = route.params

  return (
    <View>
      <Text>{product.title}</Text>
    </View>
  )
}

export default ProductScreen

const styles = StyleSheet.create({})