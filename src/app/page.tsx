import RemainBox from "@/components/assets/remains/remain-box";
import Sidebar from "@/components/assets/sidebar/sidebar";
import DdayBox from "@/components/assets/dday_box/dday_box";
import styles from "./page.module.css";

export default function Home() {
    return (
        <main>
            <RemainBox />
            <section className={styles.main}>
                <Sidebar />
                <div className={styles.content}>
                    <DdayBox />
                </div>
            </section>
        </main>
    );
}
