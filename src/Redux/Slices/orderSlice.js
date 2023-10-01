import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { baseUrl } from "../../ApiConstant/api";

const initialState = {
    orderList: [],
    loading: false
}


export const getOrder = createAsyncThunk(
    "order/getOrder",
    async () => {
        const res = await fetch(baseUrl + "order", {
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

export const orderSlice = createSlice({
    name: 'order',
    initialState,
    reducers: {},
    extraReducers: {
        [getOrder.pending]: (state) => {
            state.loading = true
        },
        [getOrder.fulfilled]: (state, { payload }) => {
            state.orderList = payload?.data
        },
        [getOrder.rejected]: (state) => {
            state.loading = false
            state.orderList = []
        }
    }
})

export const orderReducer = orderSlice.reducer