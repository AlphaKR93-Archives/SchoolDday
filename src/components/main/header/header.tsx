import Link from "next/link";
import ThemeButton from "@/components/main/header/theme_button";
import SimpleIcon from "@/components/assets/simple-icons/provider";
import KakaoTalkIcon from "@/components/assets/icons/kakaotalk/kakaotalk";
import styles from "./header.module.css";

export default function Header() {
    return (
        <header className={styles.header}>
            <nav>
                <Link className={styles.logo} href="/">
                    석동중 디데이
                </Link>
                <div className={styles.links}>
                    <Link href="/">디데이</Link>
                    <Link href="/links">유용한 링크</Link>
                    <Link href="/temp">물온도 체크</Link>
                    <Link href="/about">사이트 정보</Link>
                </div>
                <div className={styles.buttons}>
                    <div className={styles.icons}>
                        <Link href="https://open.kakao.com/me/alphakr93_education">
                            <KakaoTalkIcon />
                        </Link>
                        <Link href="https://www.instagram.com/alphakr93/">
                            <SimpleIcon
                                id="instagram"
                                color={{
                                    light: { primary: "6B7280", secondary: "000000" },
                                    dark: { primary: "6B7280", secondary: "ffffff" }
                                }}
                            />
                        </Link>
                        <ThemeButton />
                    </div>
                    <ul className={styles.button}>
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
