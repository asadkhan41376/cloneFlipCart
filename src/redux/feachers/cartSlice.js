import { createSlice } from "@reduxjs/toolkit";
 
const initialState = {
  items:  [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {

loadDataToLocal:(state)=>{
const storeData = JSON.parse(localStorage.getItem("dataa")) || [];
state.items= storeData
},

    addtocart: (state, action) => {
      const exitingItem = state.items.find(state => state.id == action.payload.id)
      if (exitingItem) {
        exitingItem.quantity++;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
    if(typeof window !== "undefined" ){
      localStorage.setItem("dataa", JSON.stringify(state.items))
      console.log("dataa", state.items);
    }
    },
    removeItem: (state, action) => {
      // state.items = state.items.filter((item) => item.id !== action.payload.id);
      state.items = state.items.filter((item)=>item.id != action.payload.id)
      if(typeof window !== "undefined" ){

        localStorage.setItem("dataa",JSON.stringify(state.items))
      }
    },
   
  },
});

export default cartSlice.reducer;
export const { addtocart, removeItem, setItems,loadDataToLocal } = cartSlice.actions;
