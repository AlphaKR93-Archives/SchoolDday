"use client";

import InformationCircleIcon from "@heroicons/react/24/solid/InformationCircleIcon";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { useAppDispatch, useAppSelector } from "@/store/store";
import { dismissNotification } from "@/store/reducer/notifications.slice";
import { useEffect, useState } from "react";
import styles from "./index.module.css";

export default function IndexNotification() {
    const [isReady, updateStatus] = useState(false);
    const dismissedNotifications = useAppSelector(state => state.dismissedNotifications.dismissed);
    const dispatch = useAppDispatch();

    useEffect(() => {
        setTimeout(() => updateStatus(true), 1000);
    }, []);

    return !dismissedNotifications.includes("support") && isReady ? (
        <div className={styles.support}>
            <div>
                <InformationCircleIcon />
                <span>
                    생일 추가, 오류 신고는 <a href="https://www.instagram.com/alphakr93/">인스타그램 DM</a> 또는{" "}
                    <a href="https://open.kakao.com/me/alphakr93_education">카카오톡 오픈채팅</a> 으로 문의하실 수
                    있습니다.
                </span>
            </div>
            <button type="button" onClick={() => dispatch(dismissNotification("support"))}>
                <XMarkIcon />
            </button>
        </div>
    ) : (
        <div />
    );
}
