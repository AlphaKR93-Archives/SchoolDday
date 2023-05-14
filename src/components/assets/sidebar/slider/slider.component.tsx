"use client";

import { useAppDispatch } from "@/components/store/store";
import { useEffect, useState } from "react";
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
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        payload: any;
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
            <button type="button" onClick={() => dispatch(dispatcher)}>
                {enabled && isReady ? (
                    <div
                        className={styles.button_on}
                        style={{
                            background: `#${onValue.background}`,
                            boxShadow: `inset 5px 5px 5px #${onValue.shadowPrimary}, inset -5px -5px 5px #${onValue.shadowSecondary}`
                        }}
                    >
                        <div className={styles.inner} />
                    </div>
                ) : (
                    <div className={styles.button}>
                        <div
                            className={styles.inner}
                            style={{
                                background: `linear-gradient(145deg, #${offValue.bgPrimary}, #${offValue.bgSecondary})`
                            }}
                        />
                    </div>
                )}
            </button>
        </ul>
    );
}
