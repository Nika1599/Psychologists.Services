import { createSlice } from "@reduxjs/toolkit";
import { fetchPsychologists } from "../services/api";

export const psychologistSlice = createSlice({
  name: "psychologists",
  initialState: {
    psychologists: [],
    favorites: JSON.parse(localStorage.getItem("favorites")) || [],
    status: "idle",
    error: null,
  },
  reducers: {
    toggleFavorites: (state, action) => {
      const psychologist = action.payload;
      if (state.favorites.some((fav) => fav.id === psychologist.id)) {
        state.favorites = state.favorites.filter(
          (fav) => fav.id !== psychologist.id
        );
      } else {
        state.favorites.push(psychologist);
      }
      localStorage.setItem("favorites", JSON.stringify(state.favorites));
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPsychologists.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchPsychologists.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.psychologists = action.payload;
      })
      .addCase(fetchPsychologists.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});

export const { toggleFavorites } = psychologistSlice.actions;
export default psychologistSlice.reducer;
