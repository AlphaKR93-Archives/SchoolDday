"use client";
import { useEffect, useState } from "react";

const { DateTime } = require("luxon");

export default function CalculateRemain(props: any) {
    const target = DateTime.fromMillis(props.date);
    const [isReady, setReady] = useState(false);

    const [diff, updateDiff] = useState({
        day: {
            value: "00",
            isChanged: false
        },
        hrs: {
            value: "00",
            isChanged: false
        },
        min: {
            value: "00",
            isChanged: false
        },
        sec: {
            value: "00",
            isChanged: false
        }
    });

    useEffect(() => {
        const interval = setInterval(() => {
            updateDiff(
                processDifference(
                    [diff.day.value, diff.hrs.value, diff.min.value, diff.sec.value],
                    props.date - DateTime.now().setZone("Asia/Seoul").toMillis()
                )
            );
        }, 500);

        return () => clearInterval(interval);
    });
    setTimeout(() => {
        setReady(true);
    }, 1000);

    return (
        <div className={"date"}>
            {target.year}년 {target.month}월 {target.day}일 (D-{diff.day.value})
            {isReady ? (
                <div className={"date-section flex justify-center text-5xl"}>
                    <div className={diff.day.isChanged ? "changed" : ""}>{diff.day.value}</div>:
                    <div className={diff.hrs.isChanged ? "changed" : ""}>{diff.hrs.value}</div>:
                    <div className={diff.min.isChanged ? "changed" : ""}>{diff.min.value}</div>:
                    <div className={diff.sec.isChanged ? "changed" : ""}>{diff.sec.value}</div>
                </div>
            ) : (
                <div className={"text-5xl"}>Loading...</div>
            )}
        </div>
    );
}

function processDifference(before: [string, string, string, string], diff: number) {
    const day = Math.floor(diff / (1000 * 60 * 60 * 24))
        .toString()
        .padStart(2, "0");
    const hrs = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
        .toString()
        .padStart(2, "0");
    const min = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))
        .toString()
        .padStart(2, "0");
    const sec = Math.floor((diff % (1000 * 60)) / 1000)
        .toString()
        .padStart(2, "0");

    return {
        day: {
            value: day,
            isChanged: day !== before[0]
        },
        hrs: {
            value: hrs,
            isChanged: hrs !== before[1]
        },
        min: {
            value: min,
            isChanged: min !== before[2]
        },
        sec: {
            value: sec,
            isChanged: sec !== before[3]
        }
    };
}
