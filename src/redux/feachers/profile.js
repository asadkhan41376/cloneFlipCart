import axios from "axios"
import { getCookie } from "cookies-next"

const { createSlice } = require("@reduxjs/toolkit")



const initialState = {
    Profile:[],
    isLoading:false,
    HasError:false
}

const Profile = createSlice({
    name:'Profile',
    initialState,
    reducers:{
        setLoading:(state)=>{
state.isLoading=true
        },
   
   setProfileData :(state,action)=>{
        state.isLoading=false
        state.Profile= action.payload
                }
            },      
})

export const {setLoading,setProfileData}= Profile.actions;
export default Profile.reducer


export const getProfileData =()=>{
    return async(dispatch)=>{
        dispatch(Profile.actions.setLoading())
        try {
        const token = getCookie("token")    
        const response = await axios.get('https://dummyjson.com/user/me',{
            headers:{
                'Authorization':`Bearer ${token}`
            }
        })
        console.log(response?.data,"adadsds");
        dispatch(Profile.actions.setProfileData(response?.data))
        
        } catch (error) {
            console.log(error,"ProfileSlice");
            
        }
    }

}