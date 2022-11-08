import { configureStore } from "@reduxjs/toolkit";
import roverSlice from "./roverSlice";

export const store = configureStore({ reducer: roverSlice })
