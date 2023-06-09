"use client";

import { useAppDispatch } from "@/store/store";
import React, { useEffect, useState } from "react";
import { DdayType } from "@/components/modules/dday_box/components/tags/type/type.component";
import styles from "./slider.module.css";

type SliderProps = {
    name: string;
    onValue: {
        background: string;
        shadowPrimary: string;
        shadowSecondary: string;
    };
    offValue: {
        bgPrimary: string;
        bgSecondary: string;
    };
    dispatcher: {
        payload: DdayType | string | number | undefined;
        type: string;
    };
    enabled: boolean;
};

export default function Slider(props: SliderProps) {
    const [isReady, updateStatus] = useState(false);

    const { name, onValue, offValue, dispatcher, enabled } = props;
    const dispatch = useAppDispatch();

    useEffect(() => {
        setTimeout(() => updateStatus(true), 1000);
    }, []);

    return (
        <ul>
            <p className="text-primary">{name}</p>
            <button
                type="button"
                onClick={() => dispatch(dispatcher)}
                className={styles.button}
                data-enabled={enabled && isReady}
                style={
                    {
                        "--on-bg": onValue.background,
                        "--on-shadow-pri": onValue.shadowPrimary,
                        "--on-shadow-sec": onValue.shadowSecondary,
                        "--off-bg-pri": offValue.bgPrimary,
                        "--off-bg-sec": offValue.bgSecondary
                    } as React.CSSProperties
                }
            >
                <div className={styles.inner} />
            </button>
        </ul>
    );
}
