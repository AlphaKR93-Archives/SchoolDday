"use client";
import buildDday from "@/components/buildDday";
import ddays from "@/resources/ddayStorage";
import { useState } from "react";

const { DateTime } = require("luxon");
const { Interval } = require("luxon");

export default function Home() {
    const [showType, setShowType] = useState([true, true, true, true, true]);
    const [showGrade, setShowGrade] = useState([true, true, true]);
    const [showSemester, setShowSemester] = useState([true, true, true]);

    const passed =
        100 - (Interval.fromDateTimes(DateTime.now(), DateTime.local(2024, 1, 1)).length("days") * 100) / 365;

    return (
        <div className={"font-escore"}>
            <div className={"mx-auto mt-8 w-min"}>
                2023년은 {Math.round(passed)}% 진행되었어요!
                <div className={"mt-3.5 h-6 w-96 rounded-2xl border-2 border-orange-300"}>
                    <div
                        className={"h-5 rounded-2xl bg-orange-300"}
                        style={{ width: Math.round((384 * passed) / 100) + "px" }}
                    ></div>
                </div>
            </div>
            <hr className={"main-hr lg:w-102 mx-auto mt-8 bg-gray-800"} />
            <div className={"type-selector mx-auto mt-4 w-max"}>
                <button
                    className={"exam " + (showType[0] ? " on" : "")}
                    onClick={() => setShowType([!showType[0], showType[1], showType[2], showType[3], showType[4]])}
                >
                    고사
                </button>
                <button
                    className={"holiday " + (showType[1] ? " on" : "")}
                    onClick={() => setShowType([showType[0], !showType[1], showType[2], showType[3], showType[4]])}
                >
                    휴교
                </button>
                <button
                    className={"festival " + (showType[2] ? " on" : "")}
                    onClick={() => setShowType([showType[0], showType[1], !showType[2], showType[3], showType[4]])}
                >
                    행사
                </button>
                <button
                    className={"special " + (showType[3] ? " on" : "")}
                    onClick={() => setShowType([showType[0], showType[1], showType[2], !showType[3], showType[4]])}
                >
                    특별
                </button>
                <button
                    className={"others " + (showType[4] ? " on" : "")}
                    onClick={() => setShowType([showType[0], showType[1], showType[2], showType[3], !showType[4]])}
                >
                    기타
                </button>
            </div>
            <div className={"other-selector mx-auto mt-4 w-max gap-6 lg:flex"}>
                <div className={"grade"}>
                    <button
                        className={showGrade[0] ? " on" : ""}
                        style={{ borderRadius: "12px 0 0 12px" }}
                        onClick={() => setShowGrade([!showGrade[0], showGrade[1], showGrade[2]])}
                    >
                        1학년
                    </button>
                    <button
                        className={"bl0-imp" + (showGrade[1] ? " on" : "")}
                        onClick={() => setShowGrade([showGrade[0], !showGrade[1], showGrade[2]])}
                    >
                        2학년
                    </button>
                    <button
                        className={"bl0-imp" + (showGrade[2] ? " on" : "")}
                        style={{ borderRadius: "0 12px 12px 0" }}
                        onClick={() => setShowGrade([showGrade[0], showGrade[1], !showGrade[2]])}
                    >
                        3학년
                    </button>
                </div>
                <div className={"semester"}>
                    <button
                        className={showSemester[0] ? " on" : ""}
                        style={{ borderRadius: "12px 0 0 12px" }}
                        onClick={() => setShowSemester([!showSemester[0], showSemester[1], showSemester[2]])}
                    >
                        1학기
                    </button>
                    <button
                        className={"bl0-imp" + (showSemester[1] ? " on" : "")}
                        onClick={() => setShowSemester([showSemester[0], !showSemester[1], showSemester[2]])}
                    >
                        2학기
                    </button>
                    <button
                        className={"bl0-imp" + (showSemester[2] ? " on" : "")}
                        style={{ borderRadius: "0 12px 12px 0" }}
                        onClick={() => setShowSemester([showSemester[0], showSemester[1], !showSemester[2]])}
                    >
                        2024
                    </button>
                </div>
            </div>
            <div className={"mx-auto w-min"}>
                {ddays.map(dday => {
                    if (dday[3] > DateTime.now()) {
                        if (0 <= dday[1] && dday[1] <= 3) {
                            if (!showType[dday[1]]) return;
                        } else {
                            if (!showType[4]) return;
                        }

                        if (!showSemester[0] && dday[3].toMillis() < DateTime.local(2023, 8, 16).toMillis()) return;
                        if (
                            !showSemester[1] &&
                            DateTime.local(2023, 8, 16).toMillis() < dday[3].toMillis() &&
                            dday[3].toMillis() < DateTime.local(2024, 3, 1).toMillis()
                        )
                            return;
                        if (!showSemester[2] && DateTime.local(2024, 3, 1).toMillis() < dday[3].toMillis()) return;

                        if (
                            (showGrade[0] && dday[2][0]) ||
                            (showGrade[1] && dday[2][1]) ||
                            (showGrade[2] && dday[2][2])
                        )
                            return buildDday(dday[0], dday[1], dday[2], dday[3]);
                    }
                })}
            </div>
        </div>
    );
}
