"use client";

import { useAppSelector } from "@/components/store/store";
import buildDdayList from "@/consts/dday/dday_consts";
import { DdayType } from "@/components/assets/dday_box/components/tags/type/type.component";
import dayjs from "dayjs";
import { useEffect, useState } from "react";

export default function AmountSection() {
    const enabledDdayTypes = useAppSelector(state => state.enabledDdayTypes.enabled);
    const enabledDdayGrades = useAppSelector(state => state.enabledDdayGrades.enabled);
    const enabledDdaySemesters = useAppSelector(state => state.enabledDdaySemesters.enabled);
    const [isReady, updateStatus] = useState(false);

    const first = dayjs("2023-08-16T08:30:00.000+09:00");
    const second = dayjs("2024-01-05T12:20:00.000+09:00");
    const now = dayjs();

    let amount = 0;

    useEffect(() => updateStatus(true), []);

    buildDdayList(enabledDdayTypes.includes(DdayType.BIRTHDAY)).forEach(dday => {
        if (!enabledDdayTypes.includes(dday.type)) return;
        if (dday.date.end < now) return;

        if (dday.grades !== undefined && !dday.grades.some(grade => enabledDdayGrades.includes(grade))) return;

        if (!enabledDdaySemesters.includes("2023-1") && dday.date.start < first) return;
        if (!enabledDdaySemesters.includes("2023-2") && dday.date.start > first && dday.date.start < second) return;
        if (!enabledDdaySemesters.includes("2024") && dday.date.start > second) return;

        amount += 1;
    });

    if (!isReady) return <h1 className="!mb-8">로딩중...</h1>;
    return <h1 className="!mb-8">디데이 개수: {amount}개</h1>;
}
