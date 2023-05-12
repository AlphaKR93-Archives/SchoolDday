import RemainBox from "@/components/assets/remains/remain-box";
import Sidebar from "@/components/assets/sidebar/sidebar";
import FilteredDdayValues from "@/components/main/content/dday_grids";
import Providers from "@/components/store/provider";
import { InformationCircleIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
    return (
        <Providers>
            <main>
                <RemainBox />
                <div className={styles.support}>
                    <InformationCircleIcon width={24} height={24} />
                    <p className={styles.content}>
                        생일 추가, 오류 신고는
                        <Link href="https://www.instagram.com/alphakr93/">인스타그램 DM</Link>또는
                        <Link href="https://open.kakao.com/me/alphakr93_education">카카오톡 오픈채팅</Link>
                        으로 문의하실 수 있습니다.
                    </p>
                </div>
                <section className={styles.main}>
                    <Sidebar />
                    <FilteredDdayValues />
                </section>
            </main>
        </Providers>
    );
}
