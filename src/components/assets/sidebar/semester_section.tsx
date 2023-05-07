"use client";

import Slider from "@/components/assets/sidebar/slider/slider.component";
import { useAppSelector } from "@/components/store/store";
import { toggleDdaySemester } from "@/components/store/reducer/dday/enabled_semester.slice";

export default function SemesterSection() {
    const enabledTypes = useAppSelector(state => state.enabledDdaySemesters.enabled);

    return (
        <li>
            <h1>표시 학기</h1>
            <Slider
                name="1학기"
                enabled={enabledTypes.includes("2023-1")}
                onValue={{ background: "b11697", shadowPrimary: "961380", shadowSecondary: "cc19ae" }}
                offValue={{ bgPrimary: "ff5df3", bgSecondary: "e64ecc" }}
                dispatcher={toggleDdaySemester("2023-1")}
            />
            <Slider
                name="2학기"
                enabled={enabledTypes.includes("2023-2")}
                onValue={{ background: "db7500", shadowPrimary: "ba6300", shadowSecondary: "fc8700" }}
                offValue={{ bgPrimary: "ffb54c", bgSecondary: "e69840" }}
                dispatcher={toggleDdaySemester("2023-2")}
            />
            <Slider
                name="2024년"
                enabled={enabledTypes.includes("2024")}
                onValue={{ background: "17b082", shadowPrimary: "14966f", shadowSecondary: "1aca96" }}
                offValue={{ bgPrimary: "72ffe2", bgSecondary: "60e6be" }}
                dispatcher={toggleDdaySemester("2024")}
            />
        </li>
    );
}
