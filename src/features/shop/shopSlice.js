import { createSlice, current } from "@reduxjs/toolkit";
import categories from "../../data/categories.json"
import products from "../../data/products.json"

const shopSlice = createSlice({
    name:"shop",
    initialState:{
        categories,
        products,
        categorySelected:"",
        productsFilteredByCategory: [],
        productSelected: {}
    },
    reducers:{
        setCategorieSelected: (state,action)=>{
            state.categorySelected = action.payload
            console.log(current(state).categorySelected)
        },
        filterProducts: (state,action)=>{
            state.productsFilteredByCategory = products.filter(product=>product.category.toLowerCase()===state.categorySelected.toLowerCase())
        },
        setProductSelect: (state,action)=>{
            state.productSelected=action.payload
        }
    }
})

export const {setCategorieSelected,filterProducts,setProductSelect} = shopSlice.actions

export default shopSlice.reducer