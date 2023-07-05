import { createSlice } from "@reduxjs/toolkit";
import { setCookie } from "cookies-next";

type stateType = {
    dismissed: string[];
};

const slice = createSlice({
    name: "dismissedNotifications",
    initialState: { dismissed: [""] } as stateType,
    reducers: {
        dismissNotification: (state: stateType, action: { payload: string; type: string }) => {
            if (!state.dismissed.includes(action.payload)) state.dismissed.push(action.payload);
            setCookie("dismissedNotifications", state.dismissed.join(" "));
        },
        setDismissedNotification: (state: stateType, action: { payload: string[]; type: string }) => {
            state.dismissed = action.payload;
        }
    }
});
export default slice.reducer;

export const { dismissNotification, setDismissedNotification } = slice.actions;
