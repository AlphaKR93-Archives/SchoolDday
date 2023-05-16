"use client";

import Slider from "@/components/assets/slider/slider.component";
import { useAppSelector } from "@/store/store";
import { toggleMillisecond } from "@/store/reducer/dday/is_millisecond_enabled.reducer";

export default function OptionsSection() {
    const enabled = useAppSelector(state => state.isMillisecondEnabled.enabled);

    return (
        <li>
            <h1>표시 옵션</h1>
            <Slider
                name="밀리초 표시"
                enabled={enabled}
                onValue={{ background: "7a7a7a", shadowPrimary: "686868", shadowSecondary: "8c8c8c" }}
                offValue={{ bgPrimary: "c5c5c5", bgSecondary: "a6a6a6" }}
                dispatcher={toggleMillisecond()}
            />
        </li>
    );
}
