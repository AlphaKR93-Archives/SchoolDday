"use client";

import Slider from "@/components/assets/sidebar/slider/slider.component";
import { useAppSelector } from "@/store/store";
import { toggleDdayType } from "@/store/reducer/dday/enabled_types.slice";
import { DdayType } from "@/components/assets/dday_box/components/tags/type/type.component";

export default function TypeSection() {
    const enabledTypes = useAppSelector(state => state.enabledDdayTypes.enabled);

    return (
        <li>
            <h1>디데이 타입</h1>
            <Slider
                name="지필고사"
                enabled={enabledTypes.includes(DdayType.EXAMINATION)}
                onValue={{ background: "ff4747", shadowPrimary: "d93c3c", shadowSecondary: "ff5252" }}
                offValue={{ bgPrimary: "ff9e9e", bgSecondary: "e68585" }}
                dispatcher={toggleDdayType(DdayType.EXAMINATION)}
            />
            <Slider
                name="휴교"
                enabled={enabledTypes.includes(DdayType.HOLIDAY)}
                onValue={{ background: "2fa220", shadowPrimary: "288a1b", shadowSecondary: "36ba25" }}
                offValue={{ bgPrimary: "70d36e", bgSecondary: "5fb15d" }}
                dispatcher={toggleDdayType(DdayType.HOLIDAY)}
            />
            <Slider
                name="행사"
                enabled={enabledTypes.includes(DdayType.EVENT)}
                onValue={{ background: "2764be", shadowPrimary: "2155a2", shadowSecondary: "2d73db" }}
                offValue={{ bgPrimary: "6db4ff", bgSecondary: "5c97e6" }}
                dispatcher={toggleDdayType(DdayType.EVENT)}
            />
            <Slider
                name="기타"
                enabled={enabledTypes.includes(DdayType.MISCELLANEOUS)}
                onValue={{ background: "7a7a7a", shadowPrimary: "686868", shadowSecondary: "8c8c8c" }}
                offValue={{ bgPrimary: "c5c5c5", bgSecondary: "a6a6a6" }}
                dispatcher={toggleDdayType(DdayType.MISCELLANEOUS)}
            />
            <Slider
                name="생일"
                enabled={enabledTypes.includes(DdayType.BIRTHDAY)}
                onValue={{ background: "ccb128", shadowPrimary: "ad9622", shadowSecondary: "ebcc2e" }}
                offValue={{ bgPrimary: "fff48e", bgSecondary: "e6cd78" }}
                dispatcher={toggleDdayType(DdayType.BIRTHDAY)}
            />
        </li>
    );
}
