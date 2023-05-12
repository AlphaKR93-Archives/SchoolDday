"use client";

import { useAppSelector } from "@/components/store/store";
import buildDdayList from "@/consts/dday/dday_consts";
import { DdayType } from "@/components/assets/dday_box/components/tags/type/type.component";
import dayjs from "dayjs";
import { useState } from "react";

export default function AmountSection() {
    const enabledDdayTypes = useAppSelector(state => state.enabledDdayTypes.enabled);
    const enabledDdayGrades = useAppSelector(state => state.enabledDdayGrades.enabled);
    const enabledDdaySemesters = useAppSelector(state => state.enabledDdaySemesters.enabled);
    const [isReady, updateStatus] = useState(false);
    const now = dayjs();
    let amount = 0;

    setTimeout(() => updateStatus(true), 1000);

    buildDdayList(enabledDdayTypes.includes(DdayType.BIRTHDAY)).forEach(dday => {
        if (!enabledDdayTypes.includes(dday.type)) return;
        if (dday.date.start < now && dday.date.end < now) return;

        if (!enabledDdaySemesters.includes("2023-1") && dday.date.start < dayjs("2023-08-16T08:30:00.000+09:00"))
            return;
        if (
            !enabledDdaySemesters.includes("2023-2") &&
            dday.date.start > dayjs("2023-08-16T08:30:00.000+09:00") &&
            dday.date.start < dayjs("2024-01-05T12:20:00.000+09:00")
        )
            return;
        if (!enabledDdaySemesters.includes("2024") && dday.date.start > dayjs("2024-01-01T00:00:00.000+09:00")) return;

        if (dday.grades !== undefined && !dday.grades.some(grade => enabledDdayGrades.includes(grade))) return;

        amount += 1;
    });

    if (!isReady) return <h1 className="!mb-8">로딩중...</h1>;
    return <h1 className="!mb-8">디데이 개수: {amount}개</h1>;
}
