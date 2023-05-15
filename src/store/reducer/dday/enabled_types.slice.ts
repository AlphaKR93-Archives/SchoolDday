import { createSlice } from "@reduxjs/toolkit";
import { setCookie } from "cookies-next";
import { DdayType } from "@/components/assets/dday_box/components/tags/type/type.component";

const slice = createSlice({
    name: "enabledDdayTypes",
    initialState: {
        enabled: [DdayType.MISCELLANEOUS, DdayType.EXAMINATION, DdayType.HOLIDAY, DdayType.EVENT]
    } as { enabled: DdayType[] },
    reducers: {
        toggleDdayType: (state, action: { payload: DdayType; type: string }) => {
            if (state.enabled.includes(action.payload))
                state.enabled = state.enabled.filter(type => type !== action.payload);
            else state.enabled.push(action.payload);
            setCookie("enabled_dday_types", state.enabled.join(" "));
        },
        setEnabledDdayTypes: (state, action) => {
            state.enabled = action.payload;
        }
    }
});
export default slice.reducer;

export const { toggleDdayType, setEnabledDdayTypes } = slice.actions;
