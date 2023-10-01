import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { baseUrl } from "../../ApiConstant/api";
import { useNavigate } from "react-router-dom";


const initialState = {
    user: null,
    token: "",
    error: "",
    loading: false
}

export const userLogin = createAsyncThunk(
    "login/userLogin",
    async (body) => {
        let formBody = new FormData();
        formBody.append('email', body.email);
        formBody.append('password', body.password);
        const res = await fetch(baseUrl + "login",
            {
                method: "POST",
                body: JSON.stringify(body),
                headers: new Headers({
                    'Content-Type': 'application/json'
                }),
            })
        const data = await res.json();
        return data



    }
)

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        logout: (state, action) => {
            state.token = ""
            state.user = null
        }
    },
    extraReducers: {
        [userLogin.pending]: (state) => {
            state.loading = true
        },
        [userLogin.fulfilled]: (state, { payload }) => {
            state.loading = false;
            state.token = payload?.token
            state.user = payload?.user
        }
    }
})

export const authReducer = authSlice.reducer

export const { logout } = authSlice.actions