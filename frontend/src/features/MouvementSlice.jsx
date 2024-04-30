import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const addMouvement = createAsyncThunk('/addMouvement', async () => {
    const response = await axios.post('http://localhost:3000/api/mouvement');
    return response.data;
});

const mouvementInfoSlice = createSlice({
    name: 'info',
    initialState: {
        info: [],
        status: 'idle',
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(addMouvement.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(addMouvement.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.info = action.payload;
            })
            .addCase(addMouvement.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            });
    },
});

export default mouvementInfoSlice.reducer;
