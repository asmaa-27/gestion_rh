import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const adddiplome = createAsyncThunk('/adddiplome', async () => {
    const response = await axios.post('http://localhost:3000/api/diplome');
    return response.data;
});

const diplomeInfoSlice = createSlice({
    name: 'info',
    initialState: {
        info: [],
        status: 'idle',
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(adddiplome.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(adddiplome.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.info = action.payload;
            })
            .addCase(adddiplome.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            });
    },
});

export default diplomeInfoSlice.reducer;
