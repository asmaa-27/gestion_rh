import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const addaffectation = createAsyncThunk('/addaffectation', async () => {
    const response = await axios.post('http://localhost:3000/api/affectation');
    return response.data;
});

const affectationInfoSlice = createSlice({
    name: 'info',
    initialState: {
        info: [],
        status: 'idle',
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(addaffectation.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(addaffectation.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.info = action.payload;
            })
            .addCase(addaffectation.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            });
    },
});

export default affectationInfoSlice.reducer;
