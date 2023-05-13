"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { ComputerDesktopIcon, MoonIcon, SunIcon } from "@heroicons/react/24/outline";
import styles from "@/components/main/header/header.module.css";

export default function ThemeButton() {
    const [isReady, updateStatus] = useState(false);
    const { theme, setTheme } = useTheme();

    useEffect(() => updateStatus(true), []);

    if (!isReady) return <SunIcon className={styles.icon} />; // TODO: Replace with loading icon

    switch (theme) {
        case "system":
            return (
                <button type="button" onClick={() => setTheme("light")}>
                    <ComputerDesktopIcon className={styles.icon} />
                </button>
            );
        case "light":
            return (
                <button type="button" onClick={() => setTheme("dark")}>
                    <SunIcon className={styles.icon} />
                </button>
            );
        case "dark":
            return (
                <button type="button" onClick={() => setTheme("system")}>
                    <MoonIcon className={styles.icon} />
                </button>
            );
        default:
            return null;
    }
}
