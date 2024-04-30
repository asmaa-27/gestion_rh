import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const addNotation = createAsyncThunk('/addNotation', async () => {
    const response = await axios.post('http://localhost:3000/api/notation');
    return response.data;
});

const notationInfoSlice = createSlice({
    name: 'info',
    initialState: {
        info: [],
        status: 'idle',
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(addNotation.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(addNotation.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.info = action.payload;
            })
            .addCase(addNotation.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            });
    },
});

export default notationInfoSlice.reducer;
