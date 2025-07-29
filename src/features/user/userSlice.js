import { createSlice, current } from "@reduxjs/toolkit";


const userSlice = createSlice({
    name:"user",
    initialState:{
        userEmail:"",
        localId:"",
        profilePicture:""
    },
    reducers:{
        setUser: (state,action)=>{
            state.userEmail=action.payload.email
            state.localId=action.payload.localId
        },
        clearUser: (state)=>{
            state.userEmail="",
            state.localId="",
            state.profilePicture=""
        },
        setProfilePicture: (state, action)=>{
            state.profilePicture = action.payload
        }

    }
})

export const {setUser,clearUser, setProfilePicture} = userSlice.actions

export default userSlice.reducer