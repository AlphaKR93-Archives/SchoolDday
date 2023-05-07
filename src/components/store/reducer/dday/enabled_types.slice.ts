import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
    name: "enabledDdayTypes",
    initialState: {
        enabled: ["exam", "holiday", "event", "miscellaneous"]
    },
    reducers: {
        toggleDdayType: (state, action) => {
            if (["exam", "holiday", "event", "miscellaneous", "birthday"].includes(action.payload))
                if (state.enabled.includes(action.payload))
                    state.enabled = state.enabled.filter(type => type !== action.payload);
                else state.enabled.push(action.payload);
        }
    }
});
export default slice.reducer;

export const { toggleDdayType } = slice.actions;
