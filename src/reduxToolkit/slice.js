import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const URL = "https://66f38c9f71c84d8058790dec.mockapi.io/bikes";

const fetchBikes = createAsyncThunk('fetchBikes', async () => {
    try {
        const response = await axios.get(`${URL}`)
        return response.data;
    } catch (error) {
        console.log(error)
    }
});

const addBike = createAsyncThunk('addBike', async (data) => {
    try {
        const response = await axios.post(`${URL}`, data.body)
        return response.data;
    } catch (error) {
        console.log(error)
    }
});

const filterBikes = createAsyncThunk('filterBikes', async (data) => {
    try {
        const response = await axios.get(`${URL}?categoryName=${data}`)
        return response.data;
    } catch (error) {
        console.log(error)
    }
});

const bikeSlice = createSlice({
    name: "bikes",
    initialState: { value: [] },
    reducers: {
        setBikes: (state, action) => {
            state.value = action.payload
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchBikes.fulfilled, (state, action) => {
            state.value = action.payload
        })
        builder.addCase(addBike.fulfilled, (state, action) => {
            state.value = [...state.value, action.payload]
        })
        builder.addCase(filterBikes.fulfilled, (state, action) => {
            state.value = action.payload
        })
    }
});


export { fetchBikes, addBike, filterBikes }
export const { setBikes } = bikeSlice.actions
export default bikeSlice.reducer;