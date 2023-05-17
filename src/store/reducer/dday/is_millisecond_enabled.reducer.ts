import { createSlice } from "@reduxjs/toolkit";
import { setCookie } from "cookies-next";

const slice = createSlice({
    name: "isMillisecondEnabled",
    initialState: {
        enabled: false
    },
    reducers: {
        toggleMillisecond: state => {
            state.enabled = !state.enabled;
            setCookie("is_millisecond_enabled", state.enabled ? "true" : "false");
        },
        setMillisecondStatus: (state, action) => {
            state.enabled = action.payload;
        }
    }
});
export default slice.reducer;

export const { toggleMillisecond, setMillisecondStatus } = slice.actions;
