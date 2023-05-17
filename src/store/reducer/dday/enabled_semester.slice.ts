import { createSlice } from "@reduxjs/toolkit";
import { setCookie } from "cookies-next";

const slice = createSlice({
    name: "enabledDdaySemesters",
    initialState: {
        enabled: ["2023-1", "2023-2", "2024"]
    },
    reducers: {
        toggleDdaySemester: (state, action) => {
            if (["2023-1", "2023-2", "2024"].includes(action.payload))
                if (state.enabled.includes(action.payload))
                    state.enabled = state.enabled.filter(type => type !== action.payload);
                else state.enabled.push(action.payload);
            setCookie("enabled_dday_semesters", state.enabled.join(" "));
        },
        setEnabledDdaySemesters: (state, action) => {
            state.enabled = action.payload;
        }
    }
});
export default slice.reducer;

export const { toggleDdaySemester, setEnabledDdaySemesters } = slice.actions;
