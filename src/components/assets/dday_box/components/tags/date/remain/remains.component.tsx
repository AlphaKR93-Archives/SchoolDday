"use client";

import dayjs from "dayjs";
import { useEffect, useState } from "react";

export default function RemainDateComponent(props: { start: number; end: number }) {
    const [isReady, updateStatus] = useState(false);
    const [isEnded, endDday] = useState(false);
    const [passed, updatePassed] = useState(false);
    const [remain, updateRemain] = useState(0);

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
                updateRemain(Math.round(dateStart.diff(dayjs(), "milliseconds") / (1000 * 60 * 60 * 24)));
            } else if (dateEnd < now) endDday(true);
            else updateRemain(Math.round(dateEnd.diff(dayjs(), "milliseconds") / (1000 * 60 * 60 * 24)));
        });
        return () => clearInterval(interval);
    }, [dateStart, passed, dateEnd]);

    return (
        <p
            style={{
                background:
                    passed && !isEnded
                        ? "linear-gradient(145deg, #f75050, #d04444)"
                        : "linear-gradient(145deg, #898989, #737373)"
            }}
        >
            {/* eslint-disable-next-line no-nested-ternary */}
            {isReady ? (isEnded ? "Ended" : `D-${remain}`) : "Loading"}
        </p>
    );
}
