"use client";

import { Provider } from "react-redux";
import React from "react";
import { getCookie } from "cookies-next";
import { setEnabledDdayTypes } from "@/store/reducer/dday/enabled_types.slice";
import { setEnabledDdayGrades } from "@/store/reducer/dday/enabled_grades.slice";
import { setEnabledDdaySemesters } from "@/store/reducer/dday/enabled_semester.slice";
import { ThemeProvider as NextThemeProvider } from "next-themes";
import store, { useAppDispatch } from "./store";
import { setDismissedNotification } from "./reducer/notifications.slice";
import { setEnabledOptions } from "./reducer/options.slice";

function LoadCookies() {
    const dispatch = useAppDispatch();

    const enabledDdayTypes = getCookie("enabled_dday_types");
    const enabledDdayGrades = getCookie("enabled_dday_grades");
    const enabledDdaySemesters = getCookie("enabled_dday_semesters");
    const enabledOptions = getCookie("enabledOptions");
    const dismissedNotifications = getCookie("dismissedNotifications");

    if (typeof enabledDdayTypes === "string") dispatch(setEnabledDdayTypes(enabledDdayTypes.split(" ")));
    if (typeof enabledDdayGrades === "string")
        dispatch(setEnabledDdayGrades(enabledDdayGrades.split(" ").map(grade => Number(grade))));
    if (typeof enabledDdaySemesters === "string") dispatch(setEnabledDdaySemesters(enabledDdaySemesters.split(" ")));
    if (typeof enabledOptions === "string") dispatch(setEnabledOptions(enabledOptions.split(" ")));
    if (typeof dismissedNotifications === "string")
        dispatch(setDismissedNotification(dismissedNotifications.split(" ")));

    return <div />;
}

export default function Providers({ children }: { children: React.ReactNode }) {
    return (
        <NextThemeProvider disableTransitionOnChange>
            <Provider store={store}>
                <LoadCookies />
                {children}
            </Provider>
        </NextThemeProvider>
    );
}
