import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
    name: "enabledDdaySemesters",
    initialState: {
        enabled: ["2023-1", "2023-2", "2024"]
    },
    reducers: {
        toggleDdaySemester: (state, action) => {
            if ([1, 2, 3].includes(action.payload))
                if (state.enabled.includes(action.payload))
                    state.enabled = state.enabled.filter(type => type !== action.payload);
                else state.enabled.push(action.payload);
        }
    }
});
export default slice.reducer;

export const { toggleDdaySemester } = slice.actions;
