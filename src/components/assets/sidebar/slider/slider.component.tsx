"use client";

import { useAppDispatch } from "@/components/store/store";
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
    const { name, onValue, offValue, dispatcher, enabled } = props;
    const dispatch = useAppDispatch();

    return (
        <ul>
            <p>{name}</p>
            <button type="button" onClick={() => dispatch(dispatcher)}>
                {enabled ? (
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
