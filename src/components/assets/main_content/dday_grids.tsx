"use client";

import { useAppSelector } from "@/components/store/store";
import ddays from "@/consts/dday_consts";
import dayjs from "dayjs";
import DdayBox from "@/components/assets/dday_box/dday_box";
import { useState } from "react";
import birthdays from "@/consts/birthday_consts/birthday_consts";
import { DdayType } from "@/components/assets/dday_box/components/tags/type/type.component";
import styles from "./dday_grids.module.css";

export default function FilteredDdayValues() {
    const [isReady, updateStatus] = useState(false);
    const enabledDdayTypes = useAppSelector(state => state.enabledDdayTypes.enabled);
    const enabledDdayGrades = useAppSelector(state => state.enabledDdayGrades.enabled);
    const enabledDdaySemesters = useAppSelector(state => state.enabledDdaySemesters.enabled);
    const now = dayjs();

    setTimeout(() => updateStatus(true), 1000);

    return isReady ? (
        <div className={styles.content}>
            {ddays.map(dday => {
                if (!enabledDdayTypes.includes(dday.type)) return null;
                if (dday.date.start < now && dday.date.end < now) return null;

                if (
                    !enabledDdaySemesters.includes("2023-1") &&
                    dday.date.start < dayjs("2023-08-16T08:30:00.000+09:00")
                )
                    return null;
                if (
                    !enabledDdaySemesters.includes("2023-2") &&
                    dday.date.start > dayjs("2023-08-16T08:30:00.000+09:00") &&
                    dday.date.start < dayjs("2024-01-05T12:20:00.000+09:00")
                )
                    return null;
                if (!enabledDdaySemesters.includes("2024") && dday.date.start > dayjs("2024-01-01T00:00:00.000+09:00"))
                    return null;

                if (dday.grades !== null && !dday.grades.some(grade => enabledDdayGrades.includes(grade))) return null;

                return (
                    <DdayBox
                        key={`${dday.name}-${dday.type}-${dday.grades}`}
                        name={dday.name}
                        type={dday.type}
                        date={dday.date}
                        grades={dday.grades}
                    />
                );
            })}
            {enabledDdayTypes.includes(DdayType.BIRTHDAY)
                ? birthdays.map(storeList => {
                      if (!enabledDdayGrades.includes(storeList.grade)) return null;
                      return storeList.list.map(birthday => {
                          if (birthday.date.start < now) return null;

                          if (
                              !enabledDdaySemesters.includes("2023-1") &&
                              birthday.date.start < dayjs("2023-08-16T08:30:00.000+09:00")
                          )
                              return null;
                          if (
                              !enabledDdaySemesters.includes("2023-2") &&
                              birthday.date.start > dayjs("2023-08-16T08:30:00.000+09:00") &&
                              birthday.date.start < dayjs("2024-01-05T12:20:00.000+09:00")
                          )
                              return null;
                          if (
                              !enabledDdaySemesters.includes("2024") &&
                              birthday.date.start > dayjs("2024-01-01T00:00:00.000+09:00")
                          )
                              return null;

                          return (
                              <DdayBox
                                  key={`${birthday.name}-birthday-${storeList.grade}-${storeList.class}`}
                                  name={birthday.name}
                                  type={DdayType.BIRTHDAY}
                                  date={birthday.date}
                                  grades={[storeList.grade]}
                              />
                          );
                      });
                  })
                : null}
        </div>
    ) : (
        <div className={styles.loading}>
            <span>Loading...</span>
        </div>
    );
}
