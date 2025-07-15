import { createSlice, current } from "@reduxjs/toolkit";


const userSlice = createSlice({
    name:"user",
    initialState:{
        userEmail:""
    },
    reducers:{
        setUser: (state,action)=>{
            state.userEmail=action.payload
        },
        clearUser: (state)=>{
            state.userEmail=""
        },

    }
})

export const {setUser,clearUser} = userSlice.actions

export default userSlice.reducer