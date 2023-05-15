"use client";

import { useEffect, useState } from "react";
import dayjs from "dayjs";
import { useAppSelector } from "@/store/store";
import styles from "./counter.module.css";

function process(
    before: {
        days: {
            value: number;
            isChanged: boolean;
        };
        hrs: {
            value: number;
            isChanged: boolean;
        };
        mins: {
            value: number;
            isChanged: boolean;
        };
        secs: {
            value: number;
            isChanged: boolean;
        };
        milli: number;
    },
    diff: number
) {
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hrs = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const mins = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const secs = Math.floor((diff % (1000 * 60)) / 1000);
    const milli = Math.floor(diff % 1000);

    return {
        days: {
            value: days,
            isChanged: days !== before.days.value
        },
        hrs: {
            value: hrs,
            isChanged: hrs !== before.hrs.value
        },
        mins: {
            value: mins,
            isChanged: mins !== before.mins.value
        },
        secs: {
            value: secs,
            isChanged: secs !== before.secs.value
        },
        milli
    };
}

export default function CounterComponent(props: { start: number; end: number }) {
    const milli = useAppSelector(state => state.isMillisecondEnabled.enabled);

    const [isReady, updateStatus] = useState(false);
    const [passed, updatePassed] = useState(false);
    const [isEnded, endDday] = useState(false);
    const [data, setData] = useState({
        days: {
            value: 0,
            isChanged: false
        },
        hrs: {
            value: 0,
            isChanged: false
        },
        mins: {
            value: 0,
            isChanged: false
        },
        secs: {
            value: 0,
            isChanged: false
        },
        milli: 0
    });

    const { start, end } = props;
    const dateStart = dayjs(start);
    const dateEnd = dayjs(end);

    useEffect(() => {
        setTimeout(() => updateStatus(true), 1000);
        const interval = setInterval(() => {
            const now = dayjs();
            if (dateStart < now) {
                if (dateEnd < now) {
                    endDday(true);
                    return;
                }
                updatePassed(true);
            } else if (!passed) {
                setData(process(data, dateStart.diff(now, "milliseconds")));
            } else if (dateEnd < now) endDday(true);
            else setData(process(data, dateEnd.diff(now, "milliseconds")));
        });
        return () => clearInterval(interval);
    });

    if (isReady && !isEnded)
        return (
            <section className={styles.counter}>
                <span className={styles.counter}>
                    <p>{data.days.value.toString().padStart(2, "0")}</p>:
                    <p>{data.hrs.value.toString().padStart(2, "0")}</p>:
                    <p>{data.mins.value.toString().padStart(2, "0")}</p>:
                    <p>{data.secs.value.toString().padStart(2, "0")}</p>
                </span>
                {milli ? <p className={styles.milli}>.{data.milli.toString().padStart(3, "0")}</p> : null}
            </section>
        );
    if (isEnded)
        return (
            <section className={styles.counter}>
                <span className={styles.counter}>Ended!</span>
            </section>
        );

    return (
        <section className={styles.counter}>
            <span className={styles.counter}>Loading...</span>
        </section>
    );
}
