import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
    categoryList: [],
    loading: false
}

export const getCategory = createAsyncThunk(
    "category/getCategory",
    async () => {
        const res = await fetch("http://localhost:5000/api/category", {
            // mode: 'no-cors',
            method: 'GET',
            headers: new Headers({
                'Accept': 'application/json',
                // 'Content-Type': 'application/json'
            })
        }
        )
        const resJson = await res.json()
        return resJson
    }
)

export const categorySlice = createSlice({
    name: 'category',
    initialState,
    reducers: {},
    extraReducers: {
        [getCategory.pending]: (state) => {
            state.loading = true
            // state.categoryList = []
        },
        [getCategory.fulfilled]: (state, { payload }) => {
            state.categoryList = payload?.data
        },
        [getCategory.rejected]: (state) => {
            state.loading = false
            state.categoryList = []
        }
    }
})

export const categoryReducer = categorySlice.reducer