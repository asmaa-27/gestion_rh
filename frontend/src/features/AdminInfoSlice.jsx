import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const addInfoAdmin= createAsyncThunk('/addInfoAdmin', async () => {
    const response = await axios.post('http://localhost:3000/api/info-administrative');
    return response.data;
});

const adminInfoSlice = createSlice({
    name: 'info',
    initialState: {
        info: [],
        status: 'idle',
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(addInfoAdmin.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(addInfoAdmin.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.info = action.payload;
            })
            .addCase(addInfoAdmin.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            });
    },
});

export default adminInfoSlice.reducer;
