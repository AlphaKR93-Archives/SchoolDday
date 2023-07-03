import { createSlice } from "@reduxjs/toolkit";
import { setCookie } from "cookies-next";

const name: string = "dismissedNotifications";
type stateType = {
    dismissed: string[];
};

const slice = createSlice({
    name: name,
    initialState: { dismissed: [""] } as stateType,
    reducers: {
        dismissNotification: (state: stateType, action: { payload: string; type: string }) => {
            if (!state.dismissed.includes(action.payload)) state.dismissed.push(action.payload);
            setCookie(name, state.dismissed.join(" "));
        },
        setDismissedNotification: (state: stateType, action: { payload: string[]; type: string }) => {
            state.dismissed = action.payload;
        }
    }
});
export default slice.reducer;

export const { dismissNotification, setDismissedNotification } = slice.actions;
