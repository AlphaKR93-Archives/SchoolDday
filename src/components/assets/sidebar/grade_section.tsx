"use client";

import Slider from "@/components/assets/sidebar/slider/slider.component";
import { useAppSelector } from "@/components/store/store";
import { toggleDdayGrade } from "@/components/store/reducer/dday/enabled_grades.slice";

export default function GradeSection() {
    const enabledGrades = useAppSelector(state => state.enabledDdayGrades.enabled);

    return (
        <li>
            <h1>표시 학년</h1>
            <Slider
                name="1학년"
                enabled={enabledGrades.includes(1)}
                onValue={{ background: "ff4747", shadowPrimary: "d93c3c", shadowSecondary: "ff5252" }}
                offValue={{ bgPrimary: "ff9e9e", bgSecondary: "e68585" }}
                dispatcher={toggleDdayGrade(1)}
            />
            <Slider
                name="2학년"
                enabled={enabledGrades.includes(2)}
                onValue={{ background: "2764be", shadowPrimary: "2155a2", shadowSecondary: "2d73db" }}
                offValue={{ bgPrimary: "6db4ff", bgSecondary: "5c97e6" }}
                dispatcher={toggleDdayGrade(2)}
            />
            <Slider
                name="3학년"
                enabled={enabledGrades.includes(3)}
                onValue={{ background: "ccb128", shadowPrimary: "ad9622", shadowSecondary: "ebcc2e" }}
                offValue={{ bgPrimary: "fff48e", bgSecondary: "e6cd78" }}
                dispatcher={toggleDdayGrade(3)}
            />
        </li>
    );
}
