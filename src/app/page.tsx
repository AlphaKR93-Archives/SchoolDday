import RemainBox from "@/components/modules/remains/remain-box";
import Sidebar from "@/components/main/sidebar/sidebar";
import FilteredDdayValues from "@/components/main/content/index/dday_grid/dday_grid.component";
import { InformationCircleIcon } from "@heroicons/react/24/solid";
import styles from "./page.module.css";

export default function IndexPage() {
    return (
        <main>
            <RemainBox />
            <div className={styles.support}>
                <InformationCircleIcon />
                <span>
                    생일 추가, 오류 신고는 <a href="https://www.instagram.com/alphakr93/">인스타그램 DM</a> 또는{" "}
                    <a href="https://open.kakao.com/me/alphakr93_education">카카오톡 오픈채팅</a> 으로 문의하실 수
                    있습니다.
                </span>
            </div>
            <section className={styles.main}>
                <Sidebar button />
                <FilteredDdayValues />
            </section>
        </main>
    );
}
