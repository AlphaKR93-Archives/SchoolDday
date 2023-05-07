import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
    name: "enabledDdayGrades",
    initialState: {
        enabled: [1, 2, 3]
    },
    reducers: {
        toggleDdayGrade: (state, action) => {
            if ([1, 2, 3].includes(action.payload))
                if (state.enabled.includes(action.payload))
                    state.enabled = state.enabled.filter(type => type !== action.payload);
                else state.enabled.push(action.payload);
        }
    }
});
export default slice.reducer;

export const { toggleDdayGrade } = slice.actions;
