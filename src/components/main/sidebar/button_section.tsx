import ThemeButton from "@/components/assets/buttons/themer/theme_button.component";
import Link from "next/link";
import KakaoTalkIcon from "@/components/assets/icons/kakaotalk/kakaotalk";
import AnimatedSimpleIcon from "@/components/assets/icons/simple-icons/provider";
import { CurrencyDollarIcon } from "@heroicons/react/24/outline";
import styles from "./sidebar.module.css";

export default function ButtonSection() {
    return (
        <h1 className={styles.button}>
            <Link href="https://open.kakao.com/me/alphakr93_education">
                <KakaoTalkIcon />
            </Link>
            <Link href="https://www.instagram.com/alphakr93/">
                <AnimatedSimpleIcon
                    id="instagram"
                    color={{
                        light: { primary: "6B7280", secondary: "000000" },
                        dark: { primary: "6B7280", secondary: "ffffff" }
                    }}
                />
            </Link>
            <Link href="https://github.com/AlphaKR93/SchoolDday">
                <AnimatedSimpleIcon
                    id="github"
                    color={{
                        light: { primary: "6B7280", secondary: "000000" },
                        dark: { primary: "6B7280", secondary: "ffffff" }
                    }}
                />
            </Link>
            <span className="flex gap-2.5">
                <Link href="https://toss.me/alphakr93">
                    <CurrencyDollarIcon className="!h-[26px] !w-[26px]" />
                </Link>
                <ThemeButton />
            </span>
        </h1>
    );
}
