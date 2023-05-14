"use client";

import { useAppSelector } from "@/components/store/store";
import buildDdayList from "@/consts/dday/dday_consts";
import dayjs from "dayjs";
import { useEffect, useState } from "react";

export default function AmountSection() {
    const enabledDdayTypes = useAppSelector(state => state.enabledDdayTypes.enabled);
    const enabledDdayGrades = useAppSelector(state => state.enabledDdayGrades.enabled);
    const enabledDdaySemesters = useAppSelector(state => state.enabledDdaySemesters.enabled);
    const buildedDdays = buildDdayList();
    const [isReady, updateStatus] = useState(false);

    const first = dayjs("2023-08-16T08:30:00.000+09:00");
    const second = dayjs("2024-01-05T12:20:00.000+09:00");
    const now = dayjs();

    useEffect(() => {
        setTimeout(() => updateStatus(true), 1000);
    }, []);

    if (!isReady) return <h1 className="!mb-8">로딩중...</h1>;
    return (
        <h1 className="!mb-8">
            디데이 개수:{" "}
            {
                buildedDdays.filter(element => {
                    if (!enabledDdayTypes.includes(element.type)) return false;
                    if (element.date.end < now) return false;

                    if (
                        element.grades !== undefined &&
                        !element.grades.some(grade => enabledDdayGrades.includes(grade))
                    )
                        return false;

                    if (!enabledDdaySemesters.includes("2023-1") && element.date.start < first) return false;
                    if (
                        !enabledDdaySemesters.includes("2023-2") &&
                        element.date.start > first &&
                        element.date.start < second
                    )
                        return false;
                    return !(!enabledDdaySemesters.includes("2024") && element.date.start > second);
                }).length
            }
            개
        </h1>
    );
}
