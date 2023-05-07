import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import enabledDdayTypesReducer from "./reducer/dday/enabled_types.slice";
import enabledDdayGradesReducer from "./reducer/dday/enabled_grades.slice";
import enabledDdaySemestersReducer from "./reducer/dday/enabled_semester.slice";

const store = configureStore({
    reducer: {
        enabledDdayTypes: enabledDdayTypesReducer,
        enabledDdayGrades: enabledDdayGradesReducer,
        enabledDdaySemesters: enabledDdaySemestersReducer
    },
    devTools: process.env.NODE_ENV !== "production"
});
export default store;

export const useAppDispatch = () => useDispatch<typeof store.dispatch>();
export const useAppSelector: TypedUseSelectorHook<ReturnType<typeof store.getState>> = useSelector;
