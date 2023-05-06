import Link from "next/link";
import { SunIcon } from "@heroicons/react/24/outline";
import styles from "./header.module.css";

export default function Header() {
    return (
        <header className={styles.header}>
            <nav>
                <Link className={styles.logo} href="/">
                    석동중 디데이
                </Link>
                <div className={styles.quick_move}>
                    <Link href="/">디데이</Link>
                    <Link href="/">시간표</Link>
                    <Link href="/about">사이트 정보</Link>
                </div>
                <div className={styles.features}>
                    <div className={styles.feature}>
                        <button>
                            <SunIcon className="h-6 w-6 text-gray-400" />
                        </button>
                    </div>
                    <ul className={styles.outside}>
                        <li>
                            <Link className={styles.default} href="https://github.com/AlphaKR93/SchoolDday">
                                소스코드
                            </Link>
                        </li>
                        <li>
                            <Link className={styles.highlight} href="https://toss.me/alphakr93">
                                후원하기
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    );
}
