import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { baseUrl } from "../../ApiConstant/api";

const initialState = {
    brandList: [],
    loading: false
}

export const getBrand = createAsyncThunk(
    "brand/getBrand",
    async () => {
        const res = await fetch(baseUrl + "brands", {
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


export const brandSlice = createSlice({
    name: 'brand',
    initialState,
    reducers: {},
    extraReducers: {
        [getBrand.pending]: (state) => {
            state.loading = true
            // state.brandList = []
        },
        [getBrand.fulfilled]: (state, { payload }) => {
            state.brandList = payload?.data
        },
        [getBrand.rejected]: (state) => {
            state.loading = false
            state.brandList = []
        }
    }
})

export const brandReducer = brandSlice.reducer