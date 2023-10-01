import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { baseUrl } from "../../ApiConstant/api";

const initialState = {
    entities: [],
    productInfo: null,
    productImages: null,
    sampleImages: [],
    loading: false
}

// export const getProduct = createAsyncThunk(
//     "product/getProduct",
//     async () => {
//         const res = await fetch("https://fakestoreapi.com/products")
//         const resJson = await res.json()
//         return resJson
//     }
// )

export const getProduct = createAsyncThunk(
    "product/getProduct",
    async () => {
        const res = await fetch(baseUrl + "products", {
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

export const productSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
        addProductInfo: (state, action) => {
            state.productInfo = action.payload
            console.log("state.productInfo ", state.productInfo)
        },
        addProductImage: (state, action) => {
            state.productImages = action.payload
            console.log("state.productImages", state.productImages)
        },
        addSampleImages: (state, action) => {
            state.sampleImages = action.payload
            console.log("state.sampleImages", state.sampleImages)
        }

    },
    extraReducers: {
        [getProduct.pending]: (state) => {
            state.loading = true;
            // state.entities  = []
        },
        [getProduct.fulfilled]: (state, { payload }) => {

            state.loading = false;
            state.entities = payload?.data
            // console.log("entities===", state.entities)

            // const newArr1 = state.entities.map(v => ({ ...v, isActive: false }))
            // console.log("newArr1 ==== ", newArr1)
            // state.entities = newArr1
            // console.log("entities2 ======", state.entities)

        },
        [getProduct.rejected]: (state) => {
            state.loading = false
            state.entities  = []

        }
    }
})

export const { addProductInfo, addProductImage, addSampleImages } = productSlice.actions;

export const productReducer = productSlice.reducer