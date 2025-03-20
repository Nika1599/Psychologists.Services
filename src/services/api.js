import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { ref, get } from "firebase/database";
import { db } from "../../fireBase";

export const fetchPsychologists = createAsyncThunk(
  "psychologists/fetchPsychologists",
  async (_, { rejectWithValue }) => {
    try {
      const psychologistsRef = ref(db, "psychologists");
      const snapshot = await get(psychologistsRef);
      if (snapshot.exists()) {
        const data = snapshot.val();
        return Object.entries(data).map(([id, psychologist]) => ({
          id,
          ...psychologist,
        }));
      } else {
        return [];
      }
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
