import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    favItemsList: [],
    checkFav: false
}

export const favProductSlice = createSlice({
    name: "favItem",
    initialState,
    reducers: {
        addToFav: (state, action) => {
            const favItems = state.favItemsList.find((item) => item.id === action.payload.id);
            if (favItems) {
                alert("Already Exist")
            } else {
                state.favItemsList.push({ ...action.payload });
                state.checkFav = true
            }
        },
        removeFromFav: (state, action) => {
            state.favItemsList = state.favItemsList.filter((item) => item.id === !action.payload.id)
        }
    }
})

export const { addToFav, removeFromFav } = favProductSlice.actions
export default favProductSlice.reducer