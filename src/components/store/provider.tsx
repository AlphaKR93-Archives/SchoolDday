"use client";

import { Provider } from "react-redux";
import React from "react";
import { getCookie } from "cookies-next";
import { setEnabledDdayTypes } from "@/components/store/reducer/dday/enabled_types.slice";
import { setEnabledDdayGrades } from "@/components/store/reducer/dday/enabled_grades.slice";
import { setEnabledDdaySemesters } from "@/components/store/reducer/dday/enabled_semester.slice";
import { setMillisecondStatus } from "@/components/store/reducer/dday/is_millisecond_enabled.reducer";
import store, { useAppDispatch } from "./store";

function LoadCookies() {
    const dispatch = useAppDispatch();

    const enabledDdayTypes = getCookie("enabled_dday_types");
    const enabledDdayGrades = getCookie("enabled_dday_grades");
    const enabledDdaySemesters = getCookie("enabled_dday_semesters");
    const isMillisecondEnabled = getCookie("is_millisecond_enabled");

    if (typeof enabledDdayTypes === "string") dispatch(setEnabledDdayTypes(enabledDdayTypes.split(" ")));
    if (typeof enabledDdayGrades === "string")
        dispatch(setEnabledDdayGrades(enabledDdayGrades.split(" ").map(grade => Number(grade))));
    if (typeof enabledDdaySemesters === "string") dispatch(setEnabledDdaySemesters(enabledDdaySemesters.split(" ")));
    if (typeof isMillisecondEnabled === "string") dispatch(setMillisecondStatus(isMillisecondEnabled === "true"));

    return <div />;
}

export default function Providers({ children }: { children: React.ReactNode }) {
    return (
        <Provider store={store}>
            <LoadCookies />
            {children}
        </Provider>
    );
}
