import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import Header from './src/components/Header';
import CategoriesScreen from './src/screens/CategoriesScreen';
import ProductsScreen from './src/screens/ProductsScreen';
import { useState } from 'react';

export default function App() {
  const [categorySelected, setCategorySelected] = useState("")

  return (
    <>
      <Header title="Mundo Geek" />
      <StatusBar style="light" />
      {
        categorySelected
        ?
        <ProductsScreen category={categorySelected} />
        :
        <CategoriesScreen setCategorySelected={setCategorySelected}/>
      }
    </>
  );
}

const styles = StyleSheet.create({

});
