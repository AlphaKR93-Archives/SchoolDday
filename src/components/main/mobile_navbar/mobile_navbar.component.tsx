"use client";

import { ChevronUpIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import Sidebar from "@/components/main/sidebar/sidebar";
import ButtonSection from "@/components/main/sidebar/button_section";
import Link from "next/link";
import * as pack from "../../../../package.json";
import styles from "./mobile_navbar.module.css";

export default function MobileNavigationBarComponent() {
    const [enabled, setEnabled] = useState(false);
    const [sidebarEnabled, setSidebarEnabled] = useState(false);
    const [buttonsEnabled, setButtonsEnabled] = useState(false);

    function toggle() {
        if (enabled) {
            setEnabled(false);
            setTimeout(() => setButtonsEnabled(false), 150);
            setTimeout(() => setSidebarEnabled(false), 500);
        } else {
            setEnabled(true);
            setSidebarEnabled(true);
            setTimeout(() => setButtonsEnabled(true), 150);
        }
    }

    return (
        <div className={styles.navbar} data-enabled={enabled}>
            <div className={styles.real} data-enabled={sidebarEnabled}>
                <div className={styles.sidebar}>
                    <Sidebar button={false} />
                </div>
                <div className={styles.touchSection} data-enabled={buttonsEnabled}>
                    <div className={styles.buttons}>
                        <ButtonSection />
                    </div>
                    <div className={styles.links}>
                        <Link href="/" onClick={() => toggle()}>
                            디데이
                        </Link>
                        <Link href="/links" onClick={() => toggle()}>
                            유용한 링크
                        </Link>
                        <Link href="/about" onClick={() => toggle()}>
                            사이트 정보
                        </Link>
                    </div>
                    <p className={styles.license}>(C) 2023 AlphaKR93, Licensed under MIT License.</p>
                </div>
            </div>
            <button className={styles.button} type="button" onClick={() => toggle()}>
                <span className={styles.title}>
                    <p />
                    <span>
                        <h1>석동중 디데이</h1>
                        <p>버전 {pack.version}</p>
                    </span>
                    <ChevronUpIcon />
                </span>
            </button>
        </div>
    );
}
