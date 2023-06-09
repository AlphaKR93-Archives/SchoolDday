import ThemeButton from "@/components/assets/buttons/themer/theme_button.component";
import KakaoTalkIcon from "@/components/assets/icons/kakaotalk/kakaotalk";
import AnimatedSimpleIcon from "@/components/assets/icons/simple-icons/provider";
import { CurrencyDollarIcon } from "@heroicons/react/24/outline";
import styles from "./sidebar.module.css";

export default function ButtonSection() {
    return (
        <h1 className={styles.button}>
            <a href="https://open.kakao.com/me/alphakr93_education">
                <KakaoTalkIcon />
            </a>
            <a href="https://www.instagram.com/alphakr93/">
                <AnimatedSimpleIcon
                    id="instagram"
                    color={{
                        light: { primary: "6B7280", secondary: "000000" },
                        dark: { primary: "6B7280", secondary: "ffffff" }
                    }}
                />
            </a>
            <a href="https://github.com/AlphaKR93/SchoolDday">
                <AnimatedSimpleIcon
                    id="github"
                    color={{
                        light: { primary: "6B7280", secondary: "000000" },
                        dark: { primary: "6B7280", secondary: "ffffff" }
                    }}
                />
            </a>
            <span className="flex gap-2.5">
                <a href="https://toss.me/alphakr93">
                    <CurrencyDollarIcon className="!h-[26px] !w-[26px]" />
                </a>
                <ThemeButton />
            </span>
        </h1>
    );
}
