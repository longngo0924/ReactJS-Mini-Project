import { createSlice } from "@reduxjs/toolkit";

const photoSlice = createSlice({
    name: "photoSlice",
    initialState: [],
    reducers: {
        addPhoto: (state, action) => {
            state.push(action.payload);
        },
        removePhoto: (state, action) => {
            return state.filter((photo) => photo.id !== action.payload);
        },
        updatePhoto: (state, action) => {
            const newPhoto = action.payload;
            const index = state.findIndex((photo) => photo.id === newPhoto.id);
            if (index >= 0) {
                state[index] = newPhoto;
            }
        },
    },
});

const { reducer, actions } = photoSlice;
export const { addPhoto, removePhoto, updatePhoto } = actions;
export default reducer;
