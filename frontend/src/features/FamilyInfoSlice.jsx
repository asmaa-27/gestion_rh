import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const addInfofamily = createAsyncThunk('/addInfofamily', async () => {
    const response = await axios.post('http://localhost:3000/api/info-familiale');
    return response.data;
});

const familyInfoSlice = createSlice({
    name: 'info',
    initialState: {
        info: [],
        status: 'idle',
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(addInfofamily.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(addInfofamily.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.info = action.payload;
            })
            .addCase(addInfofamily.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            });
    },
});

export default familyInfoSlice.reducer;
