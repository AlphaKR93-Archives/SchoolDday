"use client";

import { useAppSelector } from "@/components/store/store";
import ddays from "@/consts/dday_consts";
import dayjs from "dayjs";
import DdayBox from "@/components/assets/dday_box/dday_box";
import { DdayType } from "@/components/assets/dday_box/components/tags/type/type.component";
import styles from "./dday_grids.module.css";

export default function FilteredDdayValues() {
    const enabledDdayTypes = useAppSelector(state => state.enabledDdayTypes.enabled);
    const enabledDdayGrades = useAppSelector(state => state.enabledDdayGrades.enabled);
    const enabledDdaySemesters = useAppSelector(state => state.enabledDdaySemesters.enabled);

    return (
        <div className={styles.content}>
            {ddays.map(dday => {
                const now = dayjs();

                if (enabledDdayTypes.includes(dday.type)) {
                    if (dday.date.start < now && dday.date.end < now) return;
                    if (!enabledDdaySemesters.includes("2024") && dday.date.start < dayjs("2024-01-01")) return;
                    if (
                        !enabledDdaySemesters.includes("2023-2") &&
                        dday.date.start < dayjs("2023-08-16") &&
                        dday.date.start > dayjs("2023-07-20")
                    )
                        return;
                    if (!enabledDdaySemesters.includes("2023-1") && dday.date.start < dayjs("2023-08-16")) return;

                    return (
                        <DdayBox
                            key={dday.name}
                            name={dday.name}
                            type={dday.type as DdayType}
                            date={{
                                start: dayjs(dday.date.start),
                                end: dayjs(dday.date.end)
                            }}
                            grades={dday.grades}
                        />
                    );
                }
                return null;
            })}
        </div>
    );
}
