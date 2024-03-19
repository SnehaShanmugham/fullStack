import { createSlice } from "@reduxjs/toolkit"

const initialState= {
    isAuthenticated:false,
    // token:'',
    name:'',
    email:'',
    mobile:'',
    role:'user'
}

const UserSlice=createSlice({
    name:'auth',
    initialState,
    reducers:{
        
        setAuthenticated: (state,action)=>{
            state.isAuthenticated=action.payload
        },
        setName: (state,action)=>{
            state.name=action.payload
        },
        setRole: (state,action)=>{
            state.role=action.payload
        },
        setEmail: (state,action)=>{
            state.email=action.payload
        },
        setMobile: (state,action)=>{
            state.mobile=action.payload
        }
    }
})

export const {setAuthenticated,setRole,setEmail,setMobile,setName}=UserSlice.actions;
export default UserSlice.reducer;