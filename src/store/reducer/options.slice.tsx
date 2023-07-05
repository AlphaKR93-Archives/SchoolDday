import { createSlice } from "@reduxjs/toolkit";
import { setCookie } from "cookies-next";

type stateType = {
    enabled: string[];
};

const slice = createSlice({
    name: "enabledOptions",
    initialState: { enabled: ["showMillisecond"] } as stateType,
    reducers: {
        toggleOptions: (state: stateType, action: { payload: string; type: string }) => {
            if (state.enabled.includes(action.payload))
                state.enabled = state.enabled.filter(option => option !== action.payload);
            else state.enabled.push(action.payload);
            setCookie("enabledOptions", state.enabled.join(" "));
        },
        setEnabledOptions: (state: stateType, action: { payload: string[]; type: string }) => {
            state.enabled = action.payload;
        }
    }
});
export default slice.reducer;

export const { toggleOptions, setEnabledOptions } = slice.actions;
